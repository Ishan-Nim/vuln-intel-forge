
import React from 'react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Pricing Plans</h1>
      <p className="text-muted-foreground mb-8">
        Choose the plan that fits your security monitoring needs.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="border rounded-xl p-6 flex flex-col">
          <h2 className="text-xl font-bold">Basic</h2>
          <div className="text-3xl font-bold my-4">$0<span className="text-sm font-normal text-muted-foreground">/month</span></div>
          <ul className="space-y-2 mb-8 flex-1">
            <li className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Limited vulnerability reports
            </li>
            <li className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Basic search
            </li>
          </ul>
          <Button variant="outline" className="w-full">Sign Up Free</Button>
        </div>

        {/* Pro Plan */}
        <div className="border rounded-xl p-6 bg-primary/5 border-primary flex flex-col relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            Popular
          </div>
          <h2 className="text-xl font-bold">Pro</h2>
          <div className="text-3xl font-bold my-4">$49<span className="text-sm font-normal text-muted-foreground">/month</span></div>
          <ul className="space-y-2 mb-8 flex-1">
            <li className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Unlimited vulnerability reports
            </li>
            <li className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Advanced search and filtering
            </li>
            <li className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              API access
            </li>
          </ul>
          <Button className="w-full">Subscribe Now</Button>
        </div>

        {/* Enterprise Plan */}
        <div className="border rounded-xl p-6 flex flex-col">
          <h2 className="text-xl font-bold">Enterprise</h2>
          <div className="text-3xl font-bold my-4">$199<span className="text-sm font-normal text-muted-foreground">/month</span></div>
          <ul className="space-y-2 mb-8 flex-1">
            <li className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Everything in Pro
            </li>
            <li className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Dedicated support
            </li>
            <li className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Custom integrations
            </li>
          </ul>
          <Button variant="outline" className="w-full">Contact Sales</Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
