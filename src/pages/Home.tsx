export const Home = () => {
   return (
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center px-4 py-8 relative">
         <div className="absolute top-[68px] left-1/2 transform -translate-x-1/2 bg-amber-600/30 text-white text-center py-2 px-4 rounded-full font-semibold text-sm z-10 shadow-lg">
            <span>⚠️ This website is still in development.</span>
         </div>

         <div className="text-center text-neutral-100 space-y-8 max-w-xl mx-auto">
            <img
               src="https://avatars.githubusercontent.com/u/124641014?s=400&u=f4fbd8329ffdf7e2e5efb8814d37688960966e69&v=4"
               alt="Avatar"
               className="w-32 h-32 rounded-full mx-auto shadow-xl transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-5xl font-semibold leading-tight">Welcome to my website!</h1>
            <p className="text-lg text-neutral-400">
               I am Noah (<span className="text-eagle">prodbyeagle</span>) – a creative developer passionate about building unique web experiences.
            </p>
            <div className="flex justify-center space-x-4">
               <a
                  href="/about"
                  className="border border-neutral-600 px-4 py-2 rounded-lg text-neutral-100 hover:bg-neutral-800 transition"
               >
                  About me
               </a>
               <a
                  href="/projects"
                  className="border border-neutral-600 px-4 py-2 rounded-lg text-neutral-100 hover:bg-neutral-800 transition"
               >
                  Projects
               </a>
            </div>
         </div>
      </div>
   );
};
