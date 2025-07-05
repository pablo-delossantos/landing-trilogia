import Header from '@/sections/Header/Header'
import Footer from '@/sections/Footer/Footer'
import styles from './MainLayout.module.css'

type Props = {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
