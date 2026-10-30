# Aalia Amin | Portfolio

My personal portfolio website, built with React and Tailwind CSS. It brings together my software engineering background, selected projects, technical skills, and contact information in a single-page layout.

## Features

- Home section with a short introduction and profile image.
- About section covering my experience and engineering interests.
- Project cards with screenshots, technology summaries, and links to demos and source code.
- Skills grid with technology icons.
- Smooth scrolling between sections using React Scroll.
- Desktop navigation and a collapsible mobile menu.
- Responsive layouts using Tailwind CSS breakpoints.
- Desktop social links for LinkedIn, GitHub, email, and a downloadable resume.
- Contact form configured to submit through Getform.

## Tech Stack

| Area | Technology |
| --- | --- |
| UI | React 18, JavaScript |
| Styling | Tailwind CSS |
| Navigation | React Scroll |
| Icons | React Icons |
| Build tooling | Vite |
| Linting | ESLint |
| Contact form | Getform |

The skills displayed on the website describe my broader technical background. They are separate from the technologies used to build this portfolio.

## Featured Projects

The current project section includes:

- **Kanban Task Management** - React, Redux, Tailwind CSS
- **MoviesHub** - React, Redux, SASS
- **Todo App** - HTML, CSS, JavaScript
- **Multi Step Form** - HTML, CSS, JavaScript

Project details, screenshots, and destination links are defined in `src/components/Portfolio.jsx`.

## Run Locally

Install Node.js and npm, then run:

```bash
git clone https://github.com/Aalia98/Portfolio.git
cd Portfolio
npm ci
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

To build and preview:

```bash
npm run build
npm run preview
```

## Project Structure

```text
public/
└── Aalia_Amin_CV.pdf    # Downloadable resume
src/
├── assets/             # Profile images, skill icons, and project screenshots
├── components/
│   ├── NavBar.jsx      # Desktop and mobile navigation
│   ├── Home.jsx        # Introduction
│   ├── About.jsx       # Background and experience
│   ├── Portfolio.jsx   # Project cards
│   ├── Skills.jsx      # Skills grid
│   ├── Contact.jsx     # Contact form and footer
│   └── SocialLinks.jsx # Desktop social links and resume download
├── App.jsx             # Page composition
├── index.css           # Global styles and animations
└── main.jsx            # React entry point
```

## Content and Configuration

- Introduction and background: `Home.jsx` and `About.jsx`
- Project cards and links: `Portfolio.jsx`
- Skills and icons: `Skills.jsx` and `src/assets/`
- Social links and resume path: `SocialLinks.jsx`
- Contact form endpoint: `Contact.jsx`
- Resume file: `public/Aalia_Amin_CV.pdf`

This repository contains the portfolio frontend, not a custom backend or database. Contact submissions depend on the configured Getform endpoint. If adapting the project, replace that endpoint with your own before accepting messages.
