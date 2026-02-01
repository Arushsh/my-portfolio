import { FaGithub, FaLinkedin } from "react-icons/fa"
export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-6 text-center ">
      <p className="text-gray-500 mb-3 text-xl reveal" data-delay="120">CONTACT</p>
      <h2 className="text-3xl font-bold mb-4 reveal" data-delay="150">Let’s work together</h2>
      <p className="text-gray-400 mb-10 font-bold reveal" data-delay="180">Open to freelance projects, internships, full-time roles,<br /> and meaningful collaborations where I can learn, contribute, and build impactful products and share a good environment.</p>

      <div className="bg-white/5 border border-white/10 rounded-xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 reveal" data-delay="120">
  <div className="flex flex-col">
  <h3 className="font-bold text-2xl mb-5">Start a conversation</h3>
  <p className="text-gray-400 text-center md:text-left ">
    Let's connect and build the best experience about your next project.
  </p>
</div>
  {/* Right Side */}
  <div className="flex flex-col items-center gap-4">
    
    <a
      href="mailto:varush395@gmail.com"
      className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 transition box-shadow: 0 0 10px 5px #00bfff; reveal"
      data-delay="210"
    >
      Email Me
    </a>

    {/* Social Icons Row */}
    <div className="flex gap-4 reveal" data-delay="240">
      <a
        href="https://github.com/Arushsh"
        className="px-2 py-2 rounded-full bg-purple-400 hover:bg-purple-300 transition text-black"
      >
        <FaGithub size={15} />
      </a>

      <a
        href="https://www.linkedin.com/in/arush-vishwakarma-675456302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        className="p-2 rounded-full bg-purple-400 hover:bg-purple-300 transition text-black"
      >
        <FaLinkedin size={15} />
      </a>
    </div>

  </div>
</div>


      <p className="mt-15 text-gray-400"> &copy; {new Date().getFullYear()} Arush Vishwakarma. All rights reserved.</p>


    </section>
  )
}
