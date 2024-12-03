# Portfolio

This is my personal portfolio as a software developer, where you can explore my projects skills and, my approach to web development.
The portfolio is built using modern technologies and fouceses on provinding a fast an engaging user experience.

## Features

- Showcase of personal projects with detailed descriptions and links to repositories
- Interactive UI built with react and styled with Tailwind CSS
- Responsive design for optimal viewing on all devices (not supporting IE 11)
- Real-time deployment updates through Github Pages

## Tecnologies Used

- **Astro**: A high-performance static site generator that integrates technologies like React and Tailwind CSS.
- **React**: A library for building interactive user interfaces and reusable components.
- **TypeScript**: A superset of JavaScript that provides static typing, helping reduce errors and improve code maintainability.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs with utility classes.
- **Material UI**: A React component library following Material Design principles, making it easier to build consistent and accessible interfaces.
- **Nanostores**: A library for efficient state management in reactive applications.
- **dotenv**: A module for loading environment variables securely, used to manage sensitive configurations.

## Continuous Integration and Development (CI/CD)

This project uses **GitHub Actions** to automate the process of building and deploying the portfolio.

Every time a new version is tagged (e.g., 'v1.0.0), the workflow is triggered to:

1. Clean up previous deployment
2. Build the portfolio using the latest code
3. Deploy the built site to **GitHub Pages**

### Workflow overview

- **Triggered by**: Git tags (e.g., `v*`) or manual trigger
  - **Build process**
    - Checks out the code.
    - Sets enviroment variables.
    - Builds the site using **Astro** and uploads it.
  - **Deployment**: The site is deployed to **GitHub Pages**

## Contact

- **LinkedIn**: [jamz3](https://www.linkedin.com/in/jamz3/)
