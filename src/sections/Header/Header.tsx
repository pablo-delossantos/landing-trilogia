import Link from "@/components/Link/Link";
import styles from "./Header.module.css";
import Logo from "../../assets/images/logo-trilogia.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Logo → vuelve al inicio */}
      <div className={styles.left}>
        <a href="#hero" aria-label="Ir al inicio">
          <img src={Logo} alt="Trilogía" className={styles.logo} />
        </a>
      </div>

      {/* Navegación principal */}
      <nav className={styles.right}>
        <Link href="#intro">Quiénes somos</Link>
        <Link href="#services">Servicios</Link>
        <Link href="#method">Método</Link>
        <Link href="#team">Equipo</Link>
        <Link href="#clients">Clientes</Link>
      </nav>
    </header>
  );
}
