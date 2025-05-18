import { fetchPostsFromRSS } from './api';
import { toast } from "sonner";

// Constants for localStorage keys
const LAST_CHECK_KEY = 'vulnerability_last_check';
const NEXT_FETCH_KEY = 'vulnerability_next_fetch';
const FETCH_HISTORY_KEY = 'vulnerability_fetch_history';
const FETCH_COUNT_KEY = 'vulnerability_fetch_count';

// Types for fetch history
export interface FetchRecord {
  id: string;
  timestamp: number;
  status: 'success' | 'error' | 'processing';
  itemsFetched?: number;
  error?: string;
}

// Get the current fetch schedule state
export const getFetchSchedule = (): { 
  lastCheck: number | null; 
  nextFetch: number | null;
  history: FetchRecord[];
  totalFetches: number;
} => {
  const lastCheck = localStorage.getItem(LAST_CHECK_KEY);
  const nextFetch = localStorage.getItem(NEXT_FETCH_KEY);
  const historyStr = localStorage.getItem(FETCH_HISTORY_KEY);
  const fetchCount = localStorage.getItem(FETCH_COUNT_KEY);
  
  return {
    lastCheck: lastCheck ? parseInt(lastCheck) : null,
    nextFetch: nextFetch ? parseInt(nextFetch) : null,
    history: historyStr ? JSON.parse(historyStr) : [],
    totalFetches: fetchCount ? parseInt(fetchCount) : 0
  };
};

// Save fetch schedule state
const saveFetchSchedule = (lastCheck: number | null, nextFetch: number | null): void => {
  if (lastCheck !== null) {
    localStorage.setItem(LAST_CHECK_KEY, lastCheck.toString());
  }
  if (nextFetch !== null) {
    localStorage.setItem(NEXT_FETCH_KEY, nextFetch.toString());
  }
};

// Increment total fetch count
const incrementFetchCount = (): number => {
  const currentCount = parseInt(localStorage.getItem(FETCH_COUNT_KEY) || '0');
  const newCount = currentCount + 1;
  localStorage.setItem(FETCH_COUNT_KEY, newCount.toString());
  return newCount;
};

// Add a record to fetch history
export const addFetchRecord = (record: FetchRecord): void => {
  const { history } = getFetchSchedule();
  
  // Keep only the most recent 20 records
  const updatedHistory = [record, ...history].slice(0, 20);
  
  localStorage.setItem(FETCH_HISTORY_KEY, JSON.stringify(updatedHistory));
};

// Update a fetch record's status
export const updateFetchRecord = (id: string, updates: Partial<FetchRecord>): void => {
  const { history } = getFetchSchedule();
  
  const updatedHistory = history.map(record => 
    record.id === id ? { ...record, ...updates } : record
  );
  
  localStorage.setItem(FETCH_HISTORY_KEY, JSON.stringify(updatedHistory));
};

// Calculate the next fetch time (5 times per day = every 4.8 hours)
const calculateNextFetchTime = (): number => {
  // 24 hours / 5 fetches = 4.8 hours = 4 hours and 48 minutes = 288 minutes
  const fetchIntervalMinutes = 288; 
  return Date.now() + (fetchIntervalMinutes * 60 * 1000);
};

// Check if a fetch is due
export const checkAndPerformScheduledFetch = async (): Promise<boolean> => {
  const { nextFetch } = getFetchSchedule();
  const now = Date.now();
  
  // If there's no scheduled next fetch, or if it's time for the next fetch
  if (nextFetch === null || now >= nextFetch) {
    // Create a record for this fetch attempt
    const fetchId = `fetch-${Date.now()}`;
    
    const fetchRecord: FetchRecord = {
      id: fetchId,
      timestamp: now,
      status: 'processing'
    };
    
    addFetchRecord(fetchRecord);
    
    try {
      // Perform the fetch
      const result = await fetchPostsFromRSS();
      
      // Update record based on result
      if (result) {
        updateFetchRecord(fetchId, { 
          status: 'success',
        });
        incrementFetchCount();
        toast.success("Scheduled fetch completed successfully");
      } else {
        updateFetchRecord(fetchId, { 
          status: 'error',
          error: 'Fetch failed to return data' 
        });
        toast.error("Scheduled fetch failed");
      }
      
      // Calculate and save next fetch time
      const nextFetchTime = calculateNextFetchTime();
      saveFetchSchedule(now, nextFetchTime);
      
      return true;
    } catch (error) {
      // Handle errors
      updateFetchRecord(fetchId, { 
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
      
      // Calculate and save next fetch time even if there was an error
      const nextFetchTime = calculateNextFetchTime();
      saveFetchSchedule(now, nextFetchTime);
      
      toast.error("Error during scheduled fetch");
      return false;
    }
  }
  
  return false;
};

// Initialize the schedule if it doesn't exist
export const initializeSchedule = (): void => {
  const { nextFetch } = getFetchSchedule();
  
  if (nextFetch === null) {
    // Set the first fetch to happen in 10 seconds
    const initialNextFetch = Date.now() + (10 * 1000);
    saveFetchSchedule(null, initialNextFetch);
  }
};

// Start the background checking process
export const startScheduleChecker = (): void => {
  // Initialize the schedule first
  initializeSchedule();
  
  // Check every minute if a fetch is due
  setInterval(() => {
    checkAndPerformScheduledFetch();
  }, 60 * 1000); // 60 seconds
  
  // Also run a check immediately
  setTimeout(() => {
    checkAndPerformScheduledFetch();
  }, 2000);
};
