export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Let’s work together</h2>
      <p className="text-gray-400 mb-10">Open to internships and collaborations.</p>

      <div className="bg-white/5 border border-white/10 rounded-xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400">Start a conversation about your next project.</p>
        <a href="mailto:yourmail@gmail.com" className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500">
          Email Me
        </a>
      </div>
    </section>
  )
}
  