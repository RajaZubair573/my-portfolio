import React from 'react';

function Projects() {
  const projects = [
    {
      image: "./public/projects/Logitech G502 X.jpg",
      title: "Logitech G502 X",
      description: "Experience precision gaming with our advanced wireless mouse technology."
    },
    {
      image: "./public/projects/Electric Bike design.jpg",
      title: "VoltCycle Revolution",
      description: "Eco-friendly transportation meets cutting-edge technology."
    },
    {
      image: "./public/projects/CTA design.png",
      title: "Nunito CTA",
      description: "Eye-catching CTAs and seamless user flows."
    }
  ];

  return (
    <section className="w-[90%] max-w-[1200px] mx-auto space-y-8" id="projects">
      <div className="text-4xl lg:text-5xl font-semibold leading-tight">
        <h2>Look at my <br /> <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">Projects</span></h2>
      </div>
      <div className="flex flex-wrap justify-center lg:justify-evenly *:basis-80 *:grow gap-8">
        {projects.map((project, index) => (
          <div key={index} className="rounded-xl bg-[#1c1c22] overflow-hidden">
            <div className="bg-gray-300">
              <img src={project.image} alt="" className="object-cover object-center w-full aspect-video" />
            </div>
            <div className="p-3">
              <h3 className="text-lg lg:text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
