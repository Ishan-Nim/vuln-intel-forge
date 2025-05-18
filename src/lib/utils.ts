
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Debounce function to limit how often a function can be called
export function debounce<T extends (...args: any[]) => any>(
  func: T, 
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

// Function to smoothly scroll to an element
export function scrollToElement(elementId: string, offset: number = 0) {
  const element = document.getElementById(elementId);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({top: y, behavior: 'smooth'});
  }
}

// Helper function to clean content of HTML tags and unwanted URLs
export function cleanContent(content: string): string {
  if (!content) return "";
  // First remove HTML tags
  let cleaned = content.replace(/<\/?[^>]+(>|$)/g, "");
  // Then remove any lovable.dev references
  cleaned = cleaned.replace(/https?:\/\/lovable\.dev\/[^\s]*/g, "");
  cleaned = cleaned.replace(/lovable\.dev/g, "");
  return cleaned;
}
