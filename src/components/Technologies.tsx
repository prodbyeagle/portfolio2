import React from 'react';
import { FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, SiReact } from 'react-icons/si';

interface Technology {
   id: number;
   name: string;
   icon: React.ReactNode;
   bgColor: string;
   description: string;
   url: string; // URL hinzugefügt
}

const technologies: Technology[] = [
   { id: 1, name: 'TypeScript', icon: <SiTypescript className="text-white text-3xl" />, bgColor: '#3178C6', description: 'JavaScript, but Nicer.', url: 'https://www.typescriptlang.org/' },
   { id: 2, name: 'JavaScript', icon: <SiJavascript className="text-white text-3xl" />, bgColor: '#F0DB4F', description: 'The language of the web.', url: 'https://www.javascript.com/' },
   { id: 3, name: 'MongoDB', icon: <SiMongodb className="text-white text-3xl" />, bgColor: '#47A248', description: 'NoSQL database.', url: 'https://www.mongodb.com/' },
   { id: 4, name: 'Tailwind CSS', icon: <SiTailwindcss className="text-white text-3xl" />, bgColor: '#38B2AC', description: 'Utility-first CSS.', url: 'https://tailwindcss.com/' },
   { id: 5, name: 'Git', icon: <FaGitAlt className="text-white text-3xl" />, bgColor: '#F1502F', description: 'Version control system.', url: 'https://git-scm.com/' },
   { id: 6, name: 'React', icon: <SiReact className="text-white text-3xl" />, bgColor: '#61DAFB', description: 'A JavaScript library for building user interfaces.', url: 'https://reactjs.org/' }, // React hinzugefügt
];

const Technologies: React.FC = () => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
         {technologies.map((tech) => (
            <a
               key={tech.id}
               href={tech.url}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center p-4 rounded-xl shadow-2xl transition-all duration-106 border border-zinc-700 hover:-translate-y-1 transform cursor-pointer"
               style={{ backgroundColor: `${tech.bgColor}20` }}
            >
               <div
                  className="flex items-center justify-center w-16 h-16 rounded-md shadow-6xl transition-all duration-300"
                  style={{ backgroundColor: tech.bgColor }}
               >
                  {tech.icon}
               </div>
               <div className="ml-4">
                  <h3 className="text-xl font-semibold text-zinc-100">{tech.name}</h3>
                  <p className="text-sm italic text-zinc-500">{tech.description}</p>
               </div>
            </a>
         ))}
      </div>
   );
};

export default Technologies;
