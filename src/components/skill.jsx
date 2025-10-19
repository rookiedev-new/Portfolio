export const Skill = () => {
  const frontendskill = [
    { skillname: "javascript", lvl: 68 },
    { skillname: "React", lvl: 65 },
    { skillname: "Tailwind", lvl: 64 },
    { skillname: "Git&hub", lvl: 67 },
    { skillname: "Html&Css", lvl: 71 },
  ];
  return (
    <section id="skill">
      <div className=" min-h-screen flex justify-center items-center py-16">
        <div className="w-4xl  mx-auto px-4">
          <div
            className="bg-slate-900/60  
      rounded-2xl border border-purple-200/40 shadow-black  p-4 shadow-xl "
          >
            <h1 className="text-3xl font-bold bg-gradient-to-l to-yellow-200  from-purple-500 bg-clip-text text-transparent ">
              Front End Skills
            </h1>
            {frontendskill.map((xy, id) => (
              <div key={id}>
                <div
                  className="flex justify-between py-2 
                 font-bold text-xl "
                >
                  <span>{xy.skillname}</span>
                  <span className="bg-gradient-to-l from-pink-400  to-purple-600 bg-clip-text text-transparent">
                    {xy.lvl}%
                  </span>
                </div>
                <div className="bg-stone-900 rounded-full px-1 py-1">
                  <div
                    style={{ width: `${xy.lvl + 5}%` }}
                    className={`h-4 bg-gradient-to-l to-pink-500  from-purple-800 rounded-full`}
                  ></div>
                </div>
              </div>
            ))}
            <div className="flex justify-between text-2xl py-4 px-2 font-semibold">
              <span>Next JS</span>{" "}
              <span className="animate-pulse text-green-500">
                {" "}
                - In Progress
              </span>
            </div>
          </div>
          {/* <div className="rounded-xl p-6 border border-white/40 hover:translate-y-1 transition-all">
            <p className=" text-lg sm:text-xl">
              Hi! I'am Passitinate front end devoloper who enjoys building
              responsive, user-friendly websites and web pages.
              <br />
              I'm still working on strengthening my JavaSript and React
              knowledge through the experience i got while building new stuffs.
              <br />
            </p>
            <p className="text-xl sm:text-2xl my-2">
             
              Always try to learn new things and stuffs causes this path has a
              lot a highs that i want to reach.
            </p>
          </div>

          <div className=" p-2 gap-6 border border-white/30 my-5 rounded-2xl hover:scale-105 transition-all duration-300 ease-in">
            <div className=" flex flex-wrap rounded-xl p-5 hover:translate-y-1 transition-all">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">Skills</h3>
              <div className="flex flex-wrap sm:gap-4 gap-2 ">
                {frontendskill.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-600 text-xl sm:text-2xl font-bold text-white py-1 mx-1 px-5 rounded-full hover:bg-blue-500/20 
hover:shadow-[3px_3px_9px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Skill;
