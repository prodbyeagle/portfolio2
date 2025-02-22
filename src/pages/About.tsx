import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';

export const About: React.FC = () => {
   return (
      <div className="min-h-screen bg-neutral-900 text-white px-6 lg:px-12 py-16">
         <div className="max-w-4xl mx-auto mt-16">
            <div className="text-center">
               <h1 className="text-4xl font-bold">About Me</h1>
               <p className="text-lg text-neutral-400 mt-2">Here’s a little glimpse into my world!</p>
            </div>

            <div className="mt-12 space-y-12">
               <section>
                  <p className="text-lg text-neutral-400 mt-4 leading-relaxed">
                     <span className="text-4xl font-bold text-neutral-100">Hi there!</span> I’m Noah, but you might know me better as{' '}
                     <span className="eagle-text font-semibold">@prodbyeagle</span>. I’m a dedicated Frontend Developer based in Nuremberg, Germany.
                     My journey into web development began out of curiosity, but it quickly grew into a deep passion that I pursue wholeheartedly every day.
                  </p>
               </section>

               <section>
                  <h2 className="text-3xl font-semibold text-neutral-100">My Journey in Tech</h2>
                  <div className="mt-4 space-y-4">
                     <p className="text-lg text-neutral-400 leading-relaxed">
                        My coding journey began with Python, sparking a fascination for problem-solving and technology. Since then, I’ve delved into tools and technologies like Next, TypeScript, and Tailwind. My focus is on creating sleek, minimalistic and responsive websites with intuitive user experiences.
                     </p>
                     <p className="text-lg text-neutral-400 leading-relaxed">
                        I thrive on exploring front-end frameworks and experimenting with modern libraries, always striving to push the limits of what’s possible in web development.
                     </p>
                  </div>
               </section>

               <section>
                  <h2 className="text-3xl font-semibold text-neutral-100">Beyond the Screen</h2>
                  <p className="text-lg text-neutral-400 mt-4 leading-relaxed">
                     Outside of coding, I enjoy gaming, spending time with friends, and diving into a variety of creative media.
                     I’m also active in the tech community, whether it’s through social media or contributing to open-source projects.
                  </p>
               </section>
            </div>

            <div className="mt-16 text-center">
               <Link to="/" className="text-neutral-100 hover:underline flex items-center justify-center gap-2">
                  <ArrowLeft /> Back to Home
               </Link>
            </div>
         </div>
      </div>
   );
};