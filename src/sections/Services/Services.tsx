import styles from "./Services.module.css"
import {
  ClipboardList,
  BuildingFactory2,
  Presentation,
  ScaleOutline,
  AlertTriangle,
  Recycle,
} from "tabler-icons-react"
import Card from "@/components/Card/Card"

const services = [
  {
    icon: <ClipboardList />,
    title: "Gestión integral",
    description: "Diseño de plan anual y seguimiento de indicadores.",
  },
  {
    icon: <BuildingFactory2 />,
    title: "Supervisión técnica",
    description: "Visitas a planta y reportes comprensibles.",
  },
  {
    icon: <Presentation />,
    title: "Capacitación",
    description: "Charlas dinámicas, simulacros y e‑learning.",
  },
  {
    icon: <ScaleOutline />,
    title: "Asesoría especializada",
    description: "BPM, PCI, instalaciones eléctricas y más.",
  },
  {
    icon: <AlertTriangle />,
    title: "Planes de emergencia",
    description: "Mapas, brigadas y simulacros.",
  },
  {
    icon: <Recycle />,
    title: "Evaluaciones ambientales",
    description: "Mediciones, diagnóstico y acciones.",
  },
]

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <h2 className={styles.title}>Servicios</h2>

      <div className={styles.grid}>
        {services.map((s, i) => (
          <Card key={i} {...s} />
        ))}
      </div>

      <p className={styles.note}>
        ¿Tenés dudas? <a href="#contact">Escribinos por WhatsApp</a> y te
        orientamos sin compromiso.
      </p>
    </section>
  )
}
