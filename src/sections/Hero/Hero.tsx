import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>
          La <span className={styles.highlight}>seguridad laboral</span> que impulsa tu negocio
        </h1>
        <div className={styles.resume}>
          <p className={styles.subtitle}>
            Somos Trilogía, un equipo joven de especialistas que convierte los
            requisitos legales en tranquilidad operativa.
          </p>
          <p className={styles.copy}>
            Nos ponemos tus zapatos de seguridad y te ayudamos a prevenir antes
            de lamentar.
          </p>
        </div>
      </div>
      <div className={styles.background} aria-hidden="true" />
    </section>
  )
}
