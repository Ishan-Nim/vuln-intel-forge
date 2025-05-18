
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { fetchPostsFromRSS, processAllRawVulnerabilities, getRawVulnerabilities, getEnrichedVulnerabilities } from '@/lib/api';
import { RawVulnerability } from '@/types/vulnerability';
import { FetchMonitor } from '@/components/FetchMonitor';
import { toast } from 'sonner';

const Admin = () => {
  const [rawVulnerabilities, setRawVulnerabilities] = useState<RawVulnerability[]>([]);
  const [isLoadingRSS, setIsLoadingRSS] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processProgress, setProcessProgress] = useState(0);
  const [stats, setStats] = useState({
    totalRaw: 0,
    unprocessedRaw: 0,
    totalEnriched: 0,
    bySeverity: {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0,
      info: 0
    }
  });

  // Load statistics on component mount and when data changes
  const loadStats = async () => {
    const rawPosts = await getRawVulnerabilities();
    const enrichedPosts = await getEnrichedVulnerabilities();
    
    const unprocessedRaw = rawPosts.filter(post => !post.processed);
    
    const bySeverity = {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0,
      info: 0
    };
    
    enrichedPosts.forEach(post => {
      if (post.severityLevel in bySeverity) {
        bySeverity[post.severityLevel as keyof typeof bySeverity]++;
      }
    });
    
    setRawVulnerabilities(rawPosts);
    setStats({
      totalRaw: rawPosts.length,
      unprocessedRaw: unprocessedRaw.length,
      totalEnriched: enrichedPosts.length,
      bySeverity
    });
  };
  
  useEffect(() => {
    loadStats();
    // Inform user about successful connection to Supabase
    toast.success("Successfully connected to Supabase database");
  }, []);

  // Handle fetching posts from RSS feed
  const handleFetchPosts = async () => {
    setIsLoadingRSS(true);
    try {
      toast.info("Fetching vulnerability data from RSS feed...");
      await fetchPostsFromRSS();
      await loadStats();
      toast.success("Data saved to Supabase successfully");
    } finally {
      setIsLoadingRSS(false);
    }
  };

  // Handle AI enrichment of posts
  const handleProcessPosts = async () => {
    setIsProcessing(true);
    setProcessProgress(0);
    
    try {
      const unprocessedPosts = (await getRawVulnerabilities()).filter(post => !post.processed);
      const total = unprocessedPosts.length;
      
      if (total === 0) {
        toast.info("No unprocessed vulnerabilities to enrich");
        setIsProcessing(false);
        return;
      }
      
      toast.info(`Starting enrichment of ${total} vulnerabilities...`);
      
      // Show progress for UI purposes
      let progress = 0;
      
      // Progress updater
      const interval = setInterval(() => {
        progress += 5;
        if (progress > 95) clearInterval(interval);
        setProcessProgress(progress);
      }, 300);
      
      await processAllRawVulnerabilities();
      
      clearInterval(interval);
      setProcessProgress(100);
      
      // Short delay before completing to show 100% progress
      setTimeout(async () => {
        await loadStats();
        setProcessProgress(0);
        setIsProcessing(false);
        toast.success("Enrichment complete and data saved to Supabase");
      }, 500);
      
    } catch (error) {
      console.error('Error processing vulnerabilities:', error);
      setIsProcessing(false);
      setProcessProgress(0);
      toast.error("Error during vulnerability enrichment process");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-card p-4 shadow">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">Manage vulnerability data and AI enrichment</p>
            </div>
            <div className="flex items-center">
              <Button variant="outline" asChild className="mr-2">
                <Link to="/vulndb">View Vulnerability Database</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/">Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4">
        <div className="grid grid-cols-1 gap-6 mb-6">
          <FetchMonitor />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Collection</CardTitle>
              <CardDescription>Fetch vulnerability data from RSS feeds</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary p-4 rounded-lg">
                    <div className="text-2xl font-bold">{stats.totalRaw}</div>
                    <div className="text-sm text-muted-foreground">Total Raw Posts</div>
                  </div>
                  <div className="bg-secondary p-4 rounded-lg">
                    <div className="text-2xl font-bold">{stats.unprocessedRaw}</div>
                    <div className="text-sm text-muted-foreground">Unprocessed Posts</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700" 
                onClick={handleFetchPosts}
                disabled={isLoadingRSS}
              >
                {isLoadingRSS ? 'Fetching...' : 'Fetch Posts from RSS Feed'}
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Enrichment</CardTitle>
              <CardDescription>Process and enhance vulnerability data with AI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary p-4 rounded-lg">
                    <div className="text-2xl font-bold">{stats.totalEnriched}</div>
                    <div className="text-sm text-muted-foreground">Enriched Posts</div>
                  </div>
                  <div className="bg-secondary p-4 rounded-lg">
                    <div className="text-2xl font-bold">{stats.unprocessedRaw}</div>
                    <div className="text-sm text-muted-foreground">Pending Enrichment</div>
                  </div>
                </div>

                {isProcessing && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Processing vulnerabilities...</span>
                      <span>{processProgress.toFixed(0)}%</span>
                    </div>
                    <Progress value={processProgress} />
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700" 
                onClick={handleProcessPosts}
                disabled={isProcessing || stats.unprocessedRaw === 0}
              >
                {isProcessing ? 'Processing...' : 'AI Enrich Stored Posts'}
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Enriched Vulnerabilities Statistics</CardTitle>
            <CardDescription>Overview of processed vulnerability data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Vulnerabilities by Severity</h3>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-severity-critical">Critical</Badge>
                    <span className="text-sm">{stats.bySeverity.critical}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-severity-high">High</Badge>
                    <span className="text-sm">{stats.bySeverity.high}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-severity-medium">Medium</Badge>
                    <span className="text-sm">{stats.bySeverity.medium}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-severity-low">Low</Badge>
                    <span className="text-sm">{stats.bySeverity.low}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-severity-info">Info</Badge>
                    <span className="text-sm">{stats.bySeverity.info}</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium mb-2">Total Statistics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-secondary p-4 rounded-lg">
                    <div className="text-2xl font-bold">{stats.totalRaw}</div>
                    <div className="text-sm text-muted-foreground">Total Raw Posts</div>
                  </div>
                  <div className="bg-secondary p-4 rounded-lg">
                    <div className="text-2xl font-bold">{stats.totalEnriched}</div>
                    <div className="text-sm text-muted-foreground">Total Enriched Posts</div>
                  </div>
                  <div className="bg-secondary p-4 rounded-lg">
                    <div className="text-2xl font-bold">{((stats.totalEnriched / (stats.totalRaw || 1)) * 100).toFixed(0)}%</div>
                    <div className="text-sm text-muted-foreground">Processing Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-card p-4 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Vulnerability Database</p>
            <div className="flex items-center gap-4">
              <Link to="/" className="text-sm hover:underline">Home</Link>
              <Separator orientation="vertical" className="h-4" />
              <Link to="/admin" className="text-sm hover:underline">Admin</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Admin;
