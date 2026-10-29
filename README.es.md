# Portfolio

Este es mi portafolio, donde comparto mi perfil profesional.

[Read in English](README.md)

## Gestor de paquetes

Este proyecto usa [Bun](https://bun.sh/) para instalar dependencias y ejecutar scripts. Desde la raíz del proyecto, instala las dependencias e inicia el servidor de desarrollo con:

```sh
bun install
bun run dev
```

Agrega una dependencia con `bun add nombre-del-paquete` o una dependencia de desarrollo con `bun add --dev nombre-del-paquete`.

## Comandos disponibles

Estos comandos están definidos en `package.json`:

| Comando                   | Descripción                                                                                                       |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `bun run dev`             | Inicia el servidor de desarrollo de Astro.                                                                        |
| `bun run build`           | Compila el sitio para producción en `dist/`.                                                                      |
| `bun run preview`         | Previsualiza localmente la compilación de producción.                                                             |
| `bun run local`           | Inicia el servidor de desarrollo de Astro en el host de red.                                                      |
| `bun run astro -- ...`    | Ejecuta comandos de la CLI de Astro.                                                                              |
| `bun run storybook`       | Inicia Storybook en el puerto 6006.                                                                               |
| `bun run build-storybook` | Compila Storybook.                                                                                                |
| `bun run prepare`         | Configura los hooks de Git de Husky. Este script también se ejecuta automáticamente al instalar las dependencias. |
| `bun run lint`            | Ejecuta ESLint.                                                                                                   |
| `bun run lint:fix`        | Ejecuta ESLint y corrige automáticamente los problemas cuando es posible.                                         |
| `bun run format`          | Da formato a los archivos del proyecto con Prettier.                                                              |
