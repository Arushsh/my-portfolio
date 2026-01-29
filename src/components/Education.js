import { FaGithub } from "react-icons/fa"

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-500 mb-3 text-xl">EDUCATION</p>
        <h2 className="text-3xl font-bold mb-14">Where I'm learning</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-center">Bachelor of Technology in CSE</h3>
            <p className="text-gray-400">
              <span className="font-semibold">Institution</span> : Shambhunath Institute of Engineering and Technology
            </p>
            <p className="text-gray-400">
              <span className="font-semibold">Location</span>: Prayagraj, India
            </p>
            <p className="text-gray-400">
              <span className="font-semibold">Affiliation</span> : AKTU University 
            </p>
            <p className="text-gray-400">
              <span className="font-semibold">Year</span>: 2025 – Present
            </p>
            <p className="text-gray-400">
              Focused on core programming, software development, databases, and modern web technologies.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-center">Diploma in CSE</h3> 
            <p className="text-gray-400"><span className="font-semibold">Institution</span>: Mahamaya Polytechnic of Information & Technology</p>
             <p className="text-gray-400">
              <span className="font-semibold">Location</span>: Chandauli, India
            </p>
            <p className="text-gray-400"><span className="font-semibold">Affiliation</span>: BTEUP Lucknow</p>
            <p className="text-gray-400"><span className="font-semibold">Year</span>: 2022 – 2025</p>
            <p className="text-gray-400">Core programming | Software development | Databases | Modern web technologies</p>
          </div>
        </div>

      </div>
    </section>
  )
}
