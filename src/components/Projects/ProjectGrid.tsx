import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Project } from '../../types';

interface ProjectGridProps {
    projects: Project[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {projects.length > 0 ? (
            projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
            ))
        ) : (
            <div className="py-12 text-center col-span-full">
                <p className="text-lg text-neutral-400">No projects found matching your criteria</p>
            </div>
        )}
    </div>
);