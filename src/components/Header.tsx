//src/components/Header.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
   return (
      <div className="text-center md:text-left">
         <img
            src="https://avatars.githubusercontent.com/u/124641014?s=400&u=f4fbd8329ffdf7e2e5efb8814d37688960966e69&v=4"
            alt="Your Name"
            className="w-24 h-24 rounded-full mx-auto md:mx-0 shadow-lg hover:shadow-eagle/40 duration-100 transition-all border border-zinc-600"
         />
         <h1 className="text-2xl font-bold mt-4">
            Noah Hecht (<span className="eagle-text">@prodbyeagle</span>)
         </h1>
         <p className="text-md mt-2">📍 Nuernberg, 🇩🇪</p>
         <p className="text-lg mt-2">I am a hobby Frontend Coder.</p>
         <Link to="/links" className="text-blue-500 hover:underline mt-4">
            View my Socials
         </Link>
      </div>
   );
};

export default Header;
