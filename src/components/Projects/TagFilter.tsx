import React from 'react';
import { Tag } from '@phosphor-icons/react';

interface TagFilterProps {
    tags: string[];
    selectedTags: Set<string>;
    onToggle: (tag: string) => void;
}

export const TagFilter: React.FC<TagFilterProps> = ({ tags, selectedTags, onToggle }) => (
    <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
            <button
                key={tag}
                onClick={() => onToggle(tag)}
                className={`px-3 py-1.5 text-sm rounded-lg flex items-center gap-1.5 
                    transition-all duration-200 hover:scale-105
                    ${selectedTags.has(tag)
                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                        : 'bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700'
                    }`}
            >
                <Tag size={14} className={selectedTags.has(tag) ? 'animate-pulse' : ''} />
                {tag}
            </button>
        ))}
    </div>
);