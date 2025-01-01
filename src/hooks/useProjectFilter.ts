import { useState, useMemo } from 'react';
import { Project } from '../types';

export const useProjectFilter = (projects: Project[]) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

    const allTags = useMemo(() =>
        Array.from(new Set(projects.flatMap(project => project.tags))).sort(),
        [projects]
    );

    const filteredProjects = useMemo(() =>
        projects.filter(project => {
            const matchesSearch =
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesTags =
                selectedTags.size === 0 ||
                project.tags.some(tag => selectedTags.has(tag));
            return matchesSearch && matchesTags;
        }),
        [projects, searchQuery, selectedTags]
    );

    const toggleTag = (tag: string) => {
        setSelectedTags(prev => {
            const newTags = new Set(prev);
            if (newTags.has(tag)) {
                newTags.delete(tag);
            } else {
                newTags.add(tag);
            }
            return newTags;
        });
    };

    return {
        searchQuery,
        setSearchQuery,
        selectedTags,
        toggleTag,
        allTags,
        filteredProjects
    };
};