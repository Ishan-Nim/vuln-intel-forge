
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
  Terminal
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

type Message = {
  id: string;
  content: string;
  type: 'user' | 'ai';
  timestamp: Date;
  code?: string;
};

const MrVulnr0 = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Mr.Vulnr0, your AI vulnerability assistant. How can I help you today?",
      type: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showCodeView, setShowCodeView] = useState(true);
  const [activePanel, setActivePanel] = useState<'chat' | 'code'>('chat');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
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
    
    // Simulate AI thinking
    setIsLoading(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      let aiResponse: Message;
      
      if (inputValue.toLowerCase().includes('xss')) {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          content: "I found the issue in your login.js file. You're not sanitizing user input on line 42. Here's how to fix it securely:",
          type: 'ai',
          timestamp: new Date(),
          code: `// Before
const userInput = document.getElementById('username').value;
document.getElementById('welcome').innerHTML = 'Welcome, ' + userInput;

// After
const safeInput = DOMPurify.sanitize(userInput);
document.getElementById('welcome').textContent = 'Welcome, ' + safeInput;`
        };
      } else {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          content: "I'm here to help with security vulnerabilities. Could you share more details about your code or the specific security concern you have?",
          type: 'ai',
          timestamp: new Date()
        };
      }
      
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
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
                  
                  <Card className="mb-3">
                    <CardContent className="p-3 text-sm">
                      <div className="font-medium">auth-service</div>
                      <div className="text-xs text-muted-foreground">login.js - Currently viewing</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="mb-4">
                    <CardContent className="p-3 text-sm">
                      <div className="font-medium text-destructive flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        Vulnerabilities
                      </div>
                      <div className="text-xs">3 issues found</div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-auto space-y-2">
                  <div className="font-medium mb-2 text-xs uppercase text-muted-foreground tracking-wider">
                    CONNECT
                  </div>
                  
                  <Button variant="outline" className="w-full justify-start mb-1" size="sm">
                    <Github size={16} className="mr-2" />
                    Connect GitHub
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <FileUp size={16} className="mr-2" />
                    Upload Report
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
              </div>

              {/* Panel Container */}
              <div className="flex-1 overflow-hidden">
                {activePanel === 'chat' && (
                  <div className="flex flex-col h-full">
                    {/* Messages Container */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {messages.map((msg) => (
                        <div key={msg.id} className={cn(
                          "flex",
                          msg.type === 'user' ? "justify-end" : "justify-start"
                        )}>
                          <div className={cn(
                            "max-w-[80%] rounded-lg p-4",
                            msg.type === 'user' 
                              ? "bg-primary text-primary-foreground" 
                              : "bg-card"
                          )}>
                            {msg.type === 'ai' && (
                              <div className="flex items-center gap-2 mb-2">
                                <Shield className="text-primary" size={20} />
                                <div className="font-medium">Mr.Vulnr0</div>
                              </div>
                            )}
                            <p className="text-sm">{msg.content}</p>
                            
                            {msg.code && (
                              <div className="mt-3">
                                <div className="bg-muted rounded-md p-3 mb-3 text-sm font-mono whitespace-pre-wrap">
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
                          <div className="max-w-[80%] rounded-lg p-4 bg-card">
                            <div className="flex items-center gap-2">
                              <Shield className="text-primary" size={20} />
                              <div className="font-medium">Mr.Vulnr0</div>
                              <div className="ml-2 flex gap-1">
                                <span className="animate-pulse">·</span>
                                <span className="animate-pulse delay-100">·</span>
                                <span className="animate-pulse delay-200">·</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>
                    
                    {/* Input Area */}
                    <div className="p-4 border-t">
                      <div className="relative">
                        <Textarea 
                          placeholder="Ask me about security vulnerabilities..." 
                          className="pr-12 min-h-[60px] resize-none"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyDown={handleKeyPress}
                          rows={1}
                        />
                        <Button 
                          size="icon" 
                          className="absolute right-2 bottom-2 rounded-full"
                          onClick={handleSendMessage}
                          disabled={isLoading || !inputValue.trim()}
                        >
                          <Send size={18} />
                        </Button>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2 text-center">
                        Mr.Vulnr0 can assist with identifying and fixing security vulnerabilities in your code.
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MrVulnr0;
