export default function About() {
  return (

     <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-500 mb-3 text-xl">ABOUT</p>
      <h2 className="text-3xl font-bold mb-14">A quick intro</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="font-semibold mb-3">Who I am</h3>
          <p className="text-gray-400">
            I’m a developer who enjoys building real-world digital products across web, mobile apps, and UI/UX. I’m driven by curiosity, clean design, and the challenge of turning ideas into smooth, usable experiences. I believe good code should not just work — it should feel right.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="font-semibold mb-3">What I enjoy</h3>
          <p className="text-gray-400">
            Creating things from scratch, experimenting with ideas, refining UI/UX,
            and shipping projects that feel good to use.
          </p>
        </div>
      </div>
      </div>
    </section>
  )
}
