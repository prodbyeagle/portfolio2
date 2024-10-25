import React from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Technologies from '../components/Technologies';
import { projects } from '../data/projects';

const Home: React.FC = () => {
   return (
      <div className="container mx-auto p-2 lg:p-8">
         <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3">
               <Header />
            </div>
            <div className="md:w-2/3">
               <div className='text-sm italic'>
                  (Public Only)
               </div>
               <h2 className="text-3xl font-bold mb-6">Projects</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {projects.map((project) => (
                     <ProjectCard key={project.id} project={project} />
                  ))}
               </div>
            </div>
         </div>

         <div className="mt-48">
            <div className='text-2xl font-bold mt-4'>
               Technologies
            </div>
            <Technologies />
         </div>
      </div>
   );
};

export default Home;
