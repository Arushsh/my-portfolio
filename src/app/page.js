import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import SkillsSection from '@/components/Skills'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <SkillsSection/>
      <Projects />
<Education/>
      <Contact />
    </main>
  )
}
