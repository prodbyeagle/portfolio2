import React from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => (
    <div className="relative max-w-2xl">
        <MagnifyingGlass className="absolute w-5 h-5 -translate-y-1/2 left-3 top-1/2 text-zinc-400" />
        <input
            type="text"
            placeholder="Search projects..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-10 py-3 text-sm transition-all duration-200 border bg-zinc-800/50 border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-zinc-500"
        />
    </div>
);