'use client'
import HeaderSection from './components/sections/header-section'
import SkillsSection from './components/sections/skills-section'
import ProjectsSection from './components/sections/project-section'
import ExperienceSection from './components/sections/experience-section'
import AwardsSection from './components/sections/awards-section'
import FooterSection from './components/sections/footer-section'
import { ibmPlexSans } from './fonts'

export default function Home() {
  return (
    <div className={`max-w-4xl mx-auto px-8 py-20 ${ibmPlexSans.className}`}>
      <HeaderSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <AwardsSection />
      <FooterSection />
    </div>
  )
}
