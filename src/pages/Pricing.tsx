
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Star, CheckCircle } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Early Access Beta Program</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Join our community of early adopters and help shape the future of Mr.Vulnr0
        </p>
        <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
          Limited Time Beta Access Available
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free Beta Plan */}
        <div className="border rounded-xl p-8 flex flex-col relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            CURRENTLY ACTIVE
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold">Free Beta Access</h2>
          </div>
          
          <div className="text-3xl font-bold my-4">$0<span className="text-sm font-normal text-muted-foreground">/month</span></div>
          <p className="text-muted-foreground mb-6">Get early access to Mr.Vulnr0 and help us improve by providing feedback</p>
          
          <ul className="space-y-3 mb-8 flex-1">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Access to vulnerability scanning</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Basic vulnerability reports</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Community support forum</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Limited API access (100 requests/day)</span>
            </li>
          </ul>
          
          <Button className="w-full">Join Beta Program</Button>
          <p className="text-xs text-center mt-3 text-muted-foreground">No credit card required</p>
        </div>

        {/* Supporter Plan */}
        <div className="border border-primary/20 bg-primary/5 rounded-xl p-8 flex flex-col relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            EARLY SUPPORTER
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Star className="w-8 h-8 text-yellow-500" />
            <h2 className="text-2xl font-bold">Beta Supporter</h2>
          </div>
          
          <div className="text-3xl font-bold my-4">$19<span className="text-sm font-normal text-muted-foreground">/month</span></div>
          <p className="text-muted-foreground mb-6">Support our development and get premium features before everyone else</p>
          
          <ul className="space-y-3 mb-8 flex-1">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Everything in Free Beta</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Priority vulnerability scanning</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Advanced security reports</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Direct developer support</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Extended API access (1000 requests/day)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Early access to new features</span>
            </li>
          </ul>
          
          <Button variant="default" className="w-full">Become a Supporter</Button>
          <p className="text-xs text-center mt-3 text-muted-foreground">7-day money back guarantee</p>
        </div>
      </div>
      
      <div className="mt-16 max-w-3xl mx-auto text-center">
        <h3 className="text-xl font-bold mb-4">Want to contribute?</h3>
        <p className="text-muted-foreground mb-6">We're open to contributions from the community. If you're a developer, security researcher, or just passionate about cybersecurity, we'd love your help.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button variant="outline" size="lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub Repository
          </Button>
          <Button variant="outline" size="lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Community Discord
          </Button>
        </div>
      </div>
      
      <div className="mt-16 border-t pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <h4 className="font-bold mb-2">Beta Program FAQ</h4>
            <p className="text-sm text-muted-foreground">Our beta program allows early access to Mr.Vulnr0 while we polish the product. We welcome your feedback to improve the service.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Will pricing change?</h4>
            <p className="text-sm text-muted-foreground">Beta supporter pricing is discounted. When we launch, prices will increase but early supporters will keep their original pricing.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">What about my data?</h4>
            <p className="text-sm text-muted-foreground">We take security seriously. Your code and vulnerability data are protected and never shared with third parties.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
