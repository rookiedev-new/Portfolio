export const Home = () => {
   const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
   };
  return (
    
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-10"
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Hi, I'm
          <span className="text-transparent bg-clip-text bg-linear-to-r pl-3 from-purple-400 to-pink-600">
            Gautam
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          MERN Stack Developer
        </p>
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-linear-120 from-purple-500 to-pink-900 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};
export default Home;
