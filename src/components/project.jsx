export const Project = () => {
  const project = [
    {
      name: "To do List",
      detail: "A simple to do list that adds your task for you keep track.",
      language: ["HTML", "CSS", "JS"],
      code: "https://github.com/rookiedev-new/To-do-list",
      site: "https://rookiedev-new.github.io/To-do-list/",
    },
    {
      name: "Country Finder",
      detail: "Show you the Country data like flag currency etc.",
      language: ["HTML", "CSS", "JS"],
      code: "https://github.com/rookiedev-new/country-finder",
      site: "https://rookiedev-new.github.io/country-finder/",
    },
    {
      name: "Weather app",
      detail:
        "Shows you weather of different countries through fetching data from (API).",
      language: ["React", "Tailwind"],
      code: "https://github.com/rookiedev-new/Weather-finder",
      site: "https://rookiedev-new.github.io/Weather-finder/",
    },
    {
      name: "Pokedex",
      detail:
        "Shows you different pokemon data like img,typing,abilities and stats by fetch data from (API).",
      language: ["React", "Tailwind"],
      code: "https://github.com/rookiedev-new/Poketab-dex",
      site: "https://rookiedev-new.github.io/Poketab-dex/",
    },
  ];
  return (
    <section id="project">
      <div className="min-h-screen flex items-center justify-center py-10">
        <div className="max-w-5xl mx-auto px-5">
          <h3 className="text-5xl font-bold mb-2 text-blue-300 text-center my-5 py-3">
            Projects
          </h3>

          <div className="grid  grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3 font-bold">
            {project.map((val, id) => (
              <div
                key={id}
                className="p-4 rounded-xl border border-white/20 hover:translate-y-1 hover:border-blue-500/40 hover:shadow-[4px_6px_4px_rgba(59,130,246,0.2)] transition-all "
              >
                <h2 className="text-2xl font-bold">{val.name}</h2>
                <p>{val.detail}</p>
                <div className="my-3">
                  {val.language.map((tch, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-400/10 text-xl  text-blue-400 py-1 mx-2  px-5 rounded-full hover:bg-blue-500/20 
hover:shadow-[5px_5px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tch}
                    </span>
                  ))}
                </div>
                <div
                  className="border text-green-500 rounded-2xl text-lg border-green-50/30 w-21  px-3 my-2
                hover:shadow-[0_3px_9px_green] transition-all"
                >
                  <a href={val.code} target="_blank">
                    Source
                  </a>{" "}
                </div>
                <div>
                  <a
                    href={val.site}
                    target="_blank"
                    className="to-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project -
                  </a>
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
