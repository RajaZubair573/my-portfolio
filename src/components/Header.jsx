import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="w-[90%] max-w-[1200px] mx-auto">
      <nav className="text-white flex justify-between items-center p-4">
        <NavLink to="/" className="z-50" onClick={() => setIsOpen(false)}>
          <img src="/svgs/icon.jpg" alt="" className="size-12 -rotate-6 shadow-black shadow-lg" />
        </NavLink>
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <ul ref={menuRef} className={`${isOpen ? 'flex' : 'hidden'} md:flex text-gray-300 flex-col md:flex-row gap-5 fixed md:relative inset-0 md:inset-auto bg-gray-800 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out z-40 ${isOpen ? 'h-screen w-screen items-center justify-center text-xl md:text-base' : ''}`}>
          <li className="hover:text-white p-2 rounded-lg transition-all duration-200">
            <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text font-bold" : ""}>Home</NavLink>
          </li>
          <li className="hover:text-white p-2 rounded-lg transition-all duration-200">
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text font-bold" : ""}>Contact</NavLink>
          </li>
          <li className="hover:text-white p-2 rounded-lg transition-all duration-200">
            <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text font-bold" : ""}>About</NavLink>
          </li>
          <li className="hover:text-white p-2 rounded-lg transition-all duration-200">
            <NavLink to="/projects" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text font-bold" : ""}>Projects</NavLink>
          </li>
          <li className="p-2 rounded-lg transition-all duration-200">
            <a 
              href="/Raja Zubair Resume.pdf" 
              download
              onClick={() => setIsOpen(false)}
              className="w-full py-2  px-6 shadow-[1px_3px_2px_#aaa] hover:translate-x-[1px] hover:translate-y-[3px] hover:shadow-none hover:rounded-sm hover:bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 transition-all duration-200 text-zinc-700 text-lg font-semibold font-mono hover:text-gray-200 bg-white text-center">
              <i className="fa fa-file-download mr-1"></i> Resumé
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;