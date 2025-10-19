import Navbar from "./components/navbar";
import Home from "./components/home";
import Project from "./components/project";
import About from "./components/about";
import Skill from "./components/skill";
import Foot from "./components/contact";

function App() {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-purple-900 via-30% to-pink-700 to-90%">
      <Navbar />

      <Home />
      <About/>
      <Project />
      <Skill />
      <Foot />
    </div>
  );
}

export default App;
