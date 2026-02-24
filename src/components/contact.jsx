import { Github, Linkedin, Mail } from "lucide-react";
function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-2xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Get In Touch
        </h2>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <p className="text-gray-300 text-center mb-8 text-lg">
            I'm always open to new opportunities. Feel free to reach out!
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition">
              <Mail className="text-purple-400" size={24} />
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white">gautam.jun46@gamil.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition">
              <Github className="text-purple-400" size={24} />
              <div>
                <p className="text-gray-400 text-sm">GitHub</p>
                <p className="text-white">github.com/rookiedev-new</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition">
              <Linkedin className="text-purple-400" size={24} />
              <div>
                <p className="text-gray-400 text-sm"> LinkedIn</p>
                <p className="text-white text-sm underline">
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/gautam-373bb9305/"
                    target="_blank"
                  >
                    Go to Linkeddin{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
