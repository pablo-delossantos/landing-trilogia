# Landing Trilogía – Higiene & Seguridad

Este proyecto es una landing page profesional desarrollada en **React + Vite + TypeScript**, basada en un prototipo de Figma para la consultora Trilogía Higiene & Seguridad.

## 🚀 Tecnologías principales

- [React 19](https://react.dev/)
- [Vite 7](https://vitejs.dev/)
- [TypeScript 5.8](https://www.typescriptlang.org/)
- CSS Modules para estilos por componente
- ESLint para análisis estático de código

## 📁 Estructura del proyecto

```
src/
├── assets/           # Imágenes e íconos
├── components/       # Componentes globales reutilizables
├── sections/         # Secciones de la landing (Header, Hero, etc.)
├── layout/           # MainLayout con header + footer
├── styles/           # Variables CSS y globales
├── hooks/            # Hooks personalizados (useToggle, etc.)
├── utils/            # Funciones auxiliares
├── App.tsx
└── main.tsx
```

## 🛠 Scripts disponibles

- `npm run dev` — Ejecuta el proyecto en desarrollo (puerto 3000)
- `npm run build` — Compila TypeScript y genera el build para producción
- `npm run preview` — Visualiza el build ya compilado
- `npm run lint` — Ejecuta ESLint sobre el proyecto

## ⚙️ Configuración adicional

En `vite.config.ts` está configurado el puerto:

```ts
server: {
  port: 3000,
  open: true
}
```

## 📝 Notas

- La validación de formularios se hará con `react-hook-form` + `zod` (si se implementa).
- No se utiliza Tailwind. Los estilos se escriben con CSS Modules (`*.module.css`).

---

© Trilogía Higiene & Seguridad – 2025
