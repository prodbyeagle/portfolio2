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
      hoverShadowColor: string;
      homepageLink?: string;
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
      <div>
         <div
            onClick={openModal}
            className={`bg-zinc-800 p-4 rounded-xl shadow-none hover:shadow-2xl ${project.hoverShadowColor} duration-200 transition-all border border-zinc-600 cursor-pointer`}
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

         <Modal isOpen={isModalOpen} onClose={closeModal} title={project.title}>
            <div className="flex flex-col items-center">
               <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-32 h-32 object-cover mb-4 rounded-lg"
                  loading="lazy"
               />
               <p className="text-lg text-white text-center mb-4 break-words">
                  {project.extendedDescription}
               </p>
               {project.repoLink && (
                  <a
                     href={project.repoLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-blue-500 hover:underline"
                  >
                     View Repository
                  </a>
               )}
               {project.homepageLink && (
                  <a
                     href={project.homepageLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-blue-500 hover:underline"
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
