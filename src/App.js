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
              {/* <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a> */}
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
            <div className="w-48 h-48 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1 mb-8">
              <img 
                src="/pfp.jpg" 
                alt="Andrew Zhang"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Andrew Zhang</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">Software Dev | Building useful, useable things</p>
          </div>






          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:awzhang@umich.edu" 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all transform hover:scale-105"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-all transform hover:scale-105"
            >
              <FileText size={20} />
              Resume
            </a>
            <a 
              href="https://linkedin.com/in/aandrewzhang" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-all transform hover:scale-105"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a 
              href="https://github.com/awzhang7" 
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
            I'm a passionate software developer that focuses on the intersection between technology and people. 
            I love building user-friendly applications that solve real-world problems. 
            I'm always eager to learn new things and take on new challenges.
          </p>
        </div>
      </section>


      {/* Work Experience Section - Add this after Skills section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
          
          <div className="space-y-8">
            {/* Tesla */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors relative">
              {/* Company Logo - Bottom Right */}
              <img 
                src="/tsla.png" 
                alt="Tesla"
                className="absolute bottom-4 right-4 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain opacity-80 transition-opacity hidden sm:block"
              />
              
              {/* Original content without changes */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-400">Software Engineer Intern</h3>
                  <p className="text-lg text-gray-300">Tesla</p>
                  <p className="text-sm text-gray-400">Palo Alto, CA</p>
                </div>
                <p className="text-gray-400 mt-2 md:mt-0">May 2024 - August 2024</p>
              </div>
              <p className="text-gray-300 mb-4">
                Built automation tools and performance monitoring systems for Tesla's vehicle software testing infrastructure.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Developed a UI test automation framework that accelerated testing pipeline by 32% and saved ~100 engineering hours monthly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Built CI/CD pipeline with integrated CPU/memory profiling and automated performance reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Created intelligent bot for real-time performance monitoring, improving issue response time by 55%</span>
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs bg-gray-700 px-3 py-1 rounded">Python</span>
                <span className="text-xs bg-gray-700 px-3 py-1 rounded">C++</span>
                <span className="text-xs bg-gray-700 px-3 py-1 rounded">Jenkins</span>
                <span className="text-xs bg-gray-700 px-3 py-1 rounded">Linux</span>
                <span className="text-xs bg-gray-700 px-3 py-1 rounded">Ruby</span>
              </div>
            </div>

            {/* Bridge Legal */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors relative">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">

                <img 
                  src="/bl.jpeg" 
                  alt="Bridge Legal"
                  className="absolute bottom-4 right-4 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain opacity-80 transition-opacity hidden sm:block"
                />
                <div>
                  <h3 className="text-xl font-bold text-blue-400">Software Engineer Intern </h3>
                  <p className="text-lg text-gray-300">Bridge Legal</p>
                  <p className="text-sm text-gray-400">Chicago, IL</p>
                </div>
                <p className="text-gray-400 mt-2 md:mt-0">June 2023 - February 2024</p>
              </div>
              <p className="text-gray-300 mb-4">
                Built AI-powered legal technology solutions connecting individuals with lawyers through a SaaS platform.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Architected full-stack AI document processing platform using LLMs, improving retrieval efficiency by 40%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Designed scalable REST APIs and automated data pipelines, reducing processing time by 30%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Implemented secure authentication system with JWT and OAuth2 for protected API access</span>
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs bg-gray-700 px-3 py-1 rounded">Python</span>
                <span className="text-xs bg-gray-700 px-3 py-1 rounded">Flask</span>
                <span className="text-xs bg-gray-700 px-3 py-1 rounded">React</span>
                <span className="text-xs bg-gray-700 px-3 py-1 rounded">AWS</span>
                <span className="text-xs bg-gray-700 px-3 py-1 rounded">LLMs</span>
              </div>
            </div>

            {/* Vita Wallet */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors relative">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">

                <img 
                  src="/vw.jpeg" 
                  alt="Vita Wallet"
                  className="absolute bottom-4 right-4 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain opacity-80 transition-opacity hidden sm:block"
                />

                <div>
                  <h3 className="text-xl font-bold text-blue-400">Software Developer Intern</h3>
                  <p className="text-lg text-gray-300">iXperience | Vita Wallet</p>
                  <p className="text-sm text-gray-400">Remote</p>
                </div>
                <p className="text-gray-400 mt-2 md:mt-0">May 2022 - July 2022</p>
              </div>
              <p className="text-gray-300 mb-4">
                Developed financial technology solutions through iXperience's selective career development program.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Optimized front-end architecture for financial dashboard, improving load performance by 200%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Built real-time dashboard serving 50,000+ international users with currency conversions and transaction data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Implemented API integrations and client-side caching to enhance cross-border transaction experience</span>
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs bg-gray-700 px-3 py-1 rounded">React</span>
                <span className="text-xs bg-gray-700 px-3 py-1 rounded">JavaScript</span>
                <span className="text-xs bg-gray-700 px-3 py-1 rounded">HTML/CSS</span>
                <span className="text-xs bg-gray-700 px-3 py-1 rounded">API Integration</span>
              </div>
            </div>
          </div>
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

      {/* Projects Section
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
      </section> */}

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
                  <a href="mailto:awzhang@umich.edu" className="text-lg hover:text-blue-400 transition-colors">
                    awzhang@umich.edu
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Linkedin className="text-blue-400" />
                  <a href="https://linkedin.com/in/aandrewzhang" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-400 transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Github className="text-blue-400" />
                  <a href="https://github.com/awzhang7" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-400 transition-colors">
                    GitHub Profile
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="mt-12">
            <p className="text-gray-400 mb-4">Or connect with me on:</p>
            <div className="flex justify-center gap-6">
              <a href="https://linkedin.com/in/aandrewzhang" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={32} />
              </a>
              <a href="https://github.com/awzhang7" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={32} />
              </a>
              <a href="mailto:awzhang@umich.edu" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Andrew Zhang</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;