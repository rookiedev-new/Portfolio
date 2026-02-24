
import {Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
      <footer className="bg-slate-900/95 py-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">
            © 2026 Gautam , All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <button className="text-gray-400 hover:text-purple-400 transition">
              <Github size={24} />
            </button>
            <button className="text-gray-400 hover:text-purple-400 transition">
              <Linkedin size={24} />
            </button>
            <button className="text-gray-400 hover:text-purple-400 transition">
              <Mail size={24} />
            </button>
          </div>
        </div>
      </footer>
  )
}

export default Footer;