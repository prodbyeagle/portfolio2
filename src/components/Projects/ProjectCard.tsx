import React, { useState } from 'react';
import { Modal } from '../Modal';
import { GithubLogo, LinkSimple } from '@phosphor-icons/react';
import { Project } from '../../types';

interface ProjectCardProps {
   project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   return (
      <>
         <div
            onClick={() => setIsModalOpen(true)}
            className="relative overflow-hidden transition-all border cursor-pointer group rounded-xl border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 hover:bg-neutral-800/50"
         >
            <div className="p-4">
               <div className="flex items-center gap-2">
                  <img
                     src={project.imageUrl}
                     alt={project.title}
                     width={24}
                     className="object-cover rounded-md"
                     loading="lazy"
                  />
                  <h3 className="text-xl font-semibold text-white">
                     {project.title}
                  </h3>
               </div>
               <p className="mb-4 text-sm text-neutral-400">
                  {project.description}
               </p>

               <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                     <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-neutral-800 px-2.5 py-1 text-xs font-medium text-neutral-300"
                     >
                        {tag}
                     </span>
                  ))}
               </div>
            </div>
         </div>

         <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title={project.title}
         >
            <div className="space-y-6">
               <div className="flex justify-center">
                  <img
                     src={project.imageUrl}
                     alt={project.title}
                     width={200}
                     className="object-cover rounded-lg"
                     loading="lazy"
                  />
               </div>

               <div className="space-y-4">
                  <p className="text-neutral-300">
                     {project.extendedDescription}
                  </p>

                  <div className="flex flex-wrap gap-2">
                     {project.tags.map(tag => (
                        <span
                           key={tag}
                           className="inline-flex items-center rounded-full bg-neutral-800 px-2.5 py-1 text-xs font-medium text-neutral-300"
                        >
                           {tag}
                        </span>
                     ))}
                  </div>
               </div>

               <div className="flex gap-3">
                  {project.homepageLink && (
                     <a
                        href={project.homepageLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600"
                     >
                        <LinkSimple size={20} />
                        View Live
                     </a>
                  )}
                  {project.repoLink && (
                     <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors border rounded-lg border-neutral-700 bg-neutral-800 hover:bg-neutral-700"
                     >
                        <GithubLogo size={20} />
                        View Code
                     </a>
                  )}
               </div>
            </div>
         </Modal>
      </>
   );
};
