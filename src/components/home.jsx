export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center mt-6 "
    >
      <div className="text-center px-4">
        <h1 className="text-4xl sm:text-6xl mb-5">
          Hi, I'm <span className="text-blue-400 underline">Gautam</span>
        </h1>
        <p className="text-neutral-300  mx-auto xl sm:text-2xl mb-5 max-w-lg">
          I wanna become a front end deveploper who loves learning and creating web pages.
          My goal is gain more knowleadge and experience in this feild while
          also providing the user a good UI (User Interface).
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a
            href="#project"
            className="border border-blue-500 text-blue-400 py-3 px-5 sm:text-lg rounded-lg font-bold
            hover:translate-y-0.5"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};
export default Home;
