import React from 'react';

function Skills() {
  const skills = [
    { name: "Figma", icon: "./public/svg's/figma-svgrepo-com.svg" },
    { name: "Photoshop", icon: "./public/svg's/photoshop-cc-logo-svgrepo-com.svg" },
    { name: "Illustrator", icon: "./public/svg's/illustrator-svgrepo-com.svg" },
    { name: "HTML", icon: "./public/svg's/html-5-svgrepo-com.svg" },
    { name: "CSS", icon: "./public/svg's/css-3-svgrepo-com.svg" },
    { name: "Tailwind CSS", icon: "./public/svg's/Tailwind_CSS_Logo.svg.png" },
    { name: "Lightroom", icon: "./public/svg's/adobe-lightroom-svgrepo-com.svg" },
    { name: "Canva", icon: "./public/svg's/canva-icon.webp" }
  ];

  return (
    <section className="w-[90%] max-w-[1200px] mx-auto space-y-10 pt-20">
      <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">What I <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">do</span></h2>
      <div className="flex items-center gap-5 flex-wrap font-mono">
        {skills.map((skill, index) => (
          <div key={index} className="bg-[#333] p-4 text-center rounded-lg space-y-4">
            <div>
              <img src={skill.icon} alt="" className="size-24 object-contain object-center" />
            </div>
            <h2>{skill.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
