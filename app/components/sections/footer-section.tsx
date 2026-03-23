'use client'

import { footerVariants } from '@/app/lib/animations'
import { motion } from 'framer-motion'


export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="border-t border-neutral-200 pt-8"
      variants={footerVariants}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="text-neutral-500 text-sm">
          <p>Minimal portfolio for recruiters, hiring teams, and quick project reference.</p>
          <p className="mt-1">
            For a complete portfolio experience, visit{' '}
            <motion.a
              href="https://hariharana.com"
              className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
              whileHover={{ y: -1 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              hariharana.com
            </motion.a>
          </p>
        </div>
        <div className="text-neutral-400 text-sm">
          © {currentYear} Hariharan. All rights reserved.
        </div>
      </div>
    </motion.footer>
  )
}
