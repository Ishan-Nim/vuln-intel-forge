
import { toast } from "sonner";
import { EnrichedVulnerability, RawVulnerability } from "@/types/vulnerability";

// Mock database tables using local storage
const RAW_POSTS_KEY = 'vulnerabilitydb_raw_posts';
const ENRICHED_POSTS_KEY = 'vulnerabilitydb_enriched_posts';

// Initialize local storage with empty arrays if not present
const initializeStorage = () => {
  if (!localStorage.getItem(RAW_POSTS_KEY)) {
    localStorage.setItem(RAW_POSTS_KEY, JSON.stringify([]));
  }
  if (!localStorage.getItem(ENRICHED_POSTS_KEY)) {
    localStorage.setItem(ENRICHED_POSTS_KEY, JSON.stringify([]));
  }
};

// Get raw posts from local storage
export const getRawVulnerabilities = (): RawVulnerability[] => {
  initializeStorage();
  return JSON.parse(localStorage.getItem(RAW_POSTS_KEY) || '[]');
};

// Get enriched posts from local storage
export const getEnrichedVulnerabilities = (): EnrichedVulnerability[] => {
  initializeStorage();
  return JSON.parse(localStorage.getItem(ENRICHED_POSTS_KEY) || '[]');
};

// Save raw post to local storage
export const saveRawVulnerability = (vulnerability: RawVulnerability) => {
  const posts = getRawVulnerabilities();
  // Check if post already exists to avoid duplicates
  if (!posts.some(post => post.id === vulnerability.id)) {
    posts.push(vulnerability);
    localStorage.setItem(RAW_POSTS_KEY, JSON.stringify(posts));
  }
};

// Save enriched post to local storage
export const saveEnrichedVulnerability = (vulnerability: EnrichedVulnerability) => {
  const posts = getEnrichedVulnerabilities();
  // Check if post already exists, update if it does
  const existingIndex = posts.findIndex(post => post.id === vulnerability.id);
  if (existingIndex >= 0) {
    posts[existingIndex] = vulnerability;
  } else {
    posts.push(vulnerability);
  }
  localStorage.setItem(ENRICHED_POSTS_KEY, JSON.stringify(posts));
};

// Mark a raw vulnerability as processed
export const markRawVulnerabilityAsProcessed = (id: string) => {
  const posts = getRawVulnerabilities();
  const updatedPosts = posts.map(post => 
    post.id === id ? { ...post, processed: true } : post
  );
  localStorage.setItem(RAW_POSTS_KEY, JSON.stringify(updatedPosts));
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
    items.forEach((item, index) => {
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
      
      // Save to local storage
      const existingPosts = getRawVulnerabilities();
      if (!existingPosts.some(post => post.title === title && post.link === link)) {
        saveRawVulnerability(vulnerability);
        newItemCount++;
      }
    });
    
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
  const rawPosts = getRawVulnerabilities();
  const unprocessedPosts = rawPosts.filter(post => !post.processed);
  
  let processedCount = 0;
  let failedCount = 0;
  
  for (const post of unprocessedPosts) {
    try {
      const enriched = await aiEnrichVulnerability(post);
      if (enriched) {
        saveEnrichedVulnerability(enriched);
        markRawVulnerabilityAsProcessed(post.id);
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
};
