# Chef 🧑‍🍳 - A Professional Front-End Starter Template

You are absolutely right. The original text sounded like it was marketing a product, which can feel inauthentic for a portfolio project. The goal is to sound confident and competent, not to oversell.

Here are a few rewritten versions that are more grounded, professional, and aligned with your goal. They remove the exaggeration while still highlighting the project's quality.

### Option 1 (Recommended - Clear and Professional)

> **Chef** is the capstone project for Kevin Powell's *Beyond CSS* course, built to demonstrate a comprehensive, hands-on application of modern Sass. It implements a full 7-1 architecture and covers key concepts from the course, including custom functions, advanced mixins, and a fluid design system. This project serves as a practical showcase of writing scalable and maintainable CSS with a Vite-powered workflow.


## 🚀 Live Demo

Check out the live version of the project:

**[➡️ View Live Demo](https://chef-beyondcsszz.netlify.app/)**  


## ✨ Core Philosophy & Features

This starter template is built on a few core principles:

*   **Modern Sass Architecture:** Organized using the 7-1 pattern with `@use` and `@forward` for a clear, modular, and scalable stylesheet.
*   **Fluid & Responsive by Default:** Utilizes `clamp()` for fluid typography and spacing, ensuring seamless scaling across all viewports.
*   **Powerful Tooling:** Built on **Vite** for a blazing-fast development experience with hot module replacement (HMR).
*   **Performance-Optimized:** Comes pre-configured with **PurgeCSS** to remove unused styles and **ViteImageOptimizer** for lighter image assets in the production build.
*   **Code Quality Enforced:** **Stylelint** is integrated to maintain consistent and high-quality Sass code.

---

## 💻 Tech Stack & Tooling

*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Sass (SCSS)](https://sass-lang.com/)
*   **Linting:** [Stylelint](https://stylelint.io/) with `stylelint-config-standard-scss`
*   **Optimization:**
    *   [vite-plugin-purgecss](https://github.com/nonzzz/vite-plugin-purgecss) (removes unused CSS)
    *   [vite-plugin-image-optimizer](https://github.com/FateDant/vite-plugin-image-optimizer) (compresses images)
    *   [vite-plugin-html](https://github.com/vbenjs/vite-plugin-html) (minifies HTML)
*   **Package Manager:** [NPM](https://www.npmjs.com/)

---

## 📁 Sass Architecture Breakdown

The Sass codebase follows a 7-1 style architecture, which is both powerful and easy to navigate. All files are loaded through a single entry point `style.scss`.

```
src/sass/
├── abstracts/      # Variables, functions, mixins,breakpoints,colors,spacing, typography and placeholders
├── base/           # reset, root and general
├── components/     # Reusable components (buttons and headings)
├── layout/         # Layout-specific styles (header, footer, grid and main)
├── utilities/      # Helper classes and utility styles
└── style.scss      # Main Sass entry point
```

---

## ⚙️ Getting Started & Usage

To get a local copy up and running, follow these steps.

### Prerequisites

You must have [Node.js](https://nodejs.org/en/) (v16+) and `npm` installed.

---

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/zoalfekar-nasser/beyond-css-chef.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd beyond-css-chef
    ```
3.  Install the required `npm` packages:
    ```sh
    npm install
    ```

---

### Available Scripts

This project uses `npm scripts` defined in `package.json` for development and building.

*   **Start the development server:**
    ```sh
    npm run dev
    ```
    This will open the project in your browser with hot-reloading enabled.

*   **Build for production:**
    ```sh
    npm run build
    ```
    This command will bundle, optimize, and minify all assets into the `/dist` directory, ready for deployment.

*   **Preview the production build:**
    ```sh
    npm run preview
    ```
    This serves the `/dist` folder locally, allowing you to check the final build before deploying.

---

## 📞 Contact

**[Zoalfekar Nasser]**

*   **GitHub:** [github.com/zoalfekar-nasser](https://github.com/zoalfekar-nasser)
*   **LinkedIn:** [linkedin.com/in/zoalfekar-nasser](https://www.linkedin.com/in/zoalfekar-nasser)
