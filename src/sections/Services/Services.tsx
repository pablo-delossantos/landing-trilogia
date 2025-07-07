import styles from "./Services.module.css"
import {
  ClipboardList,
  BuildingFactory2,
  Presentation,
  ScaleOutline,
  AlertTriangle,
  Recycle,
} from "tabler-icons-react"

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <h2 className={styles.title}>Servicios</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <ClipboardList className={styles.icon} />
          <h3>Gestión integral</h3>
          <p>Diseño de plan anual y seguimiento de indicadores.</p>
        </div>

        <div className={styles.card}>
          <BuildingFactory2 className={styles.icon} />
          <h3>Supervisión técnica</h3>
          <p>Visitas a planta y reportes comprensibles.</p>
        </div>

        <div className={styles.card}>
          <Presentation className={styles.icon} />
          <h3>Capacitación</h3>
          <p>Charlas dinámicas, simulacros y e‑learning.</p>
        </div>

        <div className={styles.card}>
          <ScaleOutline className={styles.icon} />
          <h3>Asesoría especializada</h3>
          <p>BPM, PCI, instalaciones eléctricas y más.</p>
        </div>

        <div className={styles.card}>
          <AlertTriangle className={styles.icon} />
          <h3>Planes de emergencia</h3>
          <p>Mapas, brigadas y simulacros.</p>
        </div>

        <div className={styles.card}>
          <Recycle className={styles.icon} />
          <h3>Evaluaciones ambientales</h3>
          <p>Mediciones, diagnóstico y acciones.</p>
        </div>
      </div>

      <p className={styles.note}>
        ¿Tenés dudas? <a href="#contact">Escribinos por WhatsApp</a> y te
        orientamos sin compromiso.
      </p>
    </section>
  )
}
