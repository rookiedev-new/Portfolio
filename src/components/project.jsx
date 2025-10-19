import pic1 from '../assets/past1.png'
import pic2 from '../assets/past2.png'
import pic3 from '../assets/past3.png'
import pic4 from '../assets/past4.png'
export const Project = () => {

  const project = [
    {
      name: "Pokedex",
      detail:
        "Shows you different pokemon data like img,typing,abilities and stats by fetching data.",
      language: ["React", "Tailwind", "API"],
imagelink:pic1,
      site: "https://rookiedev-new.github.io/Poketab-dex/",
    },
    {
      name: "Pastry App",
      detail: "Order your favourite pastry from here.",
      language: ["React", "Tailwind"],
imagelink:pic2,
      site: "https://rookiedev-new.github.io/Pastry-app/",
    },
    {
      name: "Weather app",
      detail: "Shows you weather of different countries through fetching data.",
      language: ["React", "Tailwind", "API"],
imagelink:pic3,
      site: "https://rookiedev-new.github.io/Weather-finder/",
    },

    {
      name: "Country Finder",
      detail: "Show you the Country data like flag currency etc.",
      language: ["HTML", "CSS", "JS"],
imagelink:pic4,
      site: "https://rookiedev-new.github.io/country-finder/",
    },
  ];
  return (
    <section id="project">
      <div className="min-h-screen flex items-center justify-center py-10">
        <div className="max-w-5xl mx-auto px-5">
          <h3 className="text-5xl font-bold mb-2  text-center my-5 py-3">
            Projects
          </h3>

          <div
            className="grid  grid-cols-1 
          sm:grid-cols-2 gap-4   font-bold"
          >
            {project.map((val, id) => (
              <div
                key={id}
                className="bg-slate-900/60  
      rounded-2xl border border-purple-200/40 shadow-black  p-4 shadow-xl "
              >
                <div className="w-full  h-52 bg-white rounded-2xl p-0.5 ">
                  <img   className="w-full h-full rounded-2xl" src={val.imagelink} alt="" />
                </div>
                <h2 className="text-2xl mt-2 font-bold">{val.name}</h2>
                <p>{val.detail}</p>
                <div className="my-3">
                  {val.language.map((tch, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r  from-pink-400
                        to-purple-800 text-xl  text-white py-1 mx-2 
                         px-4 font-mono 
                        rounded-full  "
                    >
                      {tch}
                    </span>
                  ))}
                </div>
                <div className=" text-lg w-32 font-extrabold px-2">
                  <span className="  w-24 my-2 text-center inline-block rounded-3xl border-2  ">
                    <a
                      href={val.site}
                      target="_blank"
                      className="to-blue-400  transition-colors"
                    >
                      Go live
                    </a>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Project;
