export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <span className="text-sm text-purple-400 tracking-widest">PORTFOLIO • 2026</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
            Hi, I'm <span className="text-purple-400">Arush Vishwakarma</span>.<br />
            I build modern digital experiences.
          </h1>
          <p className="mt-6 text-gray-400 max-w-xl">
            I build ideas into real products — from web and mobile apps to clean UI/UX.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#projects" className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500">View Projects</a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10">Contact Me</a>
          </div>

          <div className="mt-10 flex gap-6 text-sm text-gray-400">
            <div className=" rounded-full border border-white/20 hover:bg-white/10 px-5 py-1"><span className="block text-gray-500">Experience</span> Fresher</div>
            <div className=" rounded-full border border-white/20 hover:bg-white/10 px-5 py-1"><span className="block text-gray-500">Speciality</span> Web & App Dev</div>
            <div className=" rounded-full border border-white/20 hover:bg-white/10 px-5 py-1"><span className="block text-gray-500 ">Location</span> India</div>
          </div>
        </div>

        {/* Glass Info Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl max-w-sm mx-auto hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition duration-300">

          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center font-bold text-blue-900 shadow-md">
            AV
          </div>


          <h3 className="text-sm text-gray-400">Role</h3>
          <p className="text-xl font-semibold mt-2">Backend Developer, Vibe Coder,<br /> focused interfaces.</p>
          <hr className="text-gray-400 my-3 " />
          <div className="flex justify-between mt-8 text-sm text-gray-400">
            <span>Projects<br /><strong className="text-white text-lg">10+</strong></span>
            <span>Learning<br /><strong className="text-white text-lg">2+ yrs</strong></span>
          </div>
        </div>

      </div>
    </section>
  )
}
