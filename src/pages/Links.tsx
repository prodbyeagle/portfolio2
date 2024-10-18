// src/pages/Links.tsx
import React from 'react';

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
   return (
      <div className="flex flex-col text-center items-center justify-center min-h-screen bg-zinc-900 text-white">
         <h1 className="text-3xl font-bold mb-6">My Socials</h1>
         <div className="flex flex-col space-y-4 w-52">
            {linksData.map((link) => (
               <div
                  key={link.name}
                  className="bg-zinc-800 p-4 rounded-xl shadow-lg hover:shadow-eagle/40 duration-100 transition-all border border-zinc-600 cursor-pointer"
               >
                  <a
                     href={link.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-xl font-bold"
                  >
                     {link.name}
                  </a>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Links;