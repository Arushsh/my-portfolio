import React, { useState } from "react";
import { Fade, Slide, Stagger } from "reactbits";

function SkillsSection() {
  const [activeTab, setActiveTab] = useState("skills");

  const skills = ["Java", "Python", "JavaScript", "DBMS", "DSA", "Web Dev"];
  const interests = ["AI/ML", "Open Source", "UI/UX", "System Design", "Blogging"];
  const tools = ["VS Code", "Git", "GitHub", "Postman", "Figma", "MongoDB"];

  const tabStyle = (tab) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition ${
      activeTab === tab
        ? "bg-red-600 text-white"
        : "bg-white/5 text-gray-400 hover:text-white"
    }`;

  return (
    <section id="skills" className="py-24 px-6">
      <h2 className="text-3xl font-bold mb-12">What I Work With</h2>

      <Fade duration={0.6}>
        <Slide direction="up" distance={30}>
          <div className="relative group max-w-5xl mx-auto">
            <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-r from-red-600 via-pink-600 to-red-600 opacity-0 blur-xl transition duration-300 group-hover:opacity-70"></div>

            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              
              {/* Tabs */}
              <Stagger delay={0.1}>
                <div className="flex gap-3 mb-8">
                  <button onClick={() => setActiveTab("skills")} className={tabStyle("skills")}>Skills</button>
                  <button onClick={() => setActiveTab("interests")} className={tabStyle("interests")}>Interests</button>
                  <button onClick={() => setActiveTab("tools")} className={tabStyle("tools")}>Tools</button>
                </div>
              </Stagger>

              {/* Content */}
              <Fade key={activeTab} duration={0.4}>
                <Stagger delay={0.08}>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
                    {(activeTab === "skills" ? skills :
                      activeTab === "interests" ? interests : tools
                    ).map((item) => (
                      <Fade key={item}>
                        <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-center hover:border-red-500 hover:text-red-400 transition">
                          {item}
                        </div>
                      </Fade>
                    ))}
                  </div>
                </Stagger>
              </Fade>

            </div>
          </div>
        </Slide>
      </Fade>
    </section>
  );
}

export default SkillsSection;
