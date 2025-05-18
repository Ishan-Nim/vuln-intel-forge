import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle } from 'lucide-react';
const ChatDemoSection = () => {
  return <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">See Dr.Vulner0/1 In Action</h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Experience how easily our AI assistant identifies, explains, and fixes vulnerabilities in your code
        </p>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="bg-card border rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
            <div className="w-full h-full flex">
              {/* Left side - Context panel */}
              <div className="w-1/3 bg-muted/40 border-r p-4 flex flex-col">
                <h3 className="text-sm font-medium mb-4">CONTEXT</h3>
                
                <div className="mb-6">
                  <div className="bg-primary/10 rounded p-3 mb-2">
                    <p className="font-medium text-sm">auth-service</p>
                    <p className="text-xs text-muted-foreground">login.js - Currently viewing</p>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex items-center text-destructive mb-1">
                      <Shield className="h-4 w-4 mr-1" />
                      <p className="font-medium text-sm">Vulnerabilities</p>
                    </div>
                    <div className="flex items-center gap-1 bg-destructive/10 text-destructive rounded px-2 py-1">
                      <p className="text-xs">3 issues found</p>
                    </div>
                    
                    <div className="mt-4 space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="bg-red-500 text-white text-xs px-2 rounded">HIGH</span>
                        <span>Cross-Site Scripting (XSS)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-red-500 text-white text-xs px-2 rounded">HIGH</span>
                        <span>SQL Injection</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-yellow-500 text-white text-xs px-2 rounded">MEDIUM</span>
                        <span>Insecure Direct Object Reference</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Chat interface */}
              <div className="w-2/3 flex flex-col">
                {/* Dr.Vulner0/1 message */}
                <div className="p-4 border-b">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium mb-1">Dr.Vulner0/1</p>
                      <p className="text-sm">Hello! I'm Dr.Vulner0/1, your AI vulnerability assistant. How can I help you today?</p>
                    </div>
                  </div>
                </div>
                
                {/* User message */}
                <div className="p-4 border-b bg-primary/5">
                  <div className="ml-auto max-w-md">
                    <p className="text-sm bg-primary text-primary-foreground p-3 rounded-lg rounded-tr-none">I think I have an XSS vulnerability in my login form.</p>
                  </div>
                </div>
                
                {/* Dr.Vulner0/1 response */}
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-1" />
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">Dr.Vulner0/1</p>
                        <span className="bg-green-500/20 text-green-600 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                          <CheckCircle className="h-3 w-3" />
                          <span>Found issue</span>
                        </span>
                      </div>
                      
                      <p className="text-sm">I found the issue in your login.js file. You're not sanitizing user input on line 42. Here's how to fix it securely:</p>
                      
                      <div className="bg-card border rounded-md p-3 font-mono text-xs">
                        <pre>{`const safeInput = DOMPurify.sanitize(userInput);`}</pre>
                      </div>
                      
                      <p className="text-sm">Would you like me to apply this patch to your code?</p>
                      
                      <div className="flex gap-2">
                        <Button variant="secondary" size="sm" className="text-xs">Copy Code</Button>
                        <Button size="sm" className="text-xs">Apply Fix</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Code preview */}
                <div className="p-4 border-t bg-muted/30">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs font-mono">login.js</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="text-xs h-7">View Diff</Button>
                      <Button size="sm" className="text-xs h-7">Apply Fix</Button>
                    </div>
                  </div>
                  
                  <div className="bg-card border rounded-md p-4 font-mono text-xs">
                    <pre>{`function validateLogin(username, password) {
  // Get user input
  const userInput = document.getElementById('username').value;
  document.getElementById('welcome').innerHTML = 'Welcome, ' + userInput;

  // const safeInput = DOMPurify.sanitize(userInput);
  // document.getElementById('welcome').textContent = 'Welcome, ' + safeInput;
}`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10"></div>
          <div className="absolute -top-3 -right-3 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10"></div>
        </div>
      </div>
    </section>;
};
export default ChatDemoSection;