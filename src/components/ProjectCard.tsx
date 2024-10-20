import React, { useState } from 'react';
import Modal from './Modal';

interface ProjectProps {
   project: {
      id: number;
      title: string;
      imageUrl: string;
      description: string;
      extendedDescription: string;
      tags: string[];
      repoLink?: string;
      hoverShadowColor?: string;
      hoverBGColor?: string;
      homepageLink?: string;
      year?: string;
   };
}

const tagColors: { [key: string]: string } = {
   HTML: 'bg-html',
   CSS: 'bg-css',
   JavaScript: 'bg-javascript',
   TypeScript: 'bg-typescript',
   React: 'bg-react',
   TailwindCSS: 'bg-tailwind',
   Python: 'bg-python',
   Electron: 'bg-electron',
   MongoDB: 'bg-mongodb',
};

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = () => {
      setIsModalOpen(true);
   };

   const closeModal = () => {
      setIsModalOpen(false);
   };

   return (
      <div className="relative">
         <div
            onClick={openModal}
            className={`bg-zinc-800/30 p-4 rounded-xl shadow-none hover:shadow-7xl ${project.hoverBGColor} ${project.hoverShadowColor} duration-1000 transition-all border border-zinc-600 cursor-pointer`}
         >
            <div className="flex items-center mb-4">
               <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-6 h-6 object-cover mr-2 rounded-md"
                  loading="lazy"
               />
               <h3 className="text-xl font-medium mt-0">{project.title}</h3>
            </div>
            <p className="mt-2">{project.description}</p>
            <div className="flex flex-wrap mt-4">
               {project.tags.map((tag) => (
                  <span
                     key={tag}
                     className={`${tagColors[tag] || 'bg-gray-600'} text-white text-xs font-semibold px-2 py-1 rounded-full mr-2`}
                  >
                     {tag}
                  </span>
               ))}
            </div>
         </div>

         <Modal isOpen={isModalOpen} onClose={closeModal} title={`${project.title} - ${project.year}`}>
            <div className="flex flex-col items-center">
               <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-32 h-32 object-cover mb-4 rounded-xl"
                  loading="lazy"
               />
               <p className="text-lg text-white text-center mb-4 break-words">
                  {project.extendedDescription}
               </p>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
               {project.repoLink && (
                  <a
                     href={project.repoLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-zinc-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-zinc-700 border border-zinc-600 transition-all duration-100"
                  >
                     View Repository
                  </a>
               )}
               {project.homepageLink && (
                  <a
                     href={project.homepageLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-zinc-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-zinc-700 border border-zinc-600 transition-all duration-100"
                  >
                     View Website
                  </a>
               )}
            </div>
         </Modal>
      </div>
   );
};

export default ProjectCard;
