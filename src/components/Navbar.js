"use client"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        <h1 className="text-lg font-semibold tracking-widest">ARUSH<span className="text-gray-500">VISHWAKARMA</span></h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <Link href="#about" className="hover:text-white hover:underline hover:underline-offset-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400/25 rounded">About</Link>
          <Link href="#skills" className="hover:text-white hover:underline hover:underline-offset-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400/25 rounded">Skills</Link>
          <Link href="#projects" className="hover:text-white hover:underline hover:underline-offset-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400/25 rounded">Projects</Link>
          <Link href="#education" className="hover:text-white hover:underline hover:underline-offset-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400/25 rounded">Education</Link>
          <Link href="#contact" className="hover:text-white hover:underline hover:underline-offset-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400/25 rounded">Contact</Link>
        </div>

        <a
          href="/resume.pdf"
          className="hidden md:block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium transform transition hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400/30"
        >
          Download CV
        </a>
      </div>
    </nav>
  )
}
