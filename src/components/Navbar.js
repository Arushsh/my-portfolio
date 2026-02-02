"use client"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const NavLinks = ({ onClick }) => (
    <>
      <Link href="#about" onClick={onClick} className="block py-3 px-4 hover:text-white hover:underline hover:underline-offset-4 transition-colors duration-200 focus:outline-none">About</Link>
      <Link href="#skills" onClick={onClick} className="block py-3 px-4 hover:text-white hover:underline hover:underline-offset-4 transition-colors duration-200 focus:outline-none">Skills</Link>
      <Link href="#projects" onClick={onClick} className="block py-3 px-4 hover:text-white hover:underline hover:underline-offset-4 transition-colors duration-200 focus:outline-none">Projects</Link>
      <Link href="#education" onClick={onClick} className="block py-3 px-4 hover:text-white hover:underline hover:underline-offset-4 transition-colors duration-200 focus:outline-none">Education</Link>
      <Link href="#contact" onClick={onClick} className="block py-3 px-4 hover:text-white hover:underline hover:underline-offset-4 transition-colors duration-200 focus:outline-none">Contact</Link>
    </>
  )

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        <h1 className="text-lg font-semibold tracking-widest">ARUSH<span className="text-gray-500">VISHWAKARMA</span></h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <Link href="#about" className="hover:text-amber-300 hover:underline hover:underline-offset-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400/25 rounded">About</Link>
          <Link href="#skills" className="hover:text-amber-300 hover:underline hover:underline-offset-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400/25 rounded">Skills</Link>
          <Link href="#projects" className="hover:text-amber-300 hover:underline hover:underline-offset-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400/25 rounded">Projects</Link>
          <Link href="#education" className="hover:text-amber-300 hover:underline hover:underline-offset-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400/25 rounded">Education</Link>
          <Link href="#contact" className="hover:text-amber-300 hover:underline hover:underline-offset-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400/25 rounded">Contact</Link>
        </div>

        <a
          href="/resume.pdf"
          className="hidden md:block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium transform transition hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400/30"
        >
          Download CV
        </a>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-purple-400/25 ml-2"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-black/80 border-b border-white/10`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex flex-col text-gray-300">
            <NavLinks onClick={() => setMenuOpen(false)} />

            <a
              href="/resume.pdf"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium transform transition hover:scale-105 hover:shadow-lg"
            >
              Download CV
            </a>
          </nav>
        </div>
      </div>
    </nav>
  )
}
