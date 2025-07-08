import React, { useState } from 'react';
import { Mail, FileText, Linkedin, Github, Send, Menu, X, Briefcase, User, Code } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Andrew Zhang
            </h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <a href="#about" className="block py-2 hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="block py-2 hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="block py-2 hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="block py-2 hover:text-blue-400 transition-colors">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1 mb-8">
              <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                <User size={48} className="text-blue-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Andrew Zhang</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">Full Stack Developer | React Enthusiast | Problem Solver</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:your.email@example.com" 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all transform hover:scale-105"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a 
              href="/path-to-your-resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-all transform hover:scale-105"
            >
              <FileText size={20} />
              Resume
            </a>
            <a 
              href="https://linkedin.com/in/your-profile" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-all transform hover:scale-105"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a 
              href="https://github.com/your-username" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-all transform hover:scale-105"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I love building user-friendly applications that solve real-world problems. 
            With a strong foundation in React, Node.js, and cloud technologies, 
            I'm always eager to learn and take on new challenges.
          </p>
        </div>
      </section>
{/* 
      Skills Section
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'React', 'TypeScript', 'Next.js', 'Node.js',
              'Express', 'PostgreSQL', 'MongoDB', 'AWS',
              'Docker', 'Git', 'GraphQL', 'Tailwind CSS'
            ].map((skill) => (
              <div 
                key={skill}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors"
              >
                <Code className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "Full-stack React app with Node.js backend, featuring user auth, payment integration, and real-time inventory.",
                tech: ["React", "Node.js", "MongoDB", "Stripe"],
                demo: "https://demo.example.com",
                github: "https://github.com/yourusername/project1"
              },
              {
                title: "Task Management App",
                description: "Collaborative project management tool with real-time updates, drag-and-drop interface, and team features.",
                tech: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
                demo: "https://demo.example.com",
                github: "https://github.com/yourusername/project2"
              },
              {
                title: "Weather Dashboard",
                description: "Interactive weather app with location-based forecasts, historical data visualization, and mobile-responsive design.",
                tech: ["React", "Chart.js", "OpenWeather API", "Tailwind"],
                demo: "https://demo.example.com",
                github: "https://github.com/yourusername/project3"
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all transform hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <Briefcase size={64} className="text-white/50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-gray-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.demo} className="text-blue-400 hover:text-blue-300">Live Demo →</a>
                    <a href={project.github} className="text-blue-400 hover:text-blue-300">GitHub →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-300 mb-12">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!
          </p>
          
          <div className="space-y-4">
            <button
              onClick={() => setShowContactInfo(!showContactInfo)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Send size={20} />
              Show Contact Info
            </button>

            {showContactInfo && (
              <div className="bg-gray-800 rounded-lg p-6 mt-6 space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="text-blue-400" />
                  <a href="mailto:your.email@example.com" className="text-lg hover:text-blue-400 transition-colors">
                    your.email@example.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Linkedin className="text-blue-400" />
                  <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-400 transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Github className="text-blue-400" />
                  <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-400 transition-colors">
                    GitHub Profile
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="mt-12">
            <p className="text-gray-400 mb-4">Or connect with me on:</p>
            <div className="flex justify-center gap-6">
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={32} />
              </a>
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={32} />
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Andrew Zhang. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;