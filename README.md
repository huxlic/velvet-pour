# Velvet Pour

Velvet Pour is a React and Vite clone of a cocktail bar landing page. The project focuses on a polished, animation-heavy front page with custom typography, layered drink and leaf imagery, and GSAP-driven motion.

## Features

- Fixed responsive navigation with scroll-triggered background animation.
- Animated hero section using GSAP and SplitText character/line reveals.
- Tailwind CSS v4 styling with custom theme tokens and local font assets.
- Local image, icon, video, and texture assets for the Velvet Pour visual system.
- Data constants for cocktail lists, mocktails, profiles, store details, opening hours, socials, and menu slider content.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- GSAP and `@gsap/react`
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Project Structure

```text
velvet-pour/
+-- constants/          # Shared navigation and content data
+-- public/             # Static public assets
+-- src/
|   +-- assets/         # Images, fonts, and videos
|   +-- components/     # React UI components
|   +-- App.jsx         # App composition
|   +-- index.css       # Tailwind import, theme, utilities, and component styles
|   +-- main.jsx        # React entry point
+-- index.html
+-- package.json
+-- vite.config.js
```

## Notes

This is a front-end clone project for practice and portfolio use. The current app renders the navigation and hero section, while additional content data and assets are already present for expanding the cocktail, about, art, menu, and contact sections.
