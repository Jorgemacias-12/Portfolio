# Mi Portfolio y Blog

Bienvenido a mi portfolio personal y blog. Este proyecto es un sitio web construido con [Astro](https://astro.build/), donde comparto mis proyectos en profundidad y profundizo en mis conocimientos técnicos.

## Acerca de este proyecto

En este espacio encontrarás:

- **Proyectos destacados**: Una colección de mis trabajos más relevantes, con explicaciones detalladas del proceso de desarrollo, tecnologías usadas y lecciones aprendidas.
- **Blog técnico**: Artículos donde exploro temas avanzados en desarrollo de software, desde lenguajes de programación hasta buenas prácticas y tendencias tecnológicas.
- **Conocimientos técnicos**: Profundizo en áreas como desarrollo web, backend, frontend, bases de datos y más, compartiendo mi experiencia y aprendizaje continuo.

El sitio está diseñado para ser rápido, accesible y fácil de navegar, aprovechando las capacidades de Astro para generar páginas estáticas optimizadas.

## Estructura del proyecto

```
/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── llm.txt
│   ├── robots.txt
│   └── site.webmanifest
└── src/
    ├── components/
    │   ├── astro/
    │   │   ├── Footer.astro
    │   │   ├── Header.astro
    │   │   ├── Link.astro
    │   │   └── Section.astro
    │   └── react/
    │       ├── RotateText.tsx
    │       └── ThemeToggler.tsx
    ├── constants/
    │   ├── index.ts
    │   └── social-networks.ts
    ├── i18n/
    │   └── lang-definitions.ts
    ├── layouts/
    │   └── PortfolioLayout.astro
    ├── locales/
    │   ├── en.json
    │   └── es.json
    ├── pages/
    │   ├── index.astro
    │   └── en/index.astro
    ├── sections/
    │   ├── index.ts
    │   └── portfolio/
    │       ├── About.astro
    │       ├── Education.astro
    │       ├── Experiences.astro
    │       ├── Projects.astro
    │       └── Skills.astro
    ├── seo/
    │   └── me.ld.json
    ├── styles/
    │   └── global.css
    ├── types/
    │   ├── component-types.ts
    │   ├── dtos.ts
    │   ├── i18n.ts
    │   ├── index.ts
    │   ├── sections.ts
    │   └── theme.ts
    └── utils/
        ├── animations.ts
        ├── i18n.ts
        └── link.ts
```

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone como una ruta basada en su nombre de archivo.

Los componentes para Astro/React/Vue/Svelte/Preact se colocan en `src/components/`.

Los activos estáticos, como imágenes, van en el directorio `public/`.

## Referencia de directorios

- `astro.config.mjs`: Configuración e integraciones de Astro.
- `package.json`: Dependencias, scripts y metadatos del proyecto.
- `tsconfig.json`: Opciones del compilador de TypeScript.
- `public/`: Activos estáticos servidos directamente (imágenes, iconos, robots, manifiesto, etc.).
- `src/components/astro/`: Componentes reutilizables de Astro para el diseño y la interfaz.
- `src/components/react/`: Widgets de componentes React usados en las páginas (por ejemplo, texto rotativo, alternador de tema).
- `src/constants/`: Constantes de la aplicación (enlaces sociales, valores compartidos).
- `src/i18n/`: Funciones de internacionalización y definiciones de idioma.
- `src/layouts/`: Componente de layout de página principal (`PortfolioLayout.astro`).
- `src/locales/`: Archivos JSON de locales en inglés y español.
- `src/pages/`: Páginas Astro y rutas (raíz y específicas por idioma).
- `src/sections/`: Secciones estructuradas usadas en la composición de páginas, incluyendo subcomponentes de portafolio.
- `src/seo/`: Metadatos SEO y configuración JSON-LD (`me.ld.json`).
- `src/styles/`: Estilos CSS globales del sitio.
- `src/types/`: Definiciones e interfaces de TypeScript.
- `src/utils/`: Funciones utilitarias para animaciones, localización y enlaces.

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, en una terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Instala las dependencias                          |
| `bun run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `bun run local`           | Inicia el servidor de desarrollo con enlace de host |
| `bun run build`           | Construye el sitio de producción en `./dist/`    |
| `bun run preview`         | Previsualiza la construcción localmente antes de desplegar |
| `bun run astro`           | Ejecuta comandos del CLI de Astro                |
| `bun run astro -- --help` | Obtén ayuda con el CLI de Astro                  |

## Contacto

Si tienes preguntas o quieres colaborar, no dudes en contactarme.

---

*Construido con amor usando Astro.*

Versión en inglés: [README.md](README.md)
