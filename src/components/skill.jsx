function Skill() {
  return (
     <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Skills</h2>
          
          {/* Frontend Skills */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-6 text-center">Frontend</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {/* HTML */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-slate-700/50 transition transform hover:scale-105">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-white font-semibold text-lg">HTML</h3>
              </div>
              {/* CSS */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-slate-700/50 transition transform hover:scale-105">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-white font-semibold text-lg">CSS</h3>
              </div>
              {/* JavaScript */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-slate-700/50 transition transform hover:scale-105">
                <div className="text-4xl mb-4">📜</div>
                <h3 className="text-white font-semibold text-lg">JavaScript</h3>
              </div>
              {/* React */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-slate-700/50 transition transform hover:scale-105">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-white font-semibold text-lg">React</h3>
              </div>
              {/* Tailwind CSS */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-slate-700/50 transition transform hover:scale-105">
                <div className="text-4xl mb-4">💨</div>
                <h3 className="text-white font-semibold text-lg">Tailwind CSS</h3>
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-6 text-center">Backend</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Node.js */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-slate-700/50 transition transform hover:scale-105">
                <div className="text-4xl mb-4">🟢</div>
                <h3 className="text-white font-semibold text-lg">Node.js</h3>
              </div>
              {/* Express.js */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-slate-700/50 transition transform hover:scale-105">
                <div className="text-4xl mb-4">🚂</div>
                <h3 className="text-white font-semibold text-lg">Express.js</h3>
              </div>
              {/* CRUD Operations */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-slate-700/50 transition transform hover:scale-105">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-white font-semibold text-lg">CRUD</h3>
              </div>
              {/* MongoDB */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-slate-700/50 transition transform hover:scale-105">
                <div className="text-4xl mb-4">🍃</div>
                <h3 className="text-white font-semibold text-lg">MongoDB</h3>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6 text-center">Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {/* Git */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-slate-700/50 transition transform hover:scale-105">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-white font-semibold text-lg">Git</h3>
              </div>
              {/* GitHub */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-slate-700/50 transition transform hover:scale-105">
                <div className="text-4xl mb-4">🐙</div>
                <h3 className="text-white font-semibold text-lg">GitHub</h3>
              </div>
              {/* Postman */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-slate-700/50 transition transform hover:scale-105">
                <div className="text-4xl mb-4">📮</div>
                <h3 className="text-white font-semibold text-lg">Postman</h3>
              </div>
            </div>
          </div>

        </div>
      </section>
  );
}
export default Skill;
