const AboutMe = () => {
  return (
    <div className="text-white p-4 sm:p-8 md:p-12 rounded-xl shadow-2xl w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        <div className="w-full md:w-1/2">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
            As a passionate graphic designer, I specialize in crafting captivating visual identities and user-centric designs. 
            My expertise in Figma and web design principles allows me to create interfaces that are not only aesthetically pleasing but also highly functional. 
            With a solid foundation in HTML, CSS, JavaScript, Java, and C++, I seamlessly integrate design with development, 
            delivering innovative solutions that push the boundaries of creativity and technology.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img fetchPriority="high"
            src="/designer.png"
            alt="Designer at work"
            className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="mt-8 sm:mt-12  p-6 sm:p-8 rounded-2xl shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Connect With Me</h3>
        <ul className="space-y-5">
          <li className="group">
            <a href="mailto:rajazubair5626573@gmail.com" className="flex items-center justify-between bg-gray-700 bg-opacity-50 p-4 rounded-xl transition-all duration-300 hover:bg-opacity-75 hover:shadow-md">
              <div className="flex items-center space-x-4">
                <span className="text-purple-400 text-2xl sm:text-3xl transition-transform duration-300 group-hover:rotate-12">✉️</span>
                <span className="text-base sm:text-lg text-gray-300 group-hover:text-purple-400 transition-colors duration-300">rajazubair5626573@gmail.com</span>
              </div>
              <span className="text-gray-500 group-hover:text-purple-400 transition-colors duration-300 text-3xl">→</span>
            </a>
          </li>
          <li className="group">
            <a href="tel:+923045626573" className="flex items-center justify-between bg-gray-700 bg-opacity-50 p-4 rounded-xl transition-all duration-300 hover:bg-opacity-75 hover:shadow-md">
              <div className="flex items-center space-x-4">
                <span className="text-green-400 text-2xl sm:text-3xl transition-transform duration-300 group-hover:rotate-12">📞</span>
                <span className="text-base sm:text-lg text-gray-300 group-hover:text-green-400 transition-colors duration-300">+92 304 5626573</span>
              </div>
              <span className="text-gray-500 group-hover:text-green-400 transition-colors duration-300 text-3xl">→</span>
            </a>
          </li>
          <li className="group">
            <div className="flex items-center justify-between bg-gray-700 bg-opacity-50 p-4 rounded-xl transition-all duration-300 hover:bg-opacity-75 hover:shadow-md">
              <div className="flex items-center space-x-4">
                <span className="text-pink-500 text-2xl sm:text-3xl transition-transform duration-300 group-hover:rotate-12">📍</span>
                <span className="text-base sm:text-lg text-gray-300 group-hover:text-pink-500 transition-colors duration-300">Islamabad, Pakistan</span>
              </div>
              <span className="text-gray-500 group-hover:text-pink-500 transition-colors duration-300">●</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
