"use client";

import { useScroll } from "framer-motion";
import React, { useRef, useEffect } from "react";
import kushalImg from "../media/kushal.jpg";
import { GitHubCalendar } from 'react-github-calendar';
import { 
  SiCplusplus, SiPython, SiJavascript, SiReact, SiVite, 
  SiTailwindcss, SiFastapi, SiSqlite, SiGithub, SiVercel, 
  SiRailway, SiSupabase, SiFirebase, SiGoogle,
  SiCanva, SiXcode
} from "react-icons/si";
import { FaDatabase, FaCode, FaProjectDiagram, FaRobot, FaAtom, FaChartBar, FaVideo, FaPenNib } from "react-icons/fa";

const roboto: React.CSSProperties = {
  fontFamily: '"Roboto", sans-serif',
  fontOpticalSizing: "auto" as any,
  fontVariationSettings: '"wdth" 100',
};

const PRIMARY = "#1F3A4B";

const Skiper19 = ({ children }: { children?: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  return (
    <section
      ref={ref}
      className="relative mx-auto flex w-screen flex-col items-center bg-[#FAFDEE] px-4 text-[#1F3A4B] overflow-hidden"
    >
      {/* ── Hero text block ── */}
      <div className="relative flex flex-col items-center justify-center gap-5 pt-32 pb-4 text-center">
        {/* ── SVG stroke — overflows hero to span the full page ── */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 overflow-visible" style={{ zIndex: 0 }}>
          <LinePath className="ml-[25%]" />
        </div>
        {/* Headline */}
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

        {/* Sub-line */}
        <p
          style={{
            ...roboto,
            fontWeight: 700,
            color: PRIMARY,
            fontSize: "clamp(1.25rem, 3vw, 2.5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
          className="max-w-3xl"
        >
          Software Developer crafting products with{" "}
          Python, C++ &amp; React
        </p>

        {/* Scroll CTA */}
        <p
          style={{ ...roboto, fontWeight: 500, color: PRIMARY, opacity: 0.45 }}
          className="mt-2 text-sm"
        >
          Scroll to see the work ↓
        </p>
      </div>

      {/* ── About Me ── */}
      <div
        id="about"
        className="relative z-10 w-full px-6 pt-8 pb-24 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          {/* Section label + heading */}
          <p
            style={{
              ...roboto,
              fontWeight: 400,
              color: PRIMARY,
              opacity: 0.5,
              letterSpacing: "0.16em",
              fontSize: "0.75rem",
              marginBottom: "0.75rem",
            }}
            className="uppercase"
          >
            Who I am
          </p>
          <h2
            style={{
              ...roboto,
              fontWeight: 800,
              color: PRIMARY,
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              letterSpacing: "-0.05em",
              lineHeight: 1.0,
              margin: "0 0 3.5rem 0",
            }}
          >
            About Me
          </h2>

          {/* Two-column layout */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
            {/* Photo */}
            <div className="flex-shrink-0 lg:w-[40%]">
              <div
                style={{
                  borderRadius: "1.25rem",
                  overflow: "hidden",
                  border: "2px solid #1F3A4B18",
                  boxShadow: "0 20px 60px #1F3A4B18",
                }}
              >
                <img
                  src={kushalImg}
                  alt="Kushal"
                  style={{ display: "block", width: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center gap-6 lg:w-[60%]">
              <p
                style={{
                  ...roboto,
                  fontWeight: 400,
                  color: PRIMARY,
                  fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                  lineHeight: 1.8,
                }}
              >
                I'm <strong style={{ fontWeight: 700 }}>Kushal</strong> — a CS
                undergrad based in Mumbai, building products that solve some
                purpose in life. I love learning{" "}
                <strong style={{ fontWeight: 700 }}>C++ and DSA</strong>, and I'm
                equally into{" "}
                <strong style={{ fontWeight: 700 }}>React</strong> — it brings
                imagination into real life. These days I'm mostly living in AI
                and software, but I think{" "}
                <strong style={{ fontWeight: 700 }}>quantum computing</strong> is
                where the real shift happens next.
              </p>
              <p
                style={{
                  ...roboto,
                  fontWeight: 400,
                  color: PRIMARY,
                  fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                  lineHeight: 1.8,
                }}
              >
                Outside of code, I'm a football fan, I love solving complex
                problems till 3 in the morning, and I genuinely enjoy meeting new
                people and building things together.{" "}
                <span style={{ opacity: 0.55 }}>:)</span>
              </p>


            </div>
          </div>
          {/* Skills & Tech Stack */}
          <div className="mt-20 lg:mt-32 relative z-20">
            <h3
              style={{
                ...roboto,
                fontWeight: 700,
                color: PRIMARY,
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                marginBottom: "3rem",
                textAlign: "center"
              }}
            >
              Skills & Tech Stack
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="bg-white/40 backdrop-blur-md p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#1F3A4B10] flex flex-col gap-4"
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
            </div>
          </div>

          {/* GitHub Contributions */}
          <div className="mt-20 lg:mt-32 relative z-20 flex flex-col items-center">
            <h3
              style={{
                ...roboto,
                fontWeight: 700,
                color: PRIMARY,
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                marginBottom: "2rem",
                textAlign: "center"
              }}
            >
              My Contributions
            </h3>
            <div className="flex justify-center w-fit mx-auto overflow-hidden bg-[#0d1117] text-[#c9d1d9] p-6 rounded-2xl shadow-xl border border-[#30363d]">
              <GitHubCalendar 
                username="kushal-sw" 
                colorScheme="dark"
                theme={{
                  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
                }}
              />
            </div>
          </div>

          {/* Projects */}
          <div className="mt-20 lg:mt-32 relative z-20">
            <h3
              style={{
                ...roboto,
                fontWeight: 700,
                color: PRIMARY,
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                marginBottom: "3rem",
                textAlign: "center"
              }}
            >
              Projects
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((num) => (
                <div 
                  key={num}
                  className="bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#1F3A4B10] flex flex-col gap-4 min-h-[300px] transition-transform hover:-translate-y-1 duration-300"
                >
                  <div className="h-40 bg-[#1F3A4B08] rounded-xl flex items-center justify-center border border-[#1F3A4B10]">
                    <span style={{ ...roboto, color: PRIMARY, opacity: 0.4, fontWeight: 500 }}>
                      Image Placeholder
                    </span>
                  </div>
                  <h4 style={{ ...roboto, fontWeight: 700, color: PRIMARY, fontSize: "1.3rem", marginTop: "0.5rem" }}>
                    Project {num}
                  </h4>
                  <p style={{ ...roboto, color: PRIMARY, opacity: 0.7, fontSize: "0.95rem", lineHeight: 1.6 }}>
                    Waiting for project data...
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-20 lg:mt-32 relative z-20 flex flex-col items-center pb-20">
            <h3
              style={{
                ...roboto,
                fontWeight: 700,
                color: PRIMARY,
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                marginBottom: "3rem",
                textAlign: "center"
              }}
            >
              Education
            </h3>
            
            <div className="w-full max-w-3xl bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#1F3A4B10] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-transform hover:-translate-y-1 duration-300">
              <div>
                <h4 style={{ ...roboto, fontWeight: 800, color: PRIMARY, fontSize: "1.4rem" }}>
                  ITM Skills University
                </h4>
                <p style={{ ...roboto, fontWeight: 500, color: PRIMARY, opacity: 0.8, fontSize: "1rem", marginTop: "0.25rem" }}>
                  Navi Mumbai
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <span
                    style={{
                      ...roboto,
                      fontWeight: 700,
                      color: PRIMARY,
                      fontSize: "0.9rem",
                      backgroundColor: "#1F3A4B15",
                      borderRadius: "8px",
                      padding: "0.4rem 1rem",
                    }}
                  >
                    B.Tech in Computer Science Engineering (CSE)
                  </span>
                </div>
              </div>
              
              <div className="text-left md:text-right mt-2 md:mt-0">
                <p style={{ ...roboto, fontWeight: 700, color: PRIMARY, fontSize: "1.1rem" }}>
                  Expected Graduation
                </p>
                <p style={{ ...roboto, fontWeight: 500, color: PRIMARY, opacity: 0.6, fontSize: "1.05rem", marginTop: "0.25rem" }}>
                  Class of 2029
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Skiper19 };

const LinePath = ({ className }: { className?: string }) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const totalLength = path.getTotalLength();
    path.style.strokeDasharray = `${totalLength}`;
    path.style.strokeDashoffset = `${totalLength * 0.5}`;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
      // Map progress [0,1] → dashoffset [totalLength*0.5, 0]
      const offset = totalLength * 0.5 * (1 - progress);
      path.style.strokeDashoffset = `${offset}`;
    };

    handleScroll(); // set initial state
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <svg
      width="1278"
      height="6500"
      viewBox="0 0 1278 6500"
      fill="none"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        ref={pathRef}
        d="M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89C100 2850 1230 2800 1180 3050C1260 3200 50 3100 80 3350C20 3500 1250 3450 1200 3700C1270 3850 60 3800 40 4050C-30 4200 1240 4150 1180 4400C1260 4550 100 4500 120 4750C60 4900 1200 4850 1100 5100C980 5350 200 5250 250 5500C320 5750 1100 5650 950 5900C780 6150 350 6050 450 6300C560 6420 620 6400 639 6500"
        stroke="#C2F84F"
        strokeWidth="20"
        fill="none"
      />
    </svg>
  );
};

/**
 * Skiper 19 — React + framer motion
 * Personalized for Kushal's portfolio.
 * Original inspiration: https://comgio.ai/
 * Component base from: https://skiperui.com
 */
