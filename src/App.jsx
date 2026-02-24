import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Project from "./components/project";
import Skill from "./components/skill";
import Footer from "./components/footer";

import Contact from "./components/contact";

function App() {
  return (
    <div className="min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
