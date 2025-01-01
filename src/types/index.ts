import { ReactNode } from "react";

export interface Project {
    title: string;
    imageUrl: string;
    description: string;
    extendedDescription: string;
    tags: string[];
    repoLink?: string;
    homepageLink?: string;
    year?: string;
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    className?: string;
    shadowSize?: string;
}

export interface TooltipProps {
    content: string;
    children: ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    delay?: number;
    fontSize?: string;
}
