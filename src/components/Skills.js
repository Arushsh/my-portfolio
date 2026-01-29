'use client'

import { useState } from "react";

export default function SkillsSection() {
    const [activeTab, setActiveTab] = useState("skills");

    const tabStyle = (tab) =>
        `px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === tab
            ? "bg-red-600 text-white"
            : "bg-white/5 text-gray-400 hover:text-white"
        }`;

    const skills = ["Python", "Django", "JavaScript", "React", "Next.js", "HTML & CSS", "Tailwind", "Git & GitHub", "MySQL", "Android Development"];

    const interests = ["Artificial Intelligence", "Machine Learning", "Web Development", "Mobile App Development", "Open Source Contribution", "Creative Coding", "Designing minimal interfaces", "Learning new frameworks"];

    const tools = ["VS Code", "Git & GitHub", "Postman", "Figma", "MySQL"];

    return (


         <section id="skills" className="py-24 px-6">
      {/* <div className="max-w-7xl mx-auto"> */}
        
        {/* <section id="skills" className="py-24 px-6">
            <h2 className="text-3xl font-bold mb-12 mx-30">What I Work With</h2> */}

          
            <div className="relative group max-w-7xl mx-auto">
                <p className="text-gray-500 mb-3 text-xl">SKILLS & INTERESTS</p>
            <h2 className="text-3xl font-bold mb-14">What I Work With</h2>
                {/* Outer Gradient Shadow */}
                {/* <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-r from-red-600 via-pink-600 to-red-600 opacity-0 blur-xl transition duration-300 group-hover:opacity-70"></div> */}

                {/* Card */}
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">

                    {/* Toggle Buttons */}
                    <div className="flex gap-3 mb-8">
                        <button onClick={() => setActiveTab("skills")} className={tabStyle("skills")}>
                            Skills
                        </button>
                        <button onClick={() => setActiveTab("interests")} className={tabStyle("interests")}>
                            Interests
                        </button>
                        <button onClick={() => setActiveTab("tools")} className={tabStyle("tools")}>
                            Tools
                        </button>
                    </div>

                    {/* Content Area */}
                    <div className="grid gap-4 text-gray-300">
                        {activeTab === "skills" && (
                            <>
                                <div className="flex flex-wrap gap-4 max-w-7xl mx-auto">
                                    {skills.map((skill, i) => (
                                        <span key={i} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </>
                        )}

                        {activeTab === "interests" && (
                            <>
                                <div className="flex flex-wrap gap-4 max-w-7xl mx-auto">
                                    {interests.map((skill, i) => (
                                        <span key={i} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </>
                        )}

                        {activeTab === "tools" && (
                            <>
                                <div className="flex flex-wrap gap-4 max-w-7xl">
                                    {tools.map((skill, i) => (
                                        <span key={i} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
