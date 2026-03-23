'use client'

import { resumeData } from '@/app/data/resume-data'
import { itemVariants, sectionVariants } from '@/app/lib/animations'
import { motion } from 'framer-motion'
import SectionHeader from '../ui/section-header'

export default function SkillsSection() {
  const { skillGroups } = resumeData

  return (
    <motion.section className="mb-16" variants={sectionVariants}>
      <SectionHeader>Skills.</SectionHeader>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            className="rounded-lg border border-neutral-200 p-4"
            variants={itemVariants}
          >
            <h3 className="mb-3 text-sm font-medium text-neutral-900">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
