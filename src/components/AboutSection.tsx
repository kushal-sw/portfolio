import React from "react";
import kushalImg from "./ui/media/kushal.jpg";
import { GitHubCalendar } from 'react-github-calendar';
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube, FaDownload, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import resumeFile from "./ui/media/Kushal Swargam CV.pdf";

const roboto: React.CSSProperties = {
  fontFamily: '"Roboto", sans-serif',
  fontOpticalSizing: "auto" as any,
  fontVariationSettings: '"wdth" 100',
};

const PRIMARY = "#1F3A4B";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full px-6 py-24 md:py-32 bg-transparent"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section title */}
        <p
          style={{
            ...roboto,
            fontWeight: 400,
            color: PRIMARY,
            opacity: 0.5,
            letterSpacing: "0.16em",
            fontSize: "0.8rem",
          }}
          className="uppercase mb-4"
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
            margin: "0 0 4rem 0",
          }}
        >
          About Me
        </h2>

        {/* Two-column layout */}
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
          {/* ── Left: Photo ── */}
          <div className="flex-shrink-0 md:w-[42%]">
            <div
              style={{
                borderRadius: "1.5rem",
                overflow: "hidden",
                border: `2px solid ${PRIMARY}15`,
                boxShadow: `0 24px 64px ${PRIMARY}18`,
              }}
            >
              <img
                src={kushalImg}
                alt="Kushal"
                style={{ display: "block", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* ── Right: Text ── */}
          <div className="flex flex-col justify-center gap-6 md:w-[58%]">
            {/* Main bio */}
            <p
              style={{
                ...roboto,
                fontWeight: 400,
                color: PRIMARY,
                fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
                lineHeight: 1.75,
              }}
            >
              I'm <strong style={{ fontWeight: 700 }}>Kushal</strong> — a CS
              undergrad based in Mumbai, building products that solve some
              purpose in life. I love learning{" "}
              <strong style={{ fontWeight: 700 }}>C++ and DSA</strong>, and I'm
              equally into <strong style={{ fontWeight: 700 }}>React</strong> —
              it brings imagination into real life. These days I'm mostly living
              in AI and software, but I think{" "}
              <strong style={{ fontWeight: 700 }}>quantum computing</strong> is
              where the real shift happens next.
            </p>

            <p
              style={{
                ...roboto,
                fontWeight: 400,
                color: PRIMARY,
                fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
                lineHeight: 1.75,
              }}
            >
              Outside of code, I'm a football fan, I love solving complex
              problems till 3 in the morning, and I genuinely enjoy meeting new
              people and building things together.{" "}
              <span style={{ opacity: 0.6 }}>:)</span>
            </p>

            {/* Socials */}
            <div className="pt-6">
              <h4 style={{ ...roboto, fontWeight: 700, color: PRIMARY, fontSize: "1.1rem", marginBottom: "1rem" }}>
                Socials
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Resume", icon: FaDownload, url: resumeFile, isDownload: true },
                  { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/kushal-swargam-74b597372/" },
                  { name: "Gmail", icon: FaEnvelope, url: "mailto:kushalswargam484@gmail.com" },
                  { name: "GitHub", icon: FaGithub, url: "https://github.com/kushal-sw" },
                  { name: "X", icon: FaXTwitter, url: "https://x.com/kushal_swargam" },
                  { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/kushal._.2007/" },
                  { name: "YouTube", icon: FaYoutube, url: "https://www.youtube.com/@Kushalswargam" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={social.isDownload ? "Kushal_Swargam_CV.pdf" : undefined}
                    className="flex items-center gap-2 transition-transform hover:-translate-y-1 hover:shadow-md duration-300"
                    style={{
                      ...roboto,
                      fontWeight: 500,
                      color: PRIMARY,
                      fontSize: "0.9rem",
                      backgroundColor: "rgba(31, 58, 75, 0.05)",
                      border: `1px solid rgba(31, 58, 75, 0.1)`,
                      borderRadius: "999px",
                      padding: "0.5rem 1.2rem",
                      letterSpacing: "0.02em",
                      textDecoration: "none"
                    }}
                  >
                    <social.icon size={16} />
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* GitHub Contributions */}
        <div className="mt-20 md:mt-32">
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
      </div>
    </section>
  );
}
