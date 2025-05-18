
import { toast } from "sonner";
import { EnrichedVulnerability, RawVulnerability, SeverityLevel } from "@/types/vulnerability";

// Database constants
const DB_NAME = 'VulnerabilityDatabase';
const DB_VERSION = 1;
const RAW_POSTS_STORE = 'rawVulnerabilities';
const ENRICHED_POSTS_STORE = 'enrichedVulnerabilities';

// Open database connection
const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    
    request.onerror = (event) => {
      console.error('Error opening database:', event);
      reject('Could not open database');
    };
    
    request.onsuccess = (event) => {
      resolve(request.result);
    };
    
    request.onupgradeneeded = (event) => {
      const db = request.result;
      
      // Create object stores if they don't exist
      if (!db.objectStoreNames.contains(RAW_POSTS_STORE)) {
        const rawStore = db.createObjectStore(RAW_POSTS_STORE, { keyPath: 'id' });
        rawStore.createIndex('processed', 'processed', { unique: false });
      }
      
      if (!db.objectStoreNames.contains(ENRICHED_POSTS_STORE)) {
        const enrichedStore = db.createObjectStore(ENRICHED_POSTS_STORE, { keyPath: 'id' });
        enrichedStore.createIndex('severityLevel', 'severityLevel', { unique: false });
      }
    };
  });
};

// Get raw posts from database
export const getRawVulnerabilities = async (): Promise<RawVulnerability[]> => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(RAW_POSTS_STORE, 'readonly');
      const store = transaction.objectStore(RAW_POSTS_STORE);
      const request = store.getAll();
      
      request.onsuccess = () => {
        resolve(request.result);
      };
      
      request.onerror = (event) => {
        console.error('Error getting raw vulnerabilities:', event);
        reject('Could not retrieve raw vulnerabilities');
      };
    });
  } catch (error) {
    console.error('Database error:', error);
    return [];
  }
};

// Get enriched posts from database
export const getEnrichedVulnerabilities = async (): Promise<EnrichedVulnerability[]> => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(ENRICHED_POSTS_STORE, 'readonly');
      const store = transaction.objectStore(ENRICHED_POSTS_STORE);
      const request = store.getAll();
      
      request.onsuccess = () => {
        resolve(request.result);
      };
      
      request.onerror = (event) => {
        console.error('Error getting enriched vulnerabilities:', event);
        reject('Could not retrieve enriched vulnerabilities');
      };
    });
  } catch (error) {
    console.error('Database error:', error);
    return [];
  }
};

// Save raw vulnerability to database
export const saveRawVulnerability = async (vulnerability: RawVulnerability): Promise<void> => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(RAW_POSTS_STORE, 'readwrite');
      const store = transaction.objectStore(RAW_POSTS_STORE);
      
      // Check if post already exists
      const getRequest = store.get(vulnerability.id);
      
      getRequest.onsuccess = () => {
        if (!getRequest.result) {
          // Only add if it doesn't exist
          const addRequest = store.add(vulnerability);
          
          addRequest.onsuccess = () => {
            resolve();
          };
          
          addRequest.onerror = (event) => {
            console.error('Error adding raw vulnerability:', event);
            reject('Could not save raw vulnerability');
          };
        } else {
          resolve(); // Already exists, no action needed
        }
      };
      
      getRequest.onerror = (event) => {
        console.error('Error checking raw vulnerability:', event);
        reject('Could not check if vulnerability exists');
      };
    });
  } catch (error) {
    console.error('Database error:', error);
  }
};

// Save enriched vulnerability to database
export const saveEnrichedVulnerability = async (vulnerability: EnrichedVulnerability): Promise<void> => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(ENRICHED_POSTS_STORE, 'readwrite');
      const store = transaction.objectStore(ENRICHED_POSTS_STORE);
      
      // Check if post already exists to update it
      const getRequest = store.get(vulnerability.id);
      
      getRequest.onsuccess = () => {
        const request = getRequest.result 
          ? store.put(vulnerability) // Update existing
          : store.add(vulnerability); // Add new
        
        request.onsuccess = () => {
          resolve();
        };
        
        request.onerror = (event) => {
          console.error('Error saving enriched vulnerability:', event);
          reject('Could not save enriched vulnerability');
        };
      };
      
      getRequest.onerror = (event) => {
        console.error('Error checking enriched vulnerability:', event);
        reject('Could not check if vulnerability exists');
      };
    });
  } catch (error) {
    console.error('Database error:', error);
  }
};

// Mark a raw vulnerability as processed
export const markRawVulnerabilityAsProcessed = async (id: string): Promise<void> => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(RAW_POSTS_STORE, 'readwrite');
      const store = transaction.objectStore(RAW_POSTS_STORE);
      
      // Get the vulnerability first
      const getRequest = store.get(id);
      
      getRequest.onsuccess = () => {
        if (getRequest.result) {
          const vulnerability = getRequest.result;
          vulnerability.processed = true;
          
          // Update the vulnerability
          const updateRequest = store.put(vulnerability);
          
          updateRequest.onsuccess = () => {
            resolve();
          };
          
          updateRequest.onerror = (event) => {
            console.error('Error updating vulnerability status:', event);
            reject('Could not mark vulnerability as processed');
          };
        } else {
          reject('Vulnerability not found');
        }
      };
      
      getRequest.onerror = (event) => {
        console.error('Error getting vulnerability:', event);
        reject('Could not retrieve vulnerability');
      };
    });
  } catch (error) {
    console.error('Database error:', error);
  }
};

