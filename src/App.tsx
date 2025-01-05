import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Navbar } from './components/Navbar';
import { Modal } from './components/Modal';
import { GithubLogo, YoutubeLogo, ThreadsLogo } from '@phosphor-icons/react';

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
      <div className="bg-neutral-900 text-white font-inter tracking-tight">
        <Navbar onOpenModal={openModal} />
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
              {
                name: 'GitHub',
                url: 'https://github.com/prodbyeagle',
                description: 'Let me cook!',
                icon: <GithubLogo size={24} />
              },
              {
                name: 'Threads',
                url: 'https://threads.net/prodbyeagle',
                description: 'yep. follow me here!',
                icon: <ThreadsLogo size={24} />,
              },
              {
                name: 'YouTube',
                description: 'Where I drop my beats. Check it out! (rare uploads)',
                url: 'https://youtube.com/@prodbyeagle',
                icon: <YoutubeLogo size={24} />
              },
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group bg-neutral-800 p-4 rounded-xl shadow-lg border border-neutral-700 overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
              >
                <span
                  className="absolute -inset-0.5 bg-neutral-900 opacity-75 blur-md group-hover:opacity-100 transition duration-300"
                  aria-hidden="true"
                ></span>
                <div className="relative z-10 flex flex-col items-center justify-center space-y-1">
                  <div className="flex items-center justify-center space-x-2 text-lg font-semibold text-white">
                    {link.icon}
                    <span>{link.name}</span>
                  </div>
                  {link.description && (
                    <span className="text-sm text-gray-400">{link.description}</span>
                  )}
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