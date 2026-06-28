"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";
import { 
  SiCplusplus, SiPython, SiJavascript, SiReact, SiVite, 
  SiTailwindcss, SiFastapi, SiSqlite, SiGithub, SiVercel, 
  SiRailway, SiSupabase, SiFirebase, SiGoogle,
  SiCanva, SiXcode
} from "react-icons/si";
import { FaDatabase, FaCode, FaProjectDiagram, FaRobot, FaAtom, FaChartBar, FaVideo, FaPenNib, FaArrowRight, FaArrowLeft, FaGraduationCap, FaEnvelope } from "react-icons/fa";
import { Carousel_003 } from "./skiper49";
import { Link001 } from "./skiper40";
// import forkCastVid from "../media/1782572789363541.mp4";
// import auraVid from "../media/ai companion.mp4";
// import devdnaVid from "../media/devdna.mov";

const roboto: React.CSSProperties = {
  fontFamily: '"Roboto", sans-serif',
  fontOpticalSizing: "auto" as any,
  fontVariationSettings: '"wdth" 100',
};

const PRIMARY = "#1F3A4B";

const Skipper22 = ({ children }: { children?: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  
  const [activeSection, setActiveSection] = useState<"skills" | "education" | "projects" | "reachout">("skills");

  const sections = ["skills", "projects", "education", "reachout"];
  const currentIndex = sections.indexOf(activeSection);
  
  const handlePrev = () => {
    if (currentIndex > 0) setActiveSection(sections[currentIndex - 1] as any);
  };
  
  const handleNext = () => {
    if (currentIndex < sections.length - 1) setActiveSection(sections[currentIndex + 1] as any);
  };

  const getSectionTitle = (section: string) => {
    switch (section) {
      case "skills": return "Skills & Tech Stack";
      case "education": return "Education";
      case "projects": return "Projects";
      case "reachout": return "Reach Out";
      default: return "";
    }
  };

  return (
    <section
      ref={ref}
      className="mx-auto flex h-[350vh] w-screen flex-col items-center justify-evenly overflow-hidden bg-[#FAFDEE] px-4 py-20 text-[#1F3A4B]"
    >
      <div className="relative flex w-fit flex-col items-center justify-center gap-5 text-center z-10">
        <h1
          style={{
            ...roboto,
            fontWeight: 800,
            color: PRIMARY,
            fontSize: "clamp(3rem, 9vw, 9rem)",
            letterSpacing: "-0.06em",
            lineHeight: 1.0,
            margin: 0,
          }}
          className="relative z-10"
        >
          Hi, I'm <br />
          <span className="relative inline-block">
            Kushal
            <svg
              aria-hidden="true"
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 8"
              fill="none"
            >
              <path
                d="M2 6 C50 2, 150 2, 198 6"
                stroke={PRIMARY}
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>
        <p
          style={{
            ...roboto,
            fontWeight: 700,
            color: PRIMARY,
            fontSize: "clamp(1.25rem, 3vw, 2.5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
          className="relative z-10 max-w-3xl"
        >
          Software Developer crafting products with{" "}
          Python, C++ &amp; React
        </p>
        <p
          style={{ ...roboto, fontWeight: 500, color: PRIMARY, opacity: 0.45 }}
          className="relative z-10 mt-2 text-sm"
        >
          Scroll to see the work ↓
        </p>

        <LinePath
          className="absolute -right-[40%] top-0 z-0"
          scrollYProgress={scrollYProgress}
        />
      </div>

      <div className="relative z-20 w-full max-w-6xl">
        {children}
      </div>

      <div className="relative z-20 w-full max-w-6xl">
        <div>
          <div className="flex items-center justify-center gap-6 mb-12">
            {currentIndex > 0 ? (
              <button 
                onClick={handlePrev}
                className="p-3 rounded-full hover:bg-black/5 transition-colors cursor-pointer"
                aria-label="Previous Section"
              >
                <FaArrowLeft className="text-xl" style={{ color: PRIMARY }} />
              </button>
            ) : (
              <div className="w-[44px]"></div>
            )}
            
            <h3
              style={{
                ...roboto,
                fontWeight: 700,
                color: PRIMARY,
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                margin: 0,
                textAlign: "center",
                minWidth: "300px"
              }}
            >
              {getSectionTitle(activeSection)}
            </h3>
            
            {currentIndex < sections.length - 1 ? (
              <button 
                onClick={handleNext}
                className="p-3 rounded-full hover:bg-black/5 transition-colors cursor-pointer"
                aria-label="Next Section"
              >
                <FaArrowRight className="text-xl" style={{ color: PRIMARY }} />
              </button>
            ) : (
              <div className="w-[44px]"></div>
            )}
          </div>
          
          <div className="relative overflow-visible min-h-[300px]">
            <AnimatePresence mode="wait">
              {activeSection === "skills" && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {[
                    {
                      title: "Languages",
                      skills: [
                        { name: "C++", icon: SiCplusplus }, 
                        { name: "Python", icon: SiPython }, 
                        { name: "JavaScript", icon: SiJavascript }, 
                        { name: "SQL", icon: FaDatabase }
                      ]
                    },
                    {
                      title: "Frontend",
                      skills: [
                        { name: "React", icon: SiReact }, 
                        { name: "Vite", icon: SiVite }, 
                        { name: "Tailwind CSS", icon: SiTailwindcss }, 
                        { name: "shadcn/ui", icon: FaCode }, 
                        { name: "Recharts", icon: FaChartBar }, 
                        { name: "React Flow", icon: FaProjectDiagram }
                      ]
                    },
                    {
                      title: "Backend & AI",
                      skills: [
                        { name: "FastAPI", icon: SiFastapi }, 
                        { name: "Gemini API", icon: SiGoogle }, 
                        { name: "ChromaDB", icon: FaDatabase }, 
                        { name: "Ollama", icon: FaRobot }, 
                        { name: "SQLite", icon: SiSqlite }, 
                        { name: "PyMuPDF", icon: FaCode }
                      ]
                    },
                    {
                      title: "Tools & Platforms",
                      skills: [
                        { name: "Git/GitHub", icon: SiGithub }, 
                        { name: "Vercel", icon: SiVercel }, 
                        { name: "Railway", icon: SiRailway }, 
                        { name: "Supabase", icon: SiSupabase }, 
                        { name: "Firebase", icon: SiFirebase },
                        { name: "Xcode", icon: SiXcode }
                      ]
                    },
                    {
                      title: "Currently exploring",
                      skills: [
                        { name: "Local-first AI tooling", icon: FaRobot }, 
                        { name: "Quantum computing fundamentals", icon: FaAtom }
                      ]
                    },
                    {
                      title: "Creative Tools",
                      skills: [
                        { name: "Canva", icon: SiCanva },
                        { name: "Adobe AE", icon: FaVideo },
                        { name: "Final Cut Pro", icon: FaVideo },
                        { name: "Adobe Illustrator", icon: FaPenNib }
                      ]
                    }
                  ].map((category, idx) => (
                    <div 
                      key={idx}
                      className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#1F3A4B10] flex flex-col gap-4"
                    >
                      <h4 style={{ ...roboto, fontWeight: 700, color: PRIMARY, fontSize: "1.1rem" }}>
                        {category.title}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill.name}
                            style={{
                              ...roboto,
                              fontWeight: 500,
                              color: PRIMARY,
                              fontSize: "0.85rem",
                              backgroundColor: "#1F3A4B08",
                              borderRadius: "8px",
                              padding: "0.4rem 0.8rem",
                              display: "flex",
                              alignItems: "center",
                              gap: "0.4rem"
                            }}
                          >
                            <skill.icon className="text-lg opacity-80" />
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeSection === "education" && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center max-w-2xl mx-auto w-full"
                >
                  {[
                    {
                      degree: "BTech CSE",
                      university: "ITM Skills University",
                      year: "2025 - 2029",
                      details: "Navi Mumbai",
                      link: "https://isu.ac.in/btech-cse/"
                    }
                  ].map((edu, idx) => (
                    <div 
                      key={idx}
                      className="w-full bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#1F3A4B10] flex flex-col gap-3"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 rounded-xl bg-[#1F3A4B08]">
                          <FaGraduationCap className="text-2xl opacity-80" style={{ color: PRIMARY }} />
                        </div>
                        <h4 style={{ ...roboto, fontWeight: 700, color: PRIMARY, fontSize: "1.3rem" }}>
                          {edu.degree}
                        </h4>
                      </div>
                      
                      {edu.link ? (
                        <Link001
                          href={edu.link}
                          className="w-fit"
                        >
                          <span style={{ ...roboto, fontWeight: 500, color: PRIMARY, fontSize: "1.05rem" }}>
                            {edu.university}
                          </span>
                        </Link001>
                      ) : (
                        <p style={{ ...roboto, fontWeight: 500, color: PRIMARY, fontSize: "1.05rem" }}>
                          {edu.university}
                        </p>
                      )}
                      
                      <p style={{ ...roboto, fontWeight: 400, color: PRIMARY, opacity: 0.7, fontSize: "0.9rem" }}>
                        {edu.year}
                      </p>
                      <p style={{ ...roboto, fontWeight: 400, color: PRIMARY, opacity: 0.8, fontSize: "0.95rem", marginTop: "0.5rem", lineHeight: 1.6 }}>
                        {edu.details}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeSection === "projects" && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-6xl mx-auto flex justify-center"
                >
                  <Carousel_003 
                    showNavigation={true}
                    showPagination={true}
                    autoplay={false}
                    loop={false}
                    items={[
                      {
                        title: "ForkCast",
                        video: "https://res.cloudinary.com/dp1ezxjle/video/upload/v1782612894/compresed_forckast_fsrmxn.mp4",
                        description: 'A full-stack recipe discovery platform that turns "what can I cook with what I have" into a real answer — built with React, Firebase Auth, and Supabase, powered by the Spoonacular API.',
                        link: "https://react-mini-project-livid.vercel.app/",
                        github: "https://github.com/kushal-sw/Fork-cast"
                      },
                      {
                        title: "DevDNA",
                        video: "https://player.cloudinary.com/embed/?cloud_name=dp1ezxjle&public_id=Screen_Recording_2026-06-28_at_12.35.54_AM_x4hfu6&autoplay=true&loop=true&muted=true&controls=false",
                        description: "Local-first AI coding assistant that learns your codebase. A CLI-based coding assistant built in Python that runs entirely on-device using Ollama, with ChromaDB for semantic code search and Tree-sitter for syntax-aware parsing. No API calls, no data leaving your machine.",
                        link: null,
                        github: "https://github.com/kushal-sw/dev-dna"
                      },
                      {
                        title: "Aura",
                        video: "https://res.cloudinary.com/dp1ezxjle/video/upload/v1782612321/1782587856931377_xyzppw.mp4",
                        description: "A local AI companion with a voice and a face. A desktop AI companion app built with Electron, React, and Three.js, running entirely offline. Uses a local LLM for conversation, Whisper for speech recognition, and Coqui XTTS-v2 for voice synthesis.",
                        link: null,
                        github: "https://github.com/kushal-sw/ai-companion"
                      }
                    ].map((project, idx) => (
                      <div 
                        key={idx}
                        className="h-full w-full bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#1F3A4B10] flex flex-col gap-4 justify-between"
                      >
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-3">
                            <div className="p-3 rounded-xl bg-[#1F3A4B08]">
                              <FaProjectDiagram className="text-2xl opacity-80" style={{ color: PRIMARY }} />
                            </div>
                            <h4 style={{ ...roboto, fontWeight: 700, color: PRIMARY, fontSize: "1.5rem" }}>
                              {project.title}
                            </h4>
                          </div>
                          
                          <div className="w-full aspect-video rounded-xl overflow-hidden border border-[#1F3A4B10] bg-[#1F3A4B05]">
                            {project.video ? (
                              project.video.includes("cloudinary.com/embed") ? (
                                <iframe 
                                  src={project.video} 
                                  className="w-full h-full border-none pointer-events-none"
                                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                                  allowFullScreen
                                ></iframe>
                              ) : (
                                <video src={project.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                              )
                            ) : (
                              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            )}
                          </div>

                          <p style={{ ...roboto, fontWeight: 400, color: PRIMARY, opacity: 0.8, fontSize: "1.05rem", lineHeight: 1.6 }}>
                            {project.description}
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-6 mt-2">
                          {project.link && project.link !== "#" && (
                            <Link001
                              href={project.link}
                              className="w-fit inline-flex items-center gap-1"
                            >
                              <span style={{ ...roboto, fontWeight: 600, color: PRIMARY, fontSize: "1rem" }}>
                                Live Site
                              </span>
                            </Link001>
                          )}
                          
                          {project.github && (
                            <Link001
                              href={project.github}
                              className="w-fit inline-flex items-center gap-1"
                            >
                              <span style={{ ...roboto, fontWeight: 600, color: PRIMARY, fontSize: "1rem" }}>
                                GitHub
                              </span>
                            </Link001>
                          )}

                          {(!project.link || project.link === "#") && !project.github && (
                            <Link001
                              href="#"
                              className="w-fit inline-flex items-center gap-1"
                            >
                              <span style={{ ...roboto, fontWeight: 600, color: PRIMARY, fontSize: "1rem" }}>
                                View Project
                              </span>
                            </Link001>
                          )}
                        </div>
                      </div>
                    ))}
                  />
                </motion.div>
              )}

              {activeSection === "reachout" && (
                <motion.div
                  key="reachout"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center max-w-2xl mx-auto w-full"
                >
                  <div className="w-full bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#1F3A4B10] flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-[#1F3A4B08]">
                        <FaEnvelope className="text-2xl opacity-80" style={{ color: PRIMARY }} />
                      </div>
                      <div>
                        <h4 style={{ ...roboto, fontWeight: 700, color: PRIMARY, fontSize: "1.5rem" }}>
                          Get in Touch
                        </h4>
                        <p style={{ ...roboto, fontWeight: 400, color: PRIMARY, opacity: 0.7, fontSize: "0.95rem" }}>
                          I'd love to hear from you. Drop a message!
                        </p>
                        <a href="mailto:kushalswargam484@gmail.com" style={{ ...roboto, fontWeight: 600, color: PRIMARY, fontSize: "1rem", textDecoration: "underline", marginTop: "0.5rem", display: "inline-block" }}>
                          kushalswargam484@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                      <div className="flex flex-col gap-1.5">
                        <label style={{ ...roboto, fontWeight: 600, color: PRIMARY, fontSize: "0.9rem" }} htmlFor="email">
                          Email Address
                        </label>
                        <input 
                          type="email" 
                          id="email"
                          placeholder="hello@example.com"
                          className="w-full bg-[#1F3A4B08] border border-[#1F3A4B10] text-[#1F3A4B] p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F3A4B50] transition-shadow"
                          style={{ ...roboto, fontWeight: 500 }}
                        />
                      </div>
                      
                      <div className="flex flex-col gap-1.5">
                        <label style={{ ...roboto, fontWeight: 600, color: PRIMARY, fontSize: "0.9rem" }} htmlFor="message">
                          Message
                        </label>
                        <textarea 
                          id="message"
                          placeholder="Hey Kushal, I'd like to talk about..."
                          className="w-full bg-[#1F3A4B08] border border-[#1F3A4B10] text-[#1F3A4B] p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F3A4B50] transition-shadow resize-none h-32"
                          style={{ ...roboto, fontWeight: 500 }}
                        />
                      </div>

                      <button 
                        type="submit"
                        className="mt-2 w-full p-4 rounded-xl text-white font-bold tracking-wide transition-opacity opacity-90 hover:opacity-100"
                        style={{ ...roboto, backgroundColor: PRIMARY, fontSize: "1.05rem" }}
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Skipper22 };

const LinePath = ({
  className,
  scrollYProgress,
}: {
  className: string;
  scrollYProgress: any;
}) => {
  const pathLength = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <svg
      width="1278"
      height="2319"
      viewBox="0 0 1278 2319"
      fill="none"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d="M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89"
        stroke="#C2F84F"
        strokeWidth="20"
        style={{
          pathLength,
          strokeDashoffset: useTransform(pathLength, (value) => 1 - value),
        }}
      />
    </svg>
  );
};

/**
 * Skiper 19 — React + framer motion
 * Inspired by and adapted from https://comgio.ai/
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 * These animations aren’t associated with the comgio.ai . They’re independent recreations meant to study interaction design
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.me
 * Twitter: https://x.com/Gur__vi
 */
