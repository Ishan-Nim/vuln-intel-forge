
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SearchAndFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedSeverity: string;
  setSelectedSeverity: (severity: string) => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  searchQuery,
  setSearchQuery,
  selectedSeverity,
  setSelectedSeverity
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="flex-1">
        <Input
          placeholder="Search vulnerabilities..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-sm whitespace-nowrap">Filter by severity:</span>
        <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Severity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Severities</SelectItem>
            <SelectItem value="critical">Critical</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="info">Info</SelectItem>
          </SelectContent>
        </Select>
        {(searchQuery || selectedSeverity !== 'all') && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => {
              setSearchQuery('');
              setSelectedSeverity('all');
            }}
          >
            Clear
          </Button>
        )}
      </div>
    </div>
  );
};

export default SearchAndFilter;
