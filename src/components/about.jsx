
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          About Me
        </h2>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I'm a passionate devloper even through no office experience but have the fire of learning ,creating and
            evolving in the world of web development. Currently i am wokring on
            my backend and problem solving skills to become a MERN stack developer.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed ">
            I believe in writing clean, maintainable code try to write so later
            can easily update or edit in future.<br/>
            <span className=" font-bold text-purple-500 ">
              I also work  with AI tools to build  and try to sharpern my skill and
              achive my goal.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
