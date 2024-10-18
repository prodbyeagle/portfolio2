import React from 'react';
import { useNavigate } from 'react-router-dom';

const linksData = [
   {
      name: 'GitHub',
      url: 'https://github.com/prodbyeagle',
   },
   {
      name: 'Twitter',
      url: 'https://twitter.com/prodbyeagle',
   },
   {
      name: 'Instagram',
      url: 'https://instagram.com/prodbyeagle',
   },
   {
      name: 'YouTube',
      url: 'https://www.youtube.com/@prodbyeagle',
   },
   {
      name: 'Discord',
      url: 'https://discord.gg/V33nExqB68',
   }
];

const Links: React.FC = () => {
   const navigate = useNavigate();

   return (
      <div className="flex flex-col text-center items-center justify-center min-h-screen bg-zinc-900 text-white">
         <button
            onClick={() => navigate('/')}
            className="mb-6 px-4 py-2 bg-zinc-800 p-2 rounded-xl shadow-lg hover:shadow-eagle/50 transition-all duration-200 border border-zinc-700 hover:-translate-y-1 transform cursor-pointer"
         >
            Home
         </button>
         <h1 className="text-4xl font-bold mb-8">My Socials</h1>
         <div className="flex flex-col space-y-6 w-64">
            {linksData.map((link) => (
               <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-800 p-5 rounded-xl shadow-2xl hover:shadow-eagle/50 transition-all duration-500 border border-zinc-700 hover:-translate-y-1 transform cursor-pointer"
               >
                  <div className="text-xl font-semibold">{link.name}</div>
               </a>
            ))}
         </div>
      </div>
   );
};

export default Links;
