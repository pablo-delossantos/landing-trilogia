import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <section className={styles.intro} id="intro">
      <div className={styles.header}>
        <h2 className={styles.title}>
          Nosotros 
        </h2>
        <hr className={styles.divider} />
      </div>
      
      <div className={styles.content}>
        <p>
          Trilogía está enfocada en <span className={styles.highlight}>gestionar y simplificar</span>
          la higiene y seguridad de pymes y grandes compañías.
        </p>
        <p>
          Creemos en la mejora continua y en explicar cada norma en <span className={styles.highlight}>lenguaje claro</span>.
        </p>
        <p>
          Alineados con la Ley 19.587; resultado tangible:
          <span className={styles.highlight}> cero accidentes incapacitantes</span> en los últimos dos años entre nuestros clientes.
        </p>
      </div>
    </section>
  );
}
