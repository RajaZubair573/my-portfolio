import { projects } from '../../constants';
function Projects() {
  return (
    
      <section className="w-[90%] max-w-[1200px] mx-auto space-y-8 pb-10" id="projects">
        <div className="text-4xl lg:text-5xl font-semibold leading-tight">
          <h2>Look at my <br /> <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">Projects</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a  href={project.link} target="_blank" key={project.id} className="block rounded-xl bg-[#1c1c22] overflow-hidden">
              <div className="bg-gray-300">
                <img src={project.imagePath} alt={project.name} className="object-cover object-center w-full aspect-video" />
              </div>
              <div className="p-3">
                <h3 className="text-lg lg:text-xl font-semibold">{project.name}</h3>
                <p className="text-sm text-gray-400">{project.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
   
  );
}

export default Projects;