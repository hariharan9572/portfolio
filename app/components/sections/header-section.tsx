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
          className="flex h-36 w-36 items-center justify-center overflow-hidden rounded-full"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {personalInfo.profileImage ? (
            <Image
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              width={144}
              height={144}
              className="h-36 w-36 rounded-full object-cover object-top"
              priority
            />
          ) : (
            <div className="flex h-36 w-36 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 text-4xl font-semibold text-neutral-700">
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
