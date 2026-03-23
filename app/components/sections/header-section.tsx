'use client'

import { resumeData } from '@/app/data/resume-data'
import { itemVariants } from '@/app/lib/animations'
import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedLink from '../ui/animated-link'
import { ibmPlexSans } from '@/app/fonts'


export default function HeaderSection() {
  const { personalInfo, socialLinks } = resumeData

  return (
    <motion.header className="mb-16" variants={itemVariants}>
      <motion.div
        className="flex items-center gap-4 mb-6"
        variants={itemVariants}
      >
        <motion.div
          className="w-26 h-26 rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {personalInfo.profileImage ? (
            <Image
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              width={96}
              height={96}
              className="w-24 h-24 rounded-full"
              priority
            />
          ) : (
            <div className="w-24 h-24 rounded-full border border-neutral-200 bg-neutral-100 text-neutral-700 flex items-center justify-center text-3xl font-semibold">
              H
            </div>
          )}
        </motion.div>
      </motion.div>

      <motion.h1
        className={`text-neutral-900 font-medium text-xl mb-4 ${ibmPlexSans.className}`}
        variants={itemVariants}
      >
        {personalInfo.title }
      </motion.h1>

      {personalInfo.description.map((paragraph, index) => (
        <motion.p
          key={index}
          className={`text-neutral-600 mb-4 leading-relaxed  ${ibmPlexSans.className}`}
          variants={itemVariants}

        >
          {paragraph}
        </motion.p>
      ))}

      <motion.div
        className="flex flex-wrap gap-6 text-sm mt-6"
        variants={itemVariants}
      >
        {socialLinks.map((link, index) => (
          <AnimatedLink key={link.text} link={link} index={index} />
        ))}
      </motion.div>
    </motion.header>
  )
}
