import type { ReactNode } from "react"
import styles from "./card.module.css"

type Props = {
  icon: ReactNode
  title: string
  description: string
}

export default function Card({ icon, title, description }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
