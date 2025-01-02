import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, X, House, Info, Briefcase, Users } from '@phosphor-icons/react';
import { Tooltip } from './HomePage/Tooltip';

interface NavbarProps {
    onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const NavLink: React.FC<{ to?: string; onClick?: () => void; children: React.ReactNode }> = ({
        to,
        onClick,
        children
    }) => {
        const baseClasses = "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10";

        if (to) {
            return (
                <Link to={to} className={baseClasses}>
                    {children}
                </Link>
            );
        }

        return (
            <button onClick={onClick} className={baseClasses}>
                {children}
            </button>
        );
    };

    return (
        <div className="fixed w-full top-0 z-50 px-4 py-6">
            <nav className="mx-auto max-w-5xl bg-black/30 backdrop-blur-xl border border-white/10 p-4 rounded-3xl">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 pl-2">
                        <Tooltip content={"erm"}>
                            <span className="text-xl font-bold eagle-text hover:font-black transition-all duration-[1500ms]">
                                prodbyeagle
                            </span>
                        </Tooltip>
                    </div>

                    <div className="hidden md:flex items-center gap-3 pr-4">
                        <NavLink to="/">
                            <House size={18} weight="bold" />
                            <span>Home</span>
                        </NavLink>
                        <NavLink to="/about">
                            <Info size={18} weight="bold" />
                            <span>About</span>
                        </NavLink>
                        <NavLink to="/projects">
                            <Briefcase size={18} weight="bold" />
                            <span>Projects</span>
                        </NavLink>
                        <NavLink onClick={onOpenModal}>
                            <Users size={18} weight="bold" />
                            <span>Socials</span>
                        </NavLink>
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
                    >
                        {isOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
                    </button>
                </div>

                {isOpen && (
                    <div className="md:hidden mt-4 space-y-2">
                        <NavLink to="/" onClick={toggleMenu}>
                            <House size={18} weight="bold" />
                            <span>Home</span>
                        </NavLink>
                        <NavLink to="/about" onClick={toggleMenu}>
                            <Info size={18} weight="bold" />
                            <span>About</span>
                        </NavLink>
                        <NavLink to="/projects" onClick={toggleMenu}>
                            <Briefcase size={18} weight="bold" />
                            <span>Projects</span>
                        </NavLink>
                        <NavLink onClick={() => { toggleMenu(); onOpenModal(); }}>
                            <Users size={18} weight="bold" />
                            <span>Socials</span>
                        </NavLink>
                    </div>
                )}
            </nav>
        </div>
    );
};