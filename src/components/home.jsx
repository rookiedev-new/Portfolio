
export const Home = () => {
  return (
    <section
      id="home"
      className=" min-h-screen flex items-center justify-center  "
    >
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 ">
          Hi, I am Gautam<br/>
          Frontend Developer
        </h1>

       

        <div className="flex flex-wrap justify-center text-lg gap-5">
          <button
            className="px-6 py-3 bg-gradient-to-r
           from-purple-500 to-pink-800 rounded-full font-semibold
            "
          >
            View Projects
          </button>
          <button
            className="px-6 py-3 border-2 border-purple-400 rounded-full font-semibold
           hover:bg-purple-400/30 transition-all"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};
export default Home;
