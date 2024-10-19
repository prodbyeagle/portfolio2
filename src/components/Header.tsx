import React, { useState } from 'react';
import Modal from './Modal';
import { Link } from 'react-router-dom';

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

const Header: React.FC = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = () => setIsModalOpen(true);
   const closeModal = () => setIsModalOpen(false);

   return (
      <div className="text-center md:text-left">
         <img
            src="https://avatars.githubusercontent.com/u/124641014?s=400&u=f4fbd8329ffdf7e2e5efb8814d37688960966e69&v=4"
            alt="Your Name"
            className="w-24 h-24 rounded-full mx-auto md:mx-0 shadow-lg hover:shadow-eagle/40 duration-100 transition-all border border-zinc-600"
         />
         <h1 className="text-2xl font-bold mt-4">
            Noah H. (<span className="eagle-text">@prodbyeagle</span>)
         </h1>
         <p className="text-md mt-2">📍 Nuremberg, 🇩🇪</p>
         <p className="text-base mr-8 italic text-zinc-500">A clever person solves a problem. A wise person avoids it.</p>

         <button
            onClick={openModal}
            className="text-blue-500 hover:underline mt-4"
         >
            Socials
         </button>
         <Link to="/about" className="text-blue-500 hover:underline ml-2">
            About Me
         </Link>

         <Modal isOpen={isModalOpen} onClose={closeModal} title="My Socials">
            <div className="flex flex-col space-y-2 w-96 text-center">
               {linksData.map((link) => (
                  <a
                     key={link.name}
                     href={link.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-zinc-800 p-4 rounded-xl shadow-2xl hover:shadow-eagle/50 transition-all duration-500 border border-zinc-700 hover:-translate-y-1 transform cursor-pointer"
                  >
                     <div className="text-xl font-semibold">{link.name}</div>
                  </a>
               ))}
            </div>
         </Modal>
      </div>
   );
};

export default Header;
