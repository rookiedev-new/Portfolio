import React from "react";
import face from "../assets/face.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex  justify-center items-center"
    >
      <div className=" w-2xl  mx-auto p-2">
        <h1
          className="text-5xl   font-bold
          py-4 text-center
         "
        >
          About me
        </h1>
       
          <div
            className="bg-slate-900/60  
      rounded-2xl border border-purple-200/40 shadow-black mx-auto shadow-xl p-4"
          >
            <div className="flex  items-center gap-5  w-fit mx-auto my-2 ">
              <div
                className="w-28 h-28 rounded-full bg-gradient-to-br
           via-purple-600 from-pink-400 to-blue-400  shadow-lg shadow-purple-500/50
             "
              >
                <img className="rounded-full h-28 w-28 p-2" src={face} alt="" />
              </div>
              <div className=" text-xl text-gray-300">
                <h2 className="text-4xl">Gautam</h2>
                <h2 className="text-purple-500 text-2xl">Frontend Developer</h2>
              </div>
            </div>
            <div className="text-gray-300 text-xl px-2 py-3">
              <h1 className="py-3">
                Hi ,I'm a passionate frontend developer with my self learn
                experience. I build web applications or pages.
              </h1>

              <h1>
                I believe in writing clean, maintainable code and always try to
                improve my logics. When I'm not coding, I try to find new ideas
                for projects or learning new frameworks(stuff).
              </h1>
              <hr className="w-[95%] mx-auto my-3 opacity-55" />
            </div>
       
        </div>
      </div>
    </section>
  );
};

export default About;
