import { topProjects } from "../../constants";

function Projects() {

  return (
    <section className="w-[90%] max-w-[1200px] mx-auto space-y-8" id="projects">
      <div className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
        <h2>Look at my <br className="hidden md:block" /> <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">Projects</span></h2>
      </div>
      <div className="flex flex-wrap justify-center lg:justify-evenly *:basis-80 *:grow gap-8">
        {topProjects.map((project, index) => (
          <a href={project.link} target="_blank" key={index} className="rounded-xl bg-[#1c1c22] overflow-hidden">
            <div className="bg-gray-300">
              <img src={project.image} alt="" className="object-cover object-center w-full aspect-video" />
            </div>
            <div className="p-3">
              <h3 className="text-lg lg:text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="/projects"
          className="bg-white text-black font-semibold py-3 px-8 rounded-sm shadow-lg border-none outline-none text-md transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-orange-400 hover:text-white hover:scale-105"
          style={{ textDecoration: 'none' }}
        >
          View All Projects
        </a>
      </div>
    </section>
  );
}

export default Projects;
