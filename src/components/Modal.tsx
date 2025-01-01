import React, { useEffect, useState } from 'react';
import { X } from '@phosphor-icons/react';
import { ModalProps } from '../types';

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, className, shadowSize }) => {
   const [show, setShow] = useState(isOpen);

   useEffect(() => {
      if (isOpen) {
         setShow(true);
      } else {
         const timer = setTimeout(() => setShow(false), 300);
         return () => clearTimeout(timer);
      }
   }, [isOpen]);

   if (!show) return null;

   const shadowClass = shadowSize ? `shadow-${shadowSize}` : '';

   return (
      <div className={`fixed inset-0 px-2 flex items-center justify-center bg-neutral-950 bg-opacity-60 backdrop-blur-xl z-50 ${isOpen ? 'modal-enter' : 'modal-exit'}`}>
         <div className={`p-6 bg-neutral-900 rounded-xl ${shadowClass} w-fit relative transition-all duration-100 max-h-[calc(100vh-10%)] overflow-y-scroll border border-neutral-800 max-w-[550px] -translate-y-1/5 ${className}`}>
            <button onClick={onClose} className="absolute p-0 text-white transition-all duration-200 rounded top-5 right-5 hover:scale-105">
               <X size={24} className='hover:bg-neutral-800 rounded-md' />
            </button>
            {title && (
               <h2 className="mb-4 text-xl font-semibold text-white">{title}</h2>
            )}
            <div>{children}</div>
         </div>
      </div>
   );
};
