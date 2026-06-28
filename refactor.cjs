const fs = require('fs');
const file = fs.readFileSync('src/components/ui/skiper-ui/skipper22.tsx', 'utf8');

const skillsMatch = file.match(/{activeSection === "skills" && \(\s*<motion\.div[\s\S]*?className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\s*([^]*?)\s*<\/motion\.div>\s*\)}/);
const eduMatch = file.match(/{activeSection === "education" && \(\s*<motion\.div[\s\S]*?className="flex justify-center max-w-2xl mx-auto w-full">\s*([^]*?)\s*<\/motion\.div>\s*\)}/);
const projMatch = file.match(/{activeSection === "projects" && \(\s*<motion\.div[\s\S]*?className="w-full max-w-6xl mx-auto flex justify-center">\s*([^]*?)\s*<\/motion\.div>\s*\)}/);
const reachMatch = file.match(/{activeSection === "reachout" && \(\s*<motion\.div[\s\S]*?className="flex justify-center max-w-2xl mx-auto w-full">\s*([^]*?)\s*<\/motion\.div>\s*\)}/);

const skillsContent = skillsMatch ? `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full">\n` + skillsMatch[1] + `\n</div>` : "";
const eduContent = eduMatch ? `<div className="flex justify-center max-w-2xl mx-auto w-full">\n` + eduMatch[1] + `\n</div>` : "";
let projContent = projMatch ? `<div className="w-full max-w-6xl mx-auto flex justify-center h-full">\n` + projMatch[1] + `\n</div>` : "";
const reachContent = reachMatch ? `<div className="flex justify-center max-w-2xl mx-auto w-full">\n` + reachMatch[1] + `\n</div>` : "";

// Fix the URLs in projContent that were lost
projContent = projContent
  .replace('video: devdnaVid,', 'video: "https://player.cloudinary.com/embed/?cloud_name=dp1ezxjle&public_id=Screen_Recording_2026-06-28_at_12.35.54_AM_x4hfu6&autoplay=true&loop=true&muted=true&controls=false",')
  .replace('video: auraVid,', 'video: "https://res.cloudinary.com/dp1ezxjle/video/upload/v1782612321/1782587856931377_xyzppw.mp4",')
  .replace('video: forkCastVid,', 'video: "https://res.cloudinary.com/dp1ezxjle/video/upload/v1782612894/compresed_forckast_fsrmxn.mp4",');

// Fix the iframe rendering in projContent
projContent = projContent.replace(
  '<video src={project.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />',
  `{project.video.includes("cloudinary.com/embed") ? (
                                <iframe 
                                  src={project.video} 
                                  className="w-full h-full border-none pointer-events-none"
                                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                                  allowFullScreen
                                ></iframe>
                              ) : (
                                <video src={project.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                              )}`
);

const topPart = file.substring(0, file.indexOf('const Skipper22'));
const bottomPart = file.substring(file.indexOf('const LinePath'));

const newComponent = `
import { Skiper16 } from "./skiper16";

const Skipper22 = ({ children }: { children?: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const portfolioItems = [
    {
      id: "skills",
      content: (
        <div className="flex flex-col gap-8 w-full h-full">
           <h3 style={{...roboto, fontWeight: 700, color: PRIMARY, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", margin: 0, textAlign: "center"}}>Skills & Tech Stack</h3>
           ${skillsContent}
        </div>
      )
    },
    {
      id: "projects",
      content: (
        <div className="flex flex-col gap-8 w-full h-full overflow-hidden">
           <h3 style={{...roboto, fontWeight: 700, color: PRIMARY, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", margin: 0, textAlign: "center"}}>Projects</h3>
           ${projContent}
        </div>
      )
    },
    {
      id: "education",
      content: (
        <div className="flex flex-col gap-8 w-full h-full">
           <h3 style={{...roboto, fontWeight: 700, color: PRIMARY, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", margin: 0, textAlign: "center"}}>Education</h3>
           ${eduContent}
        </div>
      )
    },
    {
      id: "reachout",
      content: (
        <div className="flex flex-col gap-8 w-full h-full">
           <h3 style={{...roboto, fontWeight: 700, color: PRIMARY, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", margin: 0, textAlign: "center"}}>Reach Out</h3>
           ${reachContent}
        </div>
      )
    }
  ];

  return (
    <section
      ref={ref}
      className="mx-auto flex w-screen flex-col items-center justify-start overflow-hidden bg-[#FAFDEE] px-4 py-20 text-[#1F3A4B] min-h-[350vh] relative"
    >
      <div className="relative flex w-fit flex-col items-center justify-center gap-5 text-center z-10 min-h-screen">
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

      <div className="relative z-20 w-full max-w-6xl mt-12 mb-24">
        {children}
      </div>

      <div className="relative z-20 w-full">
        <Skiper16 items={portfolioItems} />
      </div>
    </section>
  );
};

`;

fs.writeFileSync('src/components/ui/skiper-ui/skipper22.tsx', topPart + newComponent + bottomPart);
console.log("Refactoring complete");
