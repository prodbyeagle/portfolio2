import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Tooltip from './Tooltip';

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
   const navigate = useNavigate();
   const location = useLocation();

   const openModal = () => {
      setIsModalOpen(true);
      navigate('#socials');
   };

   const closeModal = () => {
      setIsModalOpen(false);
      navigate(location.pathname);
   };

   useEffect(() => {
      if (location.hash === '#socials') {
         setIsModalOpen(true);
      }
   }, [location.hash]);

   return (
      <div className="text-center md:text-left">
         <Tooltip content='made by @prodbyeagle'>
            <img
               src="https://avatars.githubusercontent.com/u/124641014?s=400&u=f4fbd8329ffdf7e2e5efb8814d37688960966e69&v=4"
               alt="Your Name"
               className="w-24 h-24 rounded-full cursor-help mx-auto md:mx-0 hover:shadow-7xl hover:shadow-eagle/30 duration-1000 transition-all"
            />
         </Tooltip>
         <h1 className="text-2xl font-bold mt-4">
            Noah (<span className="eagle-text duration-2000 transition-all hover:font-medium hover:text-3xl">prodbyeagle</span>)
         </h1>
         <Tooltip delay={600} content="49.460983, 11.061859." position='left'>
            <p className="text-md mt-2">📍 Nuremberg, 🇩🇪</p>
         </Tooltip>
         <p className="text-base italic text-zinc-500">A clever person solves a problem. A wise person avoids it.</p>

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
            <div className="flex flex-col space-y-2 w-72 text-center">
               {linksData.map((link) => (
                  <a
                     key={link.name}
                     href={link.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-zinc-800 p-4 rounded-xl shadow-6xl hover:shadow-eagle/50 transition-all duration-106 border border-zinc-700 hover:-translate-y-1 transform cursor-pointer"
                  >
                     <div className="text-lg sm:text-md md:text-xl font-semibold">{link.name}</div>
                  </a>
               ))}
            </div>
         </Modal>
      </div>
   );
};

export default Header;
