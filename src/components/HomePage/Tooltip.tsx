import React, { useState, useRef } from 'react';
import { TooltipProps } from '../../types';

export const Tooltip: React.FC<TooltipProps> = ({
   content,
   children,
   position = 'bottom',
   delay = 300,
   fontSize = 'text-xs',
}): React.JSX.Element => {
   const [isVisible, setIsVisible] = useState<boolean>(false);
   const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
   const tooltipRef = useRef<HTMLDivElement | null>(null);
   const targetRef = useRef<HTMLDivElement | null>(null);

   const showTooltip = () => {
      const id = setTimeout(() => setIsVisible(true), delay);
      setTimeoutId(id);
   };

   const hideTooltip = () => {
      if (timeoutId) {
         clearTimeout(timeoutId);
      }
      setIsVisible(false);
   };

   return (
      <div
         className="relative inline-block"
         onMouseEnter={showTooltip}
         onMouseLeave={hideTooltip}
         ref={targetRef}
      >
         <div
            ref={tooltipRef}
            className={`absolute z-50 px-2 py-1 bg-zinc-700 border border-zinc-600 text-white rounded-md whitespace-nowrap transition-opacity duration-300 ease-in-out ${fontSize} 
            ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} 
            ${position === 'bottom' ? 'top-full mt-2 left-1/2 transform -translate-x-1/2'
                  : position === 'top' ? 'bottom-full mb-2 left-1/2 transform -translate-x-1/2'
                     : position === 'left' ? 'right-full mr-2 top-1/2 transform -translate-y-1/2'
                        : 'left-full ml-2 top-1/2 transform -translate-y-1/2'}`}
         >
            {content}
         </div>
         {children}
      </div>
   );
};
