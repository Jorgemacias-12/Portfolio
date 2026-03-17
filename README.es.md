# Mi Portfolio y Blog

¡Bienvenido a mi portfolio personal y blog! Este proyecto es un sitio web construido con [Astro](https://astro.build/), donde comparto mis proyectos y profundizo en mis conocimientos técnicos.

## Acerca de este proyecto

En este espacio, encontrarás:

- **Proyectos destacados**: Una colección de mis trabajos más relevantes, con explicaciones detalladas sobre el proceso de desarrollo, tecnologías utilizadas y lecciones aprendidas.
- **Blog técnico**: Artículos donde exploro temas avanzados en desarrollo de software, desde lenguajes de programación hasta mejores prácticas y tendencias tecnológicas.
- **Conocimientos técnicos**: Profundizo en áreas como desarrollo web, backend, frontend, bases de datos y más, compartiendo mi experiencia y aprendizaje continuo.

El sitio está diseñado para ser rápido, accesible y fácil de navegar, aprovechando las capacidades de Astro para generar páginas estáticas optimizadas.

## Estructura del proyecto

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone como una ruta basada en su nombre de archivo.

Los componentes de Astro/React/Vue/Svelte/Preact se colocan en `src/components/`.

Los activos estáticos, como imágenes, van en el directorio `public/`.

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, en una terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Instala las dependencias                          |
| `bun run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `bun run local`           | Inicia el servidor de desarrollo con enlace de host |
| `bun run build`           | Construye el sitio de producción en `./dist/`    |
| `bun run preview`         | Previsualiza la construcción localmente antes de desplegar |
| `bun run astro`           | Ejecuta comandos CLI de Astro                    |
| `bun run astro -- --help` | Obtén ayuda con el CLI de Astro                  |

## Contacto

Si tienes preguntas o quieres colaborar, ¡no dudes en contactarme!

---

*Construido con amor usando Astro.*

Versión en inglés: [README.md](README.md)
