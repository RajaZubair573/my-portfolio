import React from 'react';

function Hero() {
  return (
    <section className="w-[90%] max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative">
      <div id="particles-js" className="absolute inset-0 z-0"></div>
      <div className="leading-6 space-y-6 w-full md:w-1/2 z-10">
        <h1 className="text-4xl xl:text-5xl font-semibold leading-tight text-balance">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">Hello, I am Zubair</span>
          <div className="">
            A web designer from <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">Islamabad</span>
          </div>
        </h1>
        <p className="">I create visually stunning and user-friendly designs that enhance brand identity and user engagement.</p>
        <div className="flex flex-wrap gap-5">
          <a href="#contact" className="border py-2 px-6 rounded-full hover:text-black hover:bg-white transition-all duration-500">Get in Touch</a>
          <a href="#projects" className="border py-2 px-6 rounded-full hover:text-black hover:bg-white transition-all duration-500">View all work</a>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center z-10">
        <img fetchPriority='high' src="/Image/raja.jpg" alt="" className="shadow-[#555] shadow-md rounded-sm w-2/3" />
      </div>
    </section>
  );
}

export default Hero;
