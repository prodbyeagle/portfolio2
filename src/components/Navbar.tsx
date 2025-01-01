import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from './HomePage/Tooltip';
import { List, X } from '@phosphor-icons/react';

interface NavbarProps {
    onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <nav className="bg-zinc-900/50 backdrop-blur-lg text-zinc-100 z-50 fixed top-0 left-0 w-full">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                <div className="flex items-center space-x-4">
                    <Tooltip content="made by @prodbyeagle">
                        <img
                            src="https://avatars.githubusercontent.com/u/124641014?s=400&u=f4fbd8329ffdf7e2e5efb8814d37688960966e69&v=4"
                            alt="Your Name"
                            width={30}
                            className="rounded-full cursor-help hover:shadow-lg hover:shadow-eagle/30 duration-500 transition-all"
                        />
                    </Tooltip>
                    <h1 className="text-xl font-bold">
                        Noah (<span className="eagle-text tracking-tight transition-all duration-500 hover:font-medium hover:text-2xl">prodbyeagle</span>)
                    </h1>
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    <Link to="/" className="hover:text-eagle transition duration-200">
                        Home
                    </Link>
                    <Link to="/about" className="hover:text-eagle transition duration-200">
                        About Me
                    </Link>
                    <Link to="/projects" className="hover:text-eagle transition duration-200">
                        Projects
                    </Link>
                    <button
                        onClick={onOpenModal}
                        className="hover:text-eagle transition duration-200"
                    >
                        Socials
                    </button>
                </div>

                <button
                    className="md:hidden text-zinc-400 hover:text-eagle transition duration-200"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <List size={28} />}
                </button>
            </div>

            {/* this looks so dogshit haha. but im to lazy to change*/}
            {isMobileMenuOpen && (
                <div className="absolute top-15 left-0 w-full bg-zinc-900/90 backdrop-blur-lg text-zinc-100 px-4 py-2 space-y-2">
                    <Link
                        to="/"
                        className="block hover:text-eagle transition duration-200"
                        onClick={toggleMobileMenu}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="block hover:text-eagle transition duration-200"
                        onClick={toggleMobileMenu}
                    >
                        About Me
                    </Link>
                    <Link
                        to="/projects"
                        className="block hover:text-eagle transition duration-200"
                        onClick={toggleMobileMenu}
                    >
                        Projects
                    </Link>
                    <button
                        onClick={() => {
                            toggleMobileMenu();
                            onOpenModal();
                        }}
                        className="block text-left w-full hover:text-eagle transition duration-200"
                    >
                        Socials
                    </button>
                </div>
            )}
        </nav>
    );
};
