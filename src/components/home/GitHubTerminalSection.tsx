
import React, { useState, useEffect } from 'react';
import { Terminal, ArrowUp, ArrowDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

const GitHubTerminalSection = () => {
  const [connected, setConnected] = useState(true); // Set to true by default
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const simulateGitOperation = (operation: 'push' | 'pull') => {
    setIsLoading(true);
    const newLines = [];
    
    if (operation === 'push') {
      newLines.push('> git add .');
      newLines.push('> git commit -m "Update vulnerability fixes"');
      newLines.push('> git push origin main');
      setTimeout(() => newLines.push('Successfully pushed to repository!'), 800);
    } else {
      newLines.push('> git pull origin main');
      setTimeout(() => newLines.push('Pulled latest changes from repository.'), 800);
    }
    
    // Add lines with a slight delay to simulate real terminal behavior
    newLines.forEach((line, index) => {
      setTimeout(() => {
        setTerminalLines(prev => [...prev, line]);
        if (index === newLines.length - 1) {
          setIsLoading(false);
        }
      }, index * 600);
    });
  };

  // Clear terminal when connection state changes and initialize with connection message
  useEffect(() => {
    setTerminalLines([]);
    if (connected) {
      setTerminalLines(['> Connection to GitHub established']);
    }
  }, [connected]);

  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">GitHub Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${connected ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  <span>{connected ? 'Connected to GitHub' : 'Not connected'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Enable GitHub</span>
                  <Switch 
                    checked={connected} 
                    onCheckedChange={setConnected}
                    size="sm"
                  />
                </div>
              </div>
              
              {connected && (
                <>
                  <div className="flex gap-2 mt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => simulateGitOperation('push')}
                      disabled={isLoading}
                    >
                      <ArrowUp className="mr-1 h-4 w-4" /> Push to Git
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => simulateGitOperation('pull')}
                      disabled={isLoading}
                    >
                      <ArrowDown className="mr-1 h-4 w-4" /> Pull from Git
                    </Button>
                  </div>
                  
                  <div className="mt-4 bg-black rounded-md p-3 font-mono text-xs text-green-400 h-36 overflow-y-auto">
                    <div className="flex items-center mb-2">
                      <Terminal className="h-4 w-4 mr-2" />
                      <span className="text-white text-opacity-70">Terminal</span>
                    </div>
                    {terminalLines.map((line, index) => (
                      <div key={index} className="mt-1">{line}</div>
                    ))}
                    {isLoading && <div className="inline-block mt-1 animate-pulse">_</div>}
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GitHubTerminalSection;
