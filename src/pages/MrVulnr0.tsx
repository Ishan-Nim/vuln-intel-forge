import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  Shield, 
  Code, 
  AlertCircle, 
  FileText, 
  CheckCircle,
  Send,
  X,
  MessageCircle,
  Github,
  FileUp,
  Terminal,
  ArrowUp,
  ArrowDown,
  Loader2,
  BarChart,
  FileWarning
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";

type Message = {
  id: string;
  content: string;
  type: 'user' | 'ai';
  timestamp: Date;
  code?: string;
};

type Vulnerability = {
  id: string;
  name: string;
  severity: 'high' | 'medium' | 'low';
  file: string;
  details: string;
};

type ContextItem = {
  id: string;
  name: string;
  files: string[];
  active: boolean;
};

type ReportAnalysis = {
  totalVulnerabilities: number;
  criticalCount: number;
  highCount: number;
  mediumCount: number;
  lowCount: number;
  fixPriority: string;
  summary: string;
  vulnerabilities: Array<{
    name: string;
    severity: string;
    description: string;
    recommendation: string;
  }>;
};

const MrVulnr0 = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Dr. 0/1, your AI vulnerability assistant. How can I help you today?",
      type: 'ai',
      timestamp: new Date()
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showCodeView, setShowCodeView] = useState(true);
  const [activePanel, setActivePanel] = useState<'chat' | 'code' | 'report'>('chat');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const [contextItems, setContextItems] = useState<ContextItem[]>([
    {
      id: '1',
      name: 'auth-service',
      files: ['login.js', 'auth.js', 'session.js'],
      active: true
    },
    {
      id: '2',
      name: 'payment-service',
      files: ['checkout.js', 'stripe.js', 'payment.js'],
      active: false
    }
  ]);
  
  const [vulnerabilities, setVulnerabilities] = useState<Vulnerability[]>([
    {
      id: '1',
      name: 'Cross-Site Scripting (XSS)',
      severity: 'high',
      file: 'login.js',
      details: 'Unsanitized user input directly inserted into the DOM.'
    },
    {
      id: '2',
      name: 'SQL Injection',
      severity: 'high',
      file: 'auth.js',
      details: 'Raw user input used in SQL query without parameterization.'
    },
    {
      id: '3',
      name: 'Insecure Direct Object Reference',
      severity: 'medium',
      file: 'session.js',
      details: 'User IDs directly used in URLs without proper authorization.'
    }
  ]);
  
  // GitHub integration state
  const [gitEnabled, setGitEnabled] = useState(true);
  const [terminalOutput, setTerminalOutput] = useState("Waiting for command...");
  
  // Report upload and analysis state
  const [isUploading, setIsUploading] = useState(false);
  const [reportAnalysis, setReportAnalysis] = useState<ReportAnalysis | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const { toast } = useToast();
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      type: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Force scroll to bottom after sending message
    setTimeout(scrollToBottom, 100);
    
    // Indicate loading state
    setIsLoading(true);
    
    try {
      // Call the OpenAI API through our Supabase edge function
      const { data, error } = await supabase.functions.invoke('chat', {
        body: { message: inputValue }
      });
      
      if (error) {
        console.error('Error calling chat function:', error);
        toast({
          variant: "destructive",
          description: 'Failed to get response from AI assistant'
        });
        
        // Add error message
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "I'm having trouble connecting to my knowledge base right now. Please try again later.",
          type: 'ai',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
      } else {
        // Process the AI response
        const responseContent = data.content;
        
        // Extract code if present (simple heuristic - look for code blocks)
        let mainContent = responseContent;
        let codeContent = undefined;
        
        const codeBlockMatch = responseContent.match(/```[\s\S]*?```/);
        if (codeBlockMatch) {
          codeContent = codeBlockMatch[0].replace(/```(?:[\w]*)?[\r\n]?/, '').replace(/```$/, '').trim();
          mainContent = responseContent.replace(codeBlockMatch[0], '').trim();
        }
        
        // Add AI response message
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: mainContent,
          type: 'ai',
          timestamp: new Date(),
          code: codeContent
        };
        
        setMessages(prev => [...prev, aiResponse]);
      }
    } catch (err) {
      console.error('Exception calling chat function:', err);
      toast({
        variant: "destructive",
        description: 'Failed to communicate with AI assistant'
      });
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I encountered an error while processing your request. Please try again.",
        type: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      // Force scroll to bottom after receiving response
      setTimeout(scrollToBottom, 100);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast({
          description: "Code copied to clipboard!",
          duration: 3000,
        });
      },
      (err) => {
        console.error('Failed to copy: ', err);
        toast({
          variant: "destructive",
          description: "Failed to copy code.",
          duration: 3000,
        });
      }
    );
  };

  const applyFix = () => {
    toast({
      description: "Fix applied successfully!",
      duration: 3000,
    });
  };
  
  const setActiveContext = (id: string) => {
    setContextItems(prev => prev.map(item => ({
      ...item,
      active: item.id === id
    })));
  };

  // GitHub integration functions
  const startPush = () => {
    setTerminalOutput("Preparing to push changes to GitHub...\n> git add .\n> git commit -m \"AI-generated security patches\"\n> git push origin main\nSuccess! Changes pushed to repository.");
  };

  const startPull = () => {
    setTerminalOutput("Pulling latest changes from GitHub...\n> git pull origin main\nSuccess! Repository is now up to date.");
  };
  
  // Report upload and analysis functions
  const handleReportUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const handleReportFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check if file is markdown
    if (file.type !== 'text/markdown' && !file.name.endsWith('.md')) {
      toast({
        variant: "destructive",
        description: "Please upload a Markdown (.md) file",
        duration: 3000,
      });
      return;
    }
    
    setIsUploading(true);
    
    try {
      // Read the file content
      const fileContent = await file.text();
      console.log("File content length:", fileContent.length);
      
      // Call the Supabase edge function directly with the text content
      const { data, error } = await supabase.functions.invoke('analyze-report', {
        body: { reportContent: fileContent }
      });
      
      if (error) {
        throw new Error(error.message || 'Failed to analyze report');
      }
      
      if (!data || !data.analysis) {
        throw new Error('Invalid response from analysis function');
      }
      
      // Set the analysis result
      setReportAnalysis(data.analysis);
      
      toast({
        description: "Report analyzed successfully!",
        duration: 3000,
      });
      
      // Switch to the report panel
      setActivePanel('report');
      
    } catch (error) {
      console.error('Error analyzing report:', error);
      toast({
        variant: "destructive",
        description: `Failed to analyze report: ${error.message}`,
        duration: 3000,
      });
    } finally {
      setIsUploading(false);
      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className="container-fluid p-0 h-screen">
      <div className="h-full">
        {/* Main Demo Section */}
        <div className="h-full border rounded-lg overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 h-full">
            {/* Sidebar */}
            <div className="md:col-span-1 bg-sidebar border-r">
              <div className="p-4 h-full flex flex-col">
                <div>
                  <Button variant="ghost" className="w-full justify-start mb-4 text-md font-medium">
                    <MessageCircle className="mr-2" size={18} />
                    New Chat
                  </Button>
                  
                  <div className="font-medium mb-2 text-xs uppercase text-muted-foreground tracking-wider">
                    CONTEXT
                  </div>
                  
                  {contextItems.map(item => (
                    <Card 
                      key={item.id} 
                      className={cn(
                        "mb-3 cursor-pointer transition-colors",
                        item.active && "border-primary"
                      )}
                      onClick={() => setActiveContext(item.id)}
                    >
                      <CardContent className="p-3 text-sm">
                        <div className="font-medium">{item.name}</div>
                        {item.active && item.files.map((file, index) => (
                          <div 
                            key={index} 
                            className={cn(
                              "text-xs mt-1 flex items-center",
                              index === 0 ? "text-blue-500 font-medium" : "text-muted-foreground"
                            )}
                          >
                            {index === 0 && <Code size={12} className="mr-1" />}
                            {file}{index === 0 && " - Currently viewing"}
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                  
                  <Card className="mb-4">
                    <CardContent className="p-3 text-sm">
                      <div className="font-medium text-destructive flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        Vulnerabilities
                      </div>
                      <div className="text-xs">{vulnerabilities.length} issues found</div>
                      
                      <Accordion type="single" collapsible className="mt-2">
                        <AccordionItem value="vulnerabilities">
                          <AccordionTrigger className="py-1 text-xs">View details</AccordionTrigger>
                          <AccordionContent>
                            <div className="max-h-[200px] overflow-y-auto">
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead className="w-[100px] text-xs p-1">Severity</TableHead>
                                    <TableHead className="text-xs p-1">Issue</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {vulnerabilities.map(vuln => (
                                    <TableRow key={vuln.id}>
                                      <TableCell className="p-1">
                                        <span className={cn(
                                          "inline-block rounded-full px-2 py-0.5 text-[10px] font-bold",
                                          vuln.severity === 'high' ? "bg-red-100 text-red-800" :
                                          vuln.severity === 'medium' ? "bg-yellow-100 text-yellow-800" :
                                          "bg-blue-100 text-blue-800"
                                        )}>
                                          {vuln.severity.toUpperCase()}
                                        </span>
                                      </TableCell>
                                      <TableCell className="text-xs p-1">
                                        <div className="font-medium">{vuln.name}</div>
                                        <div className="text-muted-foreground text-[10px]">in {vuln.file}</div>
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-auto space-y-2">
                  <div className="font-medium mb-2 text-xs uppercase text-muted-foreground tracking-wider">
                    CONNECT
                  </div>
                  
                  {/* GitHub Integration Section */}
                  <Card className="mb-4 border border-primary/50 bg-primary/5">
                    <CardContent className="p-3 text-sm">
                      <div className="font-medium flex items-center gap-1 mb-2">
                        <Github size={14} className="text-primary" />
                        GitHub Integration
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">
                        Stay in sync with your codebase — effortlessly and securely.
                      </div>
                      
                      <div className="bg-card border rounded-md p-2 mb-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-green-500" />
                          <span className="text-xs font-medium">GitHub Connected</span>
                        </div>
                        
                        <div className="flex items-center justify-between mt-2">
                          <div className="text-xs">Status: <span className="text-green-500">🟢 Connected</span></div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs">Toggle:</span>
                            <Switch 
                              checked={gitEnabled} 
                              onCheckedChange={setGitEnabled}
                              size="sm"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-1.5 mb-2">
                        <div className="text-xs font-medium">🔘 Actions</div>
                        <div className="text-[10px] text-muted-foreground">
                          Take full control over your repository with a single click:
                        </div>
                        <div className="flex gap-2 mt-2">
                          <Button 
                            onClick={startPush}
                            size="sm" 
                            variant="outline"
                            className="text-xs w-full"
                            disabled={!gitEnabled}
                          >
                            <ArrowUp size={14} className="mr-1" />
                            Push to Git
                          </Button>
                          <Button 
                            onClick={startPull}
                            size="sm" 
                            variant="outline"
                            className="text-xs w-full"
                            disabled={!gitEnabled}
                          >
                            <ArrowDown size={14} className="mr-1" />
                            Pull from Git
                          </Button>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-xs font-medium flex items-center gap-1">
                          <Terminal size={12} />
                          Mini Terminal
                        </div>
                        <div className="bg-black text-green-500 text-[10px] rounded p-2 mt-1 font-mono h-[80px] overflow-auto whitespace-pre-wrap">
                          {terminalOutput}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start" 
                    size="sm"
                    onClick={handleReportUploadClick}
                  >
                    <FileUp size={16} className="mr-2" />
                    Upload Report
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".md,text/markdown"
                      onChange={handleReportFileChange}
                      className="hidden"
                    />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 flex flex-col h-full">
              {/* Tab Nav */}
              <div className="flex border-b">
                <Button 
                  variant="ghost" 
                  className={cn(
                    "rounded-none border-b-2 px-4", 
                    activePanel === 'chat' 
                      ? "border-primary text-primary" 
                      : "border-transparent text-muted-foreground"
                  )}
                  onClick={() => setActivePanel('chat')}
                >
                  <MessageCircle size={18} className="mr-2" />
                  Chat
                </Button>
                <Button 
                  variant="ghost" 
                  className={cn(
                    "rounded-none border-b-2 px-4", 
                    activePanel === 'code' 
                      ? "border-primary text-primary" 
                      : "border-transparent text-muted-foreground"
                  )}
                  onClick={() => setActivePanel('code')}
                >
                  <Terminal size={18} className="mr-2" />
                  Code
                </Button>
                <Button 
                  variant="ghost" 
                  className={cn(
                    "rounded-none border-b-2 px-4", 
                    activePanel === 'report' 
                      ? "border-primary text-primary" 
                      : "border-transparent text-muted-foreground"
                  )}
                  onClick={() => setActivePanel('report')}
                >
                  <BarChart size={18} className="mr-2" />
                  Report Analysis
                </Button>
              </div>

              {/* Panel Container */}
              <div className="flex-1 overflow-hidden">
                {activePanel === 'chat' && (
                  <div className="flex flex-col h-full">
                    {/* Messages Container - Replace with ScrollArea component */}
                    <ScrollArea className="flex-1 p-4">
                      <div className="space-y-4">
                        {messages.map((msg) => (
                          <div key={msg.id} className={cn(
                            "flex",
                            msg.type === 'user' ? "justify-end" : "justify-start"
                          )}>
                            <div className={cn(
                              "max-w-[80%] rounded-lg p-4",
                              msg.type === 'user' 
                                ? "chatgpt-user-bubble" 
                                : "chatgpt-assistant-bubble"
                            )}>
                              {msg.type === 'ai' && (
                                <div className="flex items-center gap-2 mb-2">
                                  <Shield className="text-primary" size={20} />
                                  <div className="font-medium">Dr. 0/1</div>
                                </div>
                              )}
                              <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                              
                              {msg.code && (
                                <div className="mt-3">
                                  <div className="bg-muted rounded-md p-3 mb-3 text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                                    {msg.code}
                                  </div>
                                  <div className="flex justify-end gap-2">
                                    <Button 
                                      variant="outline" 
                                      size="sm" 
                                      onClick={() => copyToClipboard(msg.code || '')}
                                    >
                                      Copy Code
                                    </Button>
                                    <Button 
                                      size="sm" 
                                      onClick={applyFix}
                                      className="chatgpt-button"
                                    >
                                      Apply Fix
                                    </Button>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                        {isLoading && (
                          <div className="flex">
                            <div className="max-w-[80%] rounded-lg p-4 chatgpt-assistant-bubble">
                              <div className="flex items-center gap-2">
                                <Shield className="text-primary" size={20} />
                                <div className="font-medium">Dr. 0/1</div>
                                <div className="ml-2 flex items-center">
                                  <Loader2 size={16} className="animate-spin" />
                                </div>
                              </div>
                              <p className="text-sm mt-2 text-muted-foreground">Running a quick scan... 🔍</p>
                            </div>
                          </div>
                        )}
                        <div ref={messagesEndRef} />
                      </div>
                    </ScrollArea>
                    
                    {/* Input Area */}
                    <div className="p-4 border-t">
                      <div className="relative">
                        <Textarea 
                          placeholder="Ask me about security vulnerabilities..." 
                          className="pr-12 min-h-[60px] resize-none"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyDown={handleKeyPress}
                          rows={3}
                          maxLength={2000}
                        />
                        <Button 
                          size="icon" 
                          className="absolute right-2 bottom-2 rounded-full chatgpt-button"
                          onClick={handleSendMessage}
                          disabled={isLoading || !inputValue.trim()}
                        >
                          <Send size={18} />
                        </Button>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2 text-center">
                        Dr. 0/1 can assist with identifying and fixing security vulnerabilities in your code.
                      </div>
                    </div>
                  </div>
                )}
                
                {activePanel === 'code' && showCodeView && (
                  <div className="flex flex-col h-full">
                    <div className="p-4 flex-1 overflow-y-auto">
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-mono text-sm">login.js</div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View Diff
                          </Button>
                          <Button size="sm" onClick={applyFix}>
                            Apply Fix
                          </Button>
                        </div>
                      </div>
                      
                      <Card className="overflow-hidden">
                        <CardContent className="p-0 font-mono text-xs">
                          <pre className="p-4 bg-card border-b overflow-x-auto">
{`function validateLogin(username, password) {
  // Get user input
  const userInput = document.getElementById('username').value;
  document.getElementById('welcome').innerHTML = 'Welcome, ' + userInput;
  
  // WARNING: Potential XSS vulnerability above
  
  // Secure version:
  // const safeInput = DOMPurify.sanitize(userInput);
  // document.getElementById('welcome').textContent = 'Welcome, ' + safeInput;
  
  return validateCredentials(username, password);
}`}
                          </pre>
                        </CardContent>
                      </Card>
                      
                      <div className="flex justify-between mt-4">
                        <Button variant="outline" size="sm">
                          <FileText size={16} className="mr-2" />
                          Switch File
                        </Button>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Previous Issue
                          </Button>
                          <Button variant="outline" size="sm">
                            Next Issue
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activePanel === 'report' && (
                  <div className="flex flex-col h-full overflow-auto">
                    <div className="p-4">
                      <div className="flex items-start gap-3 mb-4">
                        <Shield className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="font-medium mb-1">Report Analysis</p>
                          <p className="text-sm">Upload your Markdown security report to analyze vulnerabilities and get recommended fixes.</p>
                        </div>
                      </div>
                      
                      {!reportAnalysis ? (
                        <div 
                          className="border-2 border-dashed rounded-lg p-12 mb-6 text-center cursor-pointer hover:bg-muted/30 transition-colors"
                          onClick={handleReportUploadClick}
                        >
                          <div className="flex flex-col items-center justify-center">
                            {isUploading ? (
                              <Loader2 className="h-10 w-10 text-muted-foreground animate-spin mb-3" />
                            ) : (
                              <FileWarning className="h-10 w-10 text-muted-foreground mb-3" />
                            )}
                            <p className="text-lg font-medium mb-2">
                              {isUploading ? "Analyzing report..." : "Upload Security Report"}
                            </p>
                            <p className="text-sm text-muted-foreground mb-4">
                              Upload your Markdown (.md) report file for AI analysis
                            </p>
                            <Button
                              variant="outline"
                              onClick={handleReportUploadClick}
                              disabled={isUploading}
                              className="relative"
                            >
                              <FileUp className="mr-2" />
                              {isUploading ? "Analyzing..." : "Select Report File"}
                              <input
                                ref={fileInputRef}
                                type="file"
                                accept=".md,text/markdown"
                                onChange={handleReportFileChange}
                                className="hidden"
                                disabled={isUploading}
                              />
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          <div className="bg-muted/20 rounded-lg p-4">
                            <h3 className="text-lg font-medium mb-4">Report Summary</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <Card className="bg-card">
                                <CardContent className="p-6 text-center">
                                  <p className="text-sm text-muted-foreground mb-1">Total Vulnerabilities</p>
                                  <p className="text-4xl font-bold">{reportAnalysis.totalVulnerabilities}</p>
                                </CardContent>
                              </Card>
                              <Card className="bg-card">
                                <CardContent className="p-6 text-center">
                                  <p className="text-sm text-muted-foreground mb-1">Critical/High</p>
                                  <p className="text-4xl font-bold text-destructive">
                                    {reportAnalysis.criticalCount + reportAnalysis.highCount}
                                  </p>
                                </CardContent>
                              </Card>
                              <Card className="bg-card">
                                <CardContent className="p-6">
                                  <p className="text-sm text-muted-foreground mb-1 text-center">Fix Priority</p>
                                  <p className="text-lg font-medium text-center">{reportAnalysis.fixPriority}</p>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-medium mb-3">Analysis Summary</h3>
                            <Card className="bg-card">
                              <CardContent className="p-4">
                                <p className="text-sm">{reportAnalysis.summary}</p>
                              </CardContent>
                            </Card>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-medium mb-3">Vulnerabilities</h3>
                            <div className="space-y-3">
                              {reportAnalysis.vulnerabilities.map((vuln, index) => (
                                <Card key={index} className="bg-card">
                                  <CardContent className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                      <h4 className="text-md font-medium">{vuln.name}</h4>
                                      <span className={cn(
                                        "inline-block rounded-full px-2 py-0.5 text-xs font-bold",
                                        vuln.severity === 'critical' ? "bg-red-100 text-red-800" :
                                        vuln.severity === 'high' ? "bg-red-100 text-red-800" :
                                        vuln.severity === 'medium' ? "bg-yellow-100 text-yellow-800" :
                                        "bg-blue-100 text-blue-800"
                                      )}>
                                        {vuln.severity.toUpperCase()}
                                      </span>
                                    </div>
                                    <div className="text-sm mb-2">{vuln.description}</div>
                                    <div>
                                      <p className="text-sm font-medium">Recommendation:</p>
                                      <p className="text-sm text-muted-foreground">{vuln.recommendation}</p>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex justify-end">
                            <Button 
                              variant="outline" 
                              onClick={() => {
                                setReportAnalysis(null);
                                if (fileInputRef.current) {
                                  fileInputRef.current.value = '';
                                }
                              }}
                              className="mr-2"
                            >
                              Clear Analysis
                            </Button>
                            <Button onClick={handleReportUploadClick}>
                              <FileUp className="mr-2" />
                              Upload New Report
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MrVulnr0;
