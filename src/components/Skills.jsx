import { skills } from "../../constants";

function Skills() {


  return (
    <section className="w-[90%] max-w-[1200px] mx-auto space-y-10 pt-20">
      <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">
        What I{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          do
        </span>
      </h2>
      <div className="flex items-center gap-5 flex-wrap font-mono">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#333] basis-40 flex flex-col items-center p-4 text-center rounded-lg space-y-4"
          >
            <div>
              <img
                src={skill.icon}
                alt=""
                className="size-10 md:size-24 object-contain object-center"
              />
            </div>
            <p className="text-sm md:text-base">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