// Fetch posts from RSS feed
export const fetchPostsFromRSS = async () => {
  try {
    const response = await fetch('https://cvefeed.io/rssfeed/latest.xml');
    const text = await response.text();
    
    // Parse XML from the RSS feed
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, 'text/xml');
    const items = xml.querySelectorAll('item');
    
    // Process each item in the RSS feed
    let newItemCount = 0;
    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      const id = `raw-${Date.now()}-${index}`;
      const title = item.querySelector('title')?.textContent || '';
      const link = item.querySelector('link')?.textContent || '';
      const description = item.querySelector('description')?.textContent || '';
      const pubDate = item.querySelector('pubDate')?.textContent || '';
      
      const vulnerability: RawVulnerability = {
        id,
        title,
        link,
        description,
        pubDate,
        feedSource: 'cvefeed.io',
        processed: false
      };
      
      // Get existing posts to check for duplicates
      const existingPosts = await getRawVulnerabilities();
      if (!existingPosts.some(post => post.title === title && post.link === link)) {
        await saveRawVulnerability(vulnerability);
        newItemCount++;
      }
    }
    
    toast.success(`Fetched ${newItemCount} new vulnerability posts`);
    return true;
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    toast.error('Failed to fetch vulnerability posts');
    return false;
  }
};

// Simulate AI enrichment process
export const aiEnrichVulnerability = async (vulnerability: RawVulnerability): Promise<EnrichedVulnerability | null> => {
  try {
    // In a real application, this would be an API call to OpenAI
    // For now, we'll simulate the enrichment with dummy data
    
    // Extract CVE ID from title or description
    const cveIdMatch = vulnerability.title.match(/CVE-\d{4}-\d{4,7}/) || 
                       vulnerability.description.match(/CVE-\d{4}-\d{4,7}/);
    const cveId = cveIdMatch ? cveIdMatch[0] : 'Unknown CVE';
    
    // Generate random severity
    const severities: SeverityLevel[] = ['critical', 'high', 'medium', 'low', 'info'];
    const randomSeverity = severities[Math.floor(Math.random() * 3)] as SeverityLevel; // Bias towards higher severities
    
    // Generate random CVSS score based on severity
    let cvssScore;
    switch (randomSeverity) {
      case 'critical': cvssScore = Math.floor(Math.random() * 2) + 9; break; // 9-10
      case 'high': cvssScore = Math.floor(Math.random() * 2) + 7; break; // 7-8
      case 'medium': cvssScore = Math.floor(Math.random() * 2) + 5; break; // 5-6
      case 'low': cvssScore = Math.floor(Math.random() * 2) + 3; break; // 3-4
      default: cvssScore = Math.floor(Math.random() * 2) + 1; // 1-2
    }
    
    // Add a delay to simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Create enhanced vulnerability
    const enriched: EnrichedVulnerability = {
      id: vulnerability.id,
      cveId: cveId,
      title: vulnerability.title,
      link: vulnerability.link,
      description: vulnerability.description,
      pubDate: vulnerability.pubDate,
      feedSource: vulnerability.feedSource,
      affectedProducts: ['Apache Server 2.4.x', 'Windows 10', 'Ubuntu 20.04 LTS'],
      technicalAnalysis: 'This vulnerability allows remote attackers to execute arbitrary code via a crafted HTTP request, related to improper input validation.',
      businessImpact: 'Critical business systems may be compromised, potentially leading to data breaches, service disruption, and regulatory compliance issues.',
      knownExploits: 'Proof-of-concept exploit code is available on GitHub. Active exploitation observed in the wild targeting financial institutions.',
      mitigationStrategies: 'Update to the latest version immediately. Apply network filtering to block suspicious requests. Enable enhanced logging.',
      relatedVulnerabilities: ['CVE-2023-1234', 'CVE-2022-5678'],
      severityLevel: randomSeverity,
      cvssScore: cvssScore
    };
    
    return enriched;
  } catch (error) {
    console.error('Error enriching vulnerability:', error);
    return null;
  }
};

// Process all unprocessed raw vulnerabilities
export const processAllRawVulnerabilities = async () => {
  try {
    const rawPosts = await getRawVulnerabilities();
    const unprocessedPosts = rawPosts.filter(post => !post.processed);
    
    let processedCount = 0;
    let failedCount = 0;
    
    for (const post of unprocessedPosts) {
      try {
        const enriched = await aiEnrichVulnerability(post);
        if (enriched) {
          await saveEnrichedVulnerability(enriched);
          await markRawVulnerabilityAsProcessed(post.id);
          processedCount++;
        } else {
          failedCount++;
        }
      } catch (error) {
        console.error(`Error processing post ${post.id}:`, error);
        failedCount++;
      }
    }
    
    if (processedCount > 0) {
      toast.success(`Successfully enriched ${processedCount} vulnerability posts`);
    }
    
    if (failedCount > 0) {
      toast.error(`Failed to enrich ${failedCount} posts`);
    }
    
    if (unprocessedPosts.length === 0) {
      toast.info('No new vulnerabilities to process');
    }
  } catch (error) {
    console.error('Error processing vulnerabilities:', error);
    toast.error('Database error during vulnerability processing');
  }
};
