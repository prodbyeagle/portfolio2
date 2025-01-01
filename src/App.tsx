import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Navbar } from './components/Navbar';
import { Modal } from './components/Modal';
import { GithubLogo, TwitterLogo, InstagramLogo, YoutubeLogo, DiscordLogo } from '@phosphor-icons/react';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <div className="bg-zinc-900 text-white font-inter tracking-tight">
        <div>
          <Navbar onOpenModal={openModal} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal} title="My Socials">
          <div className="flex flex-col space-y-2 w-72 text-center">
            {[
              { name: 'GitHub', url: 'https://github.com/prodbyeagle', icon: <GithubLogo size={24} /> },
              { name: 'Twitter', url: 'https://twitter.com/prodbyeagle', icon: <TwitterLogo size={24} /> },
              { name: 'Instagram', url: 'https://instagram.com/prodbyeagle', icon: <InstagramLogo size={24} /> },
              { name: 'YouTube', url: 'https://www.youtube.com/@prodbyeagle', icon: <YoutubeLogo size={24} /> },
              { name: 'Discord', url: 'https://discord.gg/V33nExqB68', icon: <DiscordLogo size={24} /> },
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group bg-neutral-800 p-4 rounded-xl shadow-lg border border-zinc-700 overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
              >
                <span
                  className="absolute -inset-0.5 bg-neutral-900 opacity-75 blur-md group-hover:opacity-100 transition duration-300"
                  aria-hidden="true"
                ></span>
                <div className="relative z-10 flex items-center justify-center space-x-2 text-lg font-semibold text-white">
                  {link.icon}
                  <span>{link.name}</span>
                </div>
              </a>
            ))}
          </div>
        </Modal>
      </div>
    </Router>
  );
};

export default App;
