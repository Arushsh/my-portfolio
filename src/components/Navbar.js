"use client"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        <h1 className="text-lg font-semibold tracking-widest">ARUSH<span className="text-gray-500">VISHWAKARMA</span></h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#education">Education</Link>
          <Link href="#contact">Contact</Link>
        </div>

        <a
          href="/resume.pdf"
          className="hidden md:block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium"
        >
          Download CV
        </a>
      </div>
    </nav>
  )
}
