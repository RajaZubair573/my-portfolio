import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section>
      <div className="w-[90%] max-w-[1200px] mx-auto space-y-10 py-24 md:w-2/3">
        <h2 className="text-3xl lg:text-5xl font-mono font-semibold leading-tight text-center md:text-left">
          <a href="#">
            See the impact of good, conversion-oriented design on your business 
            <Link to="/contact" className="block bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-balance bg-clip-text text-transparent mt-5 w-fit mx-auto md:mx-0">
              Let&apos;s Work Together
              <i className="fa-solid fa-up-right-from-square text-4xl cursor-pointer"></i>
              <span className="h-1 mt-[8px] w-full block bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 invisible sm:visible"></span>
            </Link>
          </a>
        </h2>
      </div>
    </section>
  );
}

export default CallToAction;
