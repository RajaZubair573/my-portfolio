const AboutMe = () => {
  return (
    <div className="text-white p-4 sm:p-8 md:p-12 rounded-xl shadow-2xl w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        <div className="w-full md:w-1/2">
          <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 space-y-4">
            <p>
              I’m Zubair, a UI/UX Designer and Frontend Website Developer with 3+ years of design experience and over a year in development. I specialize in creating clean, modern, user-centered interfaces across websites, mobile apps, and dashboards.
            </p>
            <p>
              I’m skilled in design systems, UX research, Tailwind CSS, React.js, and actively learning Next.js. I’ve designed complete products including a Data Recovery app, Axion e-commerce website, and the Synctom software house website. I also communicate directly with clients to present and justify design decisions.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            fetchPriority="high"
            src="/designer.png"
            alt="Designer at work"
            className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="mt-8 sm:mt-12  p-6 sm:p-8 rounded-2xl shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Connect With Me
        </h3>
        <ul className="space-y-5">
          <li className="group">
            <a
              href="mailto:rajazubair5626573@gmail.com"
              className="flex flex-col sm:flex-row items-center justify-between bg-gray-700 bg-opacity-50 p-4 rounded-xl transition-all duration-300 hover:bg-opacity-75 hover:shadow-md"
            >
              <div className="flex flex-col sm:flex-row items-center">
                <span className="text-purple-400 text-xl sm:text-2xl transition-transform duration-300 group-hover:rotate-12 mb-2 sm:mb-0 sm:mr-3">
                  ✉️
                </span>
                <span className="text-sm sm:text-base text-gray-300 group-hover:text-purple-400 transition-colors duration-300 break-all text-center">
                  rajazubair5626573@gmail.com
                </span>
              </div>
              <span className="hidden sm:block text-gray-300 group-hover:text-purple-400 text-2xl">
                →
              </span>
            </a>
          </li>
          <li className="group">
            <a
              href="tel:+923045626573"
              className="flex flex-col sm:flex-row items-center justify-between bg-gray-700 bg-opacity-50 p-4 rounded-xl transition-all duration-300 hover:bg-opacity-75 hover:shadow-md"
            >
              <div className="flex flex-col sm:flex-row items-center">
                <span className="text-green-400 text-xl sm:text-2xl transition-transform duration-300 group-hover:rotate-12 mb-2 sm:mb-0 sm:mr-3">
                  📞
                </span>
                <span className="text-sm sm:text-base text-gray-300 group-hover:text-green-400 transition-colors duration-300 text-center">
                  +92 304 5626573
                </span>
              </div>
              <span className="hidden sm:block text-gray-300 group-hover:text-green-400 text-2xl">
                →
              </span>
            </a>
          </li>
          <li className="group">
            <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-700 bg-opacity-50 p-4 rounded-xl transition-all duration-300 hover:bg-opacity-75 hover:shadow-md">
              <div className="flex flex-col sm:flex-row items-center">
                <span className="text-pink-500 text-xl sm:text-2xl transition-transform duration-300 group-hover:rotate-12 mb-2 sm:mb-0 sm:mr-3">
                  📍
                </span>
                <span className="text-sm sm:text-base text-gray-300 group-hover:text-pink-500 transition-colors duration-300 text-center">
                  Islamabad, Pakistan
                </span>
              </div>
              <span className="hidden sm:block text-gray-300 group-hover:text-pink-500 text-2xl">
                →
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
