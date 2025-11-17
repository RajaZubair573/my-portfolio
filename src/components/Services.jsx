  function Services() {
    return (
      <section className="bg-[#1c1c22] py-12 overflow-hidden">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-tight text-balance">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">Design that solves problems,</span>
              <div>
                One Product at a <span className="sm:block bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">Time</span>
              </div>
            </h1>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-purple-600 to-red-700 rounded-lg mt-8"></div>
          <div
            className="flex justify-between items-center py-6 px-4 bg-transparent hover:bg-gradient-to-r from-purple-600 to-red-700 transition-colors duration-200 group cursor-pointer  text-4xl lg:text-5xl relative"
            onMouseMove={(e) => moveOverlay(e, 'overlay1')} onMouseLeave={() => hideOverlay('overlay1')}>
            <div className="">
              <h2 className="font-semibold leading-tight">
                <span className="text-white">UI/UX <span
                  className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent group-hover:text-white">Design</span></span>
              </h2>
            </div>
            <div className="">
              <i className="fa-solid fa-up-right-from-square text-4xl cursor-pointer"></i>
            </div>
            <div id="overlay1" className="overlay p-2 w-64 rounded-lg text-sm absolute top-1/2 -translate-y-1/2 left-0 -rotate-12 bg-black transition-all duration-500 overflow-hidden opacity-0 pointer-events-none">
              <video src="/projects/Donut Web Prototype/Page 1 - Drag Prototyping For Donuts - Figma 2024-08-23 15-46-33.mp4" muted autoPlay loop></video>
              <p className="pt-2 text-gray-300">
                <span className="font-bold">Delectable Donut Delights</span> - A Visual Journey of Flavors and Fun
              </p>
            </div>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-purple-600 to-red-700 rounded-lg"></div>
          <div
            className="flex justify-between items-center py-6 px-4 bg-transparent hover:bg-gradient-to-r from-purple-600 to-red-700 transition-colors duration-200 group cursor-pointer text-4xl lg:text-5xl relative"
            onMouseMove={(e) => moveOverlay(e, 'overlay2')} onMouseLeave={() => hideOverlay('overlay2')}>
            <div className="">
              <h2 className="font-semibold leading-tight">
                <span className="text-white">Graphic <span
                  className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent group-hover:text-white">Design</span></span>
              </h2>
            </div>
            <div className="">
              <i className="fa-solid fa-up-right-from-square text-4xl cursor-pointer"></i>
            </div>
            <div id="overlay2" className="overlay p-2 w-64 rounded-lg text-sm absolute top-1/2 -translate-y-1/2 left-0 -rotate-12 bg-black transition-all duration-500 overflow-hidden opacity-0 pointer-events-none">
              <img src="/projects/Console Web Design.jpg" alt="Graphic Design" className="w-full h-32 object-cover mb-2 rounded" />
              <p className="text-white">
                <span className="font-bold">Console controller</span> - Reimagining the Gaming Controller
              </p>
            </div>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-purple-600 to-red-700 rounded-lg"></div>
          <div
            className="flex justify-between items-center py-6 px-4 bg-transparent hover:bg-gradient-to-r from-purple-600 to-red-700 transition-colors duration-200 group cursor-pointer text-4xl lg:text-5xl relative"
            onMouseMove={(e) => moveOverlay(e, 'overlay3')} onMouseLeave={() => hideOverlay('overlay3')}>
            <div className="">
              <h2 className="font-semibold leading-tight">
                <span className="text-white">Web <span
                  className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent group-hover:text-white">Design</span></span>
              </h2>
            </div>
            <div className="">
              <i className="fa-solid fa-up-right-from-square text-4xl cursor-pointer"></i>
            </div>
            <div id="overlay3" className="overlay p-2 w-64 rounded-lg text-sm absolute top-1/2 -translate-y-1/2 left-0 -rotate-12 bg-black transition-all duration-500 overflow-hidden opacity-0 pointer-events-none">
              <video src="/projects/Pizza Web Prototype/Page 1 - Pizza Hut Prototyping - Figma 2024-08-19 19-20-14.mp4" muted autoPlay loop></video>
              <p className="text-white">
                <span className="font-bold">Pizza Hut Prototype</span> - A Modern Web Experience for Ordering Pizza
              </p>
            </div>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-purple-600 to-red-700 rounded-lg"></div>
        </div>
      </section>
    );
  }

  export default Services;

  function moveOverlay(event, overlayId) {
    const overlay = document.getElementById(overlayId);
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const maxX = rect.width - overlay.offsetWidth;
    const maxY = rect.height - overlay.offsetHeight;

    const clampedX = Math.max(0, Math.min(x, maxX));
    const clampedY = Math.max(0, Math.min(y, maxY));

    overlay.style.left = `${clampedX}px`;
    overlay.style.top = `${clampedY}px`;

    overlay.style.opacity = '1';
  }

  function hideOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    overlay.style.opacity = '0';
  }
