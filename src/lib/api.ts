
import { toast } from "sonner";
import { EnrichedVulnerability, RawVulnerability, SeverityLevel } from "@/types/vulnerability";
import { supabase } from "@/integrations/supabase/client";

// Get raw posts from Supabase
export const getRawVulnerabilities = async (): Promise<RawVulnerability[]> => {
  try {
    const { data, error } = await supabase
      .from('raw_vulnerabilities')
      .select('*');
    
    if (error) {
      console.error('Error fetching raw vulnerabilities:', error);
      return [];
    }

    console.log(`Retrieved ${data.length} raw vulnerabilities from Supabase`);
    
    // Transform from Supabase format to our app's format
    return data.map(item => ({
      id: item.id,
      title: item.title,
      link: item.link,
      description: item.description || '',
      pubDate: item.pub_date,
      feedSource: item.feed_source,
      processed: item.processed
    }));
  } catch (error) {
    console.error('Database error:', error);
    return [];
  }
};

// Get enriched posts from Supabase
export const getEnrichedVulnerabilities = async (): Promise<EnrichedVulnerability[]> => {
  try {
    const { data, error } = await supabase
      .from('enriched_vulnerabilities')
      .select('*');
    
    if (error) {
      console.error('Error fetching enriched vulnerabilities:', error);
      return [];
    }

    console.log(`Retrieved ${data.length} enriched vulnerabilities from Supabase`);
    
    // Transform from Supabase format to our app's format
    return data.map(item => ({
      id: item.id,
      cveId: item.cve_id,
      title: item.title,
      link: item.link,
      description: item.description || '',
      pubDate: item.pub_date,
      feedSource: item.feed_source,
      affectedProducts: item.affected_products || [],
      technicalAnalysis: item.technical_analysis || '',
      businessImpact: item.business_impact || '',
      knownExploits: item.known_exploits || '',
      mitigationStrategies: item.mitigation_strategies || '',
      relatedVulnerabilities: item.related_vulnerabilities || [],
      severityLevel: item.severity_level as SeverityLevel,
      cvssScore: item.cvss_score
    }));
  } catch (error) {
    console.error('Database error:', error);
    return [];
  }
};

// Save raw vulnerability to Supabase
export const saveRawVulnerability = async (vulnerability: RawVulnerability): Promise<void> => {
  try {
    // Check if vulnerability already exists
    const { data: existingData } = await supabase
      .from('raw_vulnerabilities')
      .select('id')
      .eq('id', vulnerability.id)
      .single();
    
    if (!existingData) {
      // Only insert if it doesn't exist
      const { error } = await supabase
        .from('raw_vulnerabilities')
        .insert({
          id: vulnerability.id,
          title: vulnerability.title,
          link: vulnerability.link,
          description: vulnerability.description,
          pub_date: vulnerability.pubDate,
          feed_source: vulnerability.feedSource,
          processed: vulnerability.processed
        });
      
      if (error) {
        console.error('Error saving raw vulnerability:', error);
      } else {
        console.log(`Saved raw vulnerability ${vulnerability.id} to Supabase`);
      }
    }
  } catch (error) {
    console.error('Database error:', error);
  }
};

// Save enriched vulnerability to Supabase
export const saveEnrichedVulnerability = async (vulnerability: EnrichedVulnerability): Promise<void> => {
  try {
    // Check if vulnerability already exists
    const { data: existingData } = await supabase
      .from('enriched_vulnerabilities')
      .select('id')
      .eq('id', vulnerability.id)
      .single();
    
    const vulnerabilityData = {
      id: vulnerability.id,
      cve_id: vulnerability.cveId,
      title: vulnerability.title,
      link: vulnerability.link,
      description: vulnerability.description,
      pub_date: vulnerability.pubDate,
      feed_source: vulnerability.feedSource,
      affected_products: vulnerability.affectedProducts,
      technical_analysis: vulnerability.technicalAnalysis,
      business_impact: vulnerability.businessImpact,
      known_exploits: vulnerability.knownExploits,
      mitigation_strategies: vulnerability.mitigationStrategies,
      related_vulnerabilities: vulnerability.relatedVulnerabilities,
      severity_level: vulnerability.severityLevel,
      cvss_score: vulnerability.cvssScore
    };
    
    let error;
    
    if (existingData) {
      // Update if it exists
      const response = await supabase
        .from('enriched_vulnerabilities')
        .update(vulnerabilityData)
        .eq('id', vulnerability.id);
      
      error = response.error;
    } else {
      // Insert if it doesn't exist
      const response = await supabase
        .from('enriched_vulnerabilities')
        .insert(vulnerabilityData);
      
      error = response.error;
    }
    
    if (error) {
      console.error('Error saving enriched vulnerability:', error);
    } else {
      console.log(`Saved enriched vulnerability ${vulnerability.id} to Supabase`);
    }
  } catch (error) {
    console.error('Database error:', error);
  }
};

// Mark a raw vulnerability as processed
export const markRawVulnerabilityAsProcessed = async (id: string): Promise<void> => {
  try {
    const { error } = await supabase
      .from('raw_vulnerabilities')
      .update({ processed: true })
      .eq('id', id);
    
    if (error) {
      console.error('Error marking vulnerability as processed:', error);
    } else {
      console.log(`Marked vulnerability ${id} as processed in Supabase`);
    }
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
    const processPromises = [];
    
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
      
      // Save vulnerability to Supabase
      processPromises.push(saveRawVulnerability(vulnerability).then(() => { newItemCount++; }));
    }
    
    // Wait for all saves to complete
    await Promise.all(processPromises);
    
    console.log(`Fetched ${newItemCount} new vulnerability posts`);
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
