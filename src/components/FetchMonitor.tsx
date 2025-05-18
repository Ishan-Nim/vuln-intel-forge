
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Reload } from 'lucide-react';
import { FetchRecord, getFetchSchedule, checkAndPerformScheduledFetch } from '@/lib/scheduledFetchService';
import { format, formatDistanceToNow } from 'date-fns';

export function FetchMonitor() {
  const [monitorData, setMonitorData] = useState({
    lastCheck: null as number | null,
    nextFetch: null as number | null,
    history: [] as FetchRecord[],
    totalFetches: 0
  });
  const [refreshKey, setRefreshKey] = useState(0);

  // Load monitoring data
  useEffect(() => {
    const data = getFetchSchedule();
    setMonitorData(data);
    
    // Set up a timer to refresh the countdown
    const timer = setInterval(() => {
      setRefreshKey(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [refreshKey]);

  // Manual fetch handler
  const handleManualFetch = async () => {
    await checkAndPerformScheduledFetch();
    // Force refresh
    setRefreshKey(prev => prev + 1);
  };

  // Status badge component
  const StatusBadge = ({ status }: { status: string }) => {
    switch (status) {
      case 'success':
        return <Badge className="bg-green-500">Success</Badge>;
      case 'error':
        return <Badge variant="destructive">Error</Badge>;
      case 'processing':
        return <Badge className="bg-yellow-500">Processing</Badge>;
      default:
        return <Badge className="bg-gray-500">Unknown</Badge>;
    }
  };

  // Time formatting
  const formatTime = (timestamp: number | null) => {
    if (!timestamp) return 'Not scheduled';
    return format(new Date(timestamp), 'MMM d, yyyy h:mm:ss a');
  };
  
  // Next fetch countdown
  const getNextFetchCountdown = () => {
    if (!monitorData.nextFetch) return 'Not scheduled';
    
    const now = Date.now();
    if (now >= monitorData.nextFetch) {
      return 'Due now';
    }
    
    return formatDistanceToNow(new Date(monitorData.nextFetch), { addSuffix: true });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>RSS Feed Monitoring</CardTitle>
        <CardDescription>Automatic data fetches occur 5 times per day</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-secondary p-4 rounded-lg">
            <div className="text-2xl font-bold">{monitorData.totalFetches}</div>
            <div className="text-sm text-muted-foreground">Total Auto-Fetches</div>
          </div>
          <div className="bg-secondary p-4 rounded-lg">
            <div className="text-2xl font-bold">{getNextFetchCountdown()}</div>
            <div className="text-sm text-muted-foreground">Next Scheduled Fetch</div>
          </div>
          <div className="bg-secondary p-4 rounded-lg">
            <div className="text-2xl font-bold">{monitorData.history.length}</div>
            <div className="text-sm text-muted-foreground">Recent Fetch Operations</div>
          </div>
        </div>

        <Separator />

        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium">Fetch History</h3>
            <Button variant="outline" size="sm" onClick={handleManualFetch}>
              <Reload className="mr-2 h-4 w-4" />
              Run Manual Fetch
            </Button>
          </div>

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {monitorData.history.length > 0 ? (
                  monitorData.history.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>
                        {formatTime(record.timestamp)}
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={record.status} />
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={2} className="text-center py-4 text-muted-foreground">
                      No fetch history available
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        {monitorData.lastCheck 
          ? `Last check: ${formatTime(monitorData.lastCheck)}` 
          : 'No checks performed yet'}
      </CardFooter>
    </Card>
  );
}
