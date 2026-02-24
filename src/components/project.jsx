import pic1 from "../assets/past1.png";
import pic2 from "../assets/past2.png";
import pic3 from "../assets/past3.png";
import pic4 from "../assets/past4.png";
function Project() {
  const projectlist = [
    {
      name: "Pokedex",
      detail:
        "Shows you different pokemon data like img,typing,abilities and stats by fetching data.",
      language: ["React", "Tailwind", "API"],
      imagelink: pic1,
      site: "https://rookiedev-new.github.io/Poketab-dex/",
    },
    {
      name: "Pastry App",
      detail: "Order your favourite pastry from here.",
      language: ["React", "Tailwind"],
      imagelink: pic2,
      site: "https://rookiedev-new.github.io/Pastry-app/",
    },
    {
      name: "Weather app",
      detail: "Shows you weather of different countries through fetching data.",
      language: ["React", "Tailwind", "API"],
      imagelink: pic3,
      site: "https://rookiedev-new.github.io/Weather-finder/",
    },

    {
      name: "Country Finder",
      detail: "Show you the Country data like flag currency etc.",
      language: ["HTML", "CSS", "JS"],
      imagelink: pic4,
      site: "https://rookiedev-new.github.io/country-finder/",
    },
  ];
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectlist.map((x, idx) => {
        
            return (
              <div
                key={idx}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-500/20 transition"
              >
                <div className="h-48 ">
                <img src={x.imagelink} className="w-full h-full" alt="no img" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {x.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{x.detail}</p>
                  <div className="flex gap-2 flex-wrap mb-4">
                   { x.language.map((y, id) =>(
                      <span
                        key={id}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                      >
                        {y}
                      </span>
                    
          ))}
                  </div>

                  <button className="flex items-center gap-2 text-purple-400 underline hover:text-purple-300 transition">
                    <a href={x.site} target="_blank" >View Project -</a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Project;
