export const About = () => {
  const frontendskill = ["HTML", "CSS", "JS", "React", "Tailwind"];
  return (
    <section id="about">
      <div className=" min-h-screen flex justify-center items-center py-16">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-4xl sm:text-5xl text-blue-300 font-bold underline my-5 text-center">
            About me
          </h2>
          <div className="rounded-xl p-6 border border-white/40 hover:translate-y-1 transition-all">
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

          <div className=" p-2 gap-6 border border-white/30 my-5 rounded-2xl">
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
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
