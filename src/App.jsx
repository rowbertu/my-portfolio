import { useState } from "react";
import gasolvePic1 from "./assets/RED_LOGO.png";
import gasolvePic2 from "./assets/gasolve1.jpg";
import gasolvePic3 from "./assets/gasolve2.jpg";
import profilePic from "./assets/picture.png";
import airlinkImg from "./assets/airlink.png";
import plantImg from "./assets/plant.png";
import plantImg2 from "./assets/plant2.png";
import plantImg3 from "./assets/plant3.png";
import moodGardenImg1 from "./assets/moodgarden.jpg";
import moodGardenImg2 from "./assets/moodgarden2.jpg";
import moodGardenImg3 from "./assets/moodgarden3.jpg";

export default function PortfolioApp() {
  const projects = [
    {
      title: "GaSolve: IoT-Enabled LPG Leak Detection and Valve Auto-Shut off System",
      role: "Software & Backend Developer",
      images: [gasolvePic1, gasolvePic2, gasolvePic3],
      tech: ["React Native", "Firebase", "IoT", "JavaScript"],
      description:
        "Developed a smart LPG leak detection and valve automation system with real-time safety alerts and cloud-connected monitoring.",
      highlights: [
        "Built the mobile interface using React Native",
        "Integrated Firebase for real-time notifications",
        "Managed hardware-to-cloud communication",
      ],
      github: "https://github.com/rowbertu/GaSolve-Mobile-App",
    },
    {
      title: "AirLink Defense: Drone Communication System",
      role: "Software Developer",
      images: [airlinkImg, airlinkImg, airlinkImg],
      tech: ["Encryption", "Communication Systems", "Security"],
      description:
        "Designed a secure airborne communication interface for tactical drone operations.",
      highlights: [
        "Top 8 Finalist among 52 schools",
      ],
      github: "https://github.com/rowbertu/AIRLINK_GUI",
    },
    {
      title: "Plant Disease Detector",
      role: "AI Developer",
      images: [plantImg, plantImg2, plantImg3],
      tech: ["Python", "CNN", "Deep Learning", "TensorFlow"],
      description:
        "Built and trained a convolutional neural network model to classify plant leaf diseases using the PlantVillage dataset.",
      highlights: [
        "Achieved 98% validation accuracy",
        "Performed image preprocessing and training",
        "Developed AI-powered disease classification",
      ],
      github: "https://github.com/rowbertu/plant_disease_detection",
    },
    {
      title: "Mood Garden: Wellness Tracker",
      role: "Frontend Mobile Developer",
      images: [moodGardenImg, moodGardenImg, moodGardenImg], 
      tech: ["React Native", "Expo", "JavaScript"],
      description:
        "Developed a gamified wellness mobile application that tracks daily habits, mood, and step counts with interactive plant growth visualizations.",
      highlights: [
        "Built dynamic UI components and animations",
        "Designed a gamified step-tracking journey (Step Story)",
        "Implemented daily check-ins for sleep, water, and mood",
      ],
      github: "https://github.com/rowbertu/mood-garden",
    },
  ];

  const skills = {
    Languages: ["Python", "JavaScript", "React", "HTML/CSS"],
    Frameworks: ["React Native", "Firebase"],
    Tools: ["Git", "GitHub", "Google Colab", "VS Code"],
    Focus: ["Backend Development", "AI", "IoT", "Software Engineering"],
  };

 /// Carousel Component
  function ProjectCard({ project }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const handlePrevImage = (e) => {
      e.stopPropagation();
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    };

    const handleNextImage = (e) => {
      e.stopPropagation();
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    };

    return (
      <div
        key={project.title}
        className="group flex flex-col overflow-hidden rounded-[2.25rem] border border-amber-200 bg-white shadow-[0_20px_70px_rgba(217,119,6,0.08)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_35px_90px_rgba(217,119,6,0.16)] hover:border-amber-300 cursor-pointer relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setCurrentImageIndex(0);
        }}
      >
        {/* Image Carousel */}
        <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-gray-100">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - image ${currentImageIndex + 1}`}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Subtle persistent bottom gradient for image indicators */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-0" />

          {/* Dark overlay that appears on hover to make the GitHub button pop */}
          <div 
            className={`absolute inset-0 bg-black/30 transition-opacity duration-300 z-10 ${
              isHovering ? "opacity-100" : "opacity-0"
            }`} 
          />

          {/* Centered GitHub Button - Appears on Hover */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center gap-3 rounded-full bg-[#24292e]/95 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-black hover:scale-105 shadow-xl ${
              isHovering
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90 pointer-events-none"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View GitHub
          </a>

          {/* Carousel Navigation - Only visible on hover */}
          {isHovering && project.images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-amber-950 font-bold py-2 px-3 rounded-lg shadow-md transition opacity-0 group-hover:opacity-100 duration-300"
              >
                ‹
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-amber-950 font-bold py-2 px-3 rounded-lg shadow-md transition opacity-0 group-hover:opacity-100 duration-300"
              >
                ›
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-white w-6"
                        : "bg-white/50 w-2 hover:bg-white/90"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Card Content Area (Text and Tags Only) */}
        <div className="p-8 flex flex-col flex-grow gap-6">
          <div>
            <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-800 shadow-sm">
              {project.role}
            </span>

            <h3 className="mt-5 text-2xl font-semibold leading-tight text-amber-950">
              {project.title}
            </h3>
          </div>

          <p className="text-amber-700 leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-3">
            {project.highlights.map((highlight) => (
              <p key={highlight} className="text-sm text-amber-700">
                • {highlight}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-amber-50 rounded-full text-xs text-amber-900 font-semibold border border-amber-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 text-amber-950 font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-200 shadow-[0_25px_80px_rgba(217,119,6,0.08)]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">
            Robert Delos Santos
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-amber-700 font-medium">
            <a href="#about" className="hover:text-amber-900 transition">
              About
            </a>
            <a href="#skills" className="hover:text-amber-900 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-amber-900 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-amber-900 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-amber-700 font-medium mb-4">
            Computer Engineer • Software Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-amber-950">
            Hi, I’m Robert!
          </h1>

          <p className="mt-8 text-amber-700 text-lg leading-relaxed max-w-xl">
            Detail-oriented Computer Engineer passionate about
            backend systems, AI applications, IoT technologies, and scalable
            software engineering solutions.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="https://github.com/rowbertu"
              className="px-6 py-3 bg-amber-600 text-white rounded-2xl font-semibold hover:bg-amber-700 hover:scale-105 transition"
            >
              GitHub
            </a>

            <a
              href="/RobertResume.pdf"
              className="px-6 py-3 border border-amber-200 rounded-2xl text-amber-900 hover:bg-amber-100 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white via-amber-50 to-amber-100 rounded-[2.5rem] p-10 border border-amber-200 shadow-[0_30px_90px_rgba(217,119,6,0.12)] ring-1 ring-amber-100 backdrop-blur-sm">
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-amber-200 bg-white shadow-[0_20px_60px_rgba(217,119,6,0.1)]">
            <img
              src={profilePic}
              alt="Profile photo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-8 tracking-tight text-amber-950">
              About Me
            </h2>

            <p className="text-amber-700 leading-relaxed text-lg">
              I enjoy creating software solutions that combine practical
              engineering, backend development, and intelligent systems. My
              projects involve IoT automation, AI-powered image classification,
              secure communication systems, and cloud-connected applications.
            </p>
          </div>

          <div className="bg-white border border-amber-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-amber-950">Quick Facts</h3>

            <div className="space-y-4 text-zinc-700">
              <p>• Backend & software engineering focused</p>
              <p>• Experience with Firebase & React Native</p>
              <p>• Built AI and IoT systems</p>
              <p>• Strong collaborative & problem-solving mindset</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-14 tracking-tight text-amber-950">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white rounded-3xl p-6 border border-amber-200 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-6">{category}</h3>

              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-amber-50 border border-amber-100 rounded-full text-sm text-amber-900 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-1.5 w-16 rounded-full bg-amber-500" />
              <span className="text-xs uppercase tracking-[0.3em] text-amber-600 font-semibold">
                Selected work
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-3 text-amber-950">
               Projects
            </h2>
          </div>

          <a
            href="https://github.com/rowbertu"
            className="text-amber-950 font-semibold hover:text-amber-900 transition"
          >
            GitHub Profile →
          </a>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Resume */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-white rounded-3xl p-10 border border-amber-200 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between gap-8 items-start md:items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4 tracking-tight text-amber-950">
                Resume
              </h2>

              <p className="text-amber-700 max-w-2xl">
                Download my resume to learn more about my education,
                technical skills, and software engineering experience.
              </p>
            </div>

            <a
              href="/RobertResume.pdf"
              className="px-8 py-4 bg-amber-600 text-white rounded-2xl font-bold hover:bg-amber-700 hover:scale-105 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center">
          <h2 className="text-5xl font-black mb-6 tracking-tight text-amber-950">
            Let’s Connect
          </h2>

          <p className="text-amber-700 text-lg max-w-2xl mx-auto mb-10">
            I’m currently looking for software development
            opportunities where I can contribute and continue growing as an
            engineer.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:delossantosrobertjr@gmail.com"
              className="px-8 py-4 bg-amber-600 text-white rounded-2xl font-semibold hover:bg-amber-700 hover:scale-105 transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/rowbertu"
              className="px-8 py-4 border border-amber-200 rounded-2xl text-amber-900 hover:bg-amber-100 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-10 text-center text-zinc-500 text-sm">
        © 2026 Robert Delos Santos. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}
