import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
   return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-white">
         <h1 className="text-2xl font-bold mb-6">About Me</h1>
         <div className="text-lg leading-relaxed">
            <p>
               <span className="text-4xl font-bold">Hi!</span> I’m Noah, also known online as <span className="eagle-text hover:font-extrabold hover:text-2xl transition-all duration-3000">@prodbyeagle</span>. I’m a passionate Frontend Developer based in Nuremberg, Germany.
               My journey in web development started out of pure curiosity, and over the years, it evolved into a hobby that I’ve been pursuing with great enthusiasm.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">My Coding Journey</h2>
            <p>
               I started coding when I was first introduced to Python. And since then, I’ve expanded my knowledge to technologies like React, Javascript, TypeScript, and Tailwind CSS.
               I enjoy building interactive and responsive websites that not only look good but also offer a seamless user experience.
               I’m particularly fascinated by front-end frameworks and love experimenting with new tools and libraries that push the boundaries of what’s possible in web development.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Outside of Coding</h2>
            <p>
               When I’m not coding, I enjoy gaming, hanging out with friends, and exploring different types of media. I also like to stay active in the tech community through social media and by collaborating on open-source projects.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Let’s Connect</h2>
            <p>
               Feel free to check out my social links if you want to connect or see more of my work. I’m always open to collaborating on new ideas and projects!
            </p>
         </div>
         <div className="mt-6">
            <Link to="/" className="text-blue-500 duration-200 transition-all p-2 hover:underline">
               Back to Home
            </Link>
         </div>
      </div>
   );
};

export default About;
