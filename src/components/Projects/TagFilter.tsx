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
                        ? 'bg-neutral-400 text-white shadow-lg shadow-neutral-500/20'
                        : 'bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700'
                    }`}
            >
                <Tag size={14} className={selectedTags.has(tag) ? 'animate-pulse' : ''} />
                {tag}
            </button>
        ))}
    </div>
);