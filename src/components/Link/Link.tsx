import type { MouseEvent } from 'react'
import styles from './Link.module.css'

interface LinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function Link({ href, children, className }: LinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const targetId = href.slice(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <a href={href} onClick={handleClick} className={`${styles.link} ${className || ''}`}>
      {children}
    </a>
  )
}
