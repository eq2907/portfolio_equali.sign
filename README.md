# equali.sign — Portfolio

A personal portfolio website for **equali.sign**, a Frontend Developer crafting fast, accessible, and pixel-perfect web experiences.

Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **GSAP** for smooth animations.

---

## ✨ Features

- **Hero section** with profile photo, animated tagline, and scroll indicator
- **Stacked portfolio cards** showcasing selected work with sticky-scroll behavior
- **Work listing & detail pages** — each project has its own dedicated page
- **Short intro section** with a downloadable resume link
- **Contact form** with configurable form action endpoint
- **Footer** with social links (LinkedIn, GitHub, Instagram) and a scroll-to-top button
- **Centralized config** — all copy, links, and data live in one file (`siteConfig.js`)

---

## 🗂️ Project Structure

```
src/
├── assets/             # Static images and media
├── components/
│   ├── Nav.jsx         # Navigation bar with links and CTA button
│   ├── Footer.jsx      # Footer with social icons and quick links
│   └── SecWork.jsx     # Stacked portfolio card component
├── pages/
│   ├── Home.jsx        # Hero, portfolio preview, intro, and contact sections
│   ├── Work.jsx        # Full work/project listing page
│   └── WorkDetail.jsx  # Individual project detail page
├── utils/
│   ├── siteConfig.js   # ⚙️ Centralized site configuration (name, bio, links…)
│   └── PortfolioData.js # Portfolio project data array
├── App.jsx             # Root component with routing setup
├── main.jsx            # React entry point
└── style.css           # Global base styles
```

---

## ⚙️ Configuration

All personal content is managed from a **single config file** — no need to touch individual components.

Open [`src/utils/siteConfig.js`](./src/utils/siteConfig.js) and update the fields:

| Field | Description |
|---|---|
| `name` | Your display name |
| `title` | Your job title |
| `bio` | Short hero bio paragraph |
| `introHeading` | Heading in the "Short intro" section |
| `introBio` | Longer bio in the "Short intro" section |
| `resumeUrl` | URL to your resume (or `'#'` to disable) |
| `contactFormAction` | Form `action` endpoint (e.g. `mailto:`, API URL, or `'#'`) |
| `nav` | Navigation links array |
| `footerLinks` | Footer quick-links array |
| `social` | Social platform links (`linkedin`, `github`, `instagram`) |

To update portfolio projects, edit [`src/utils/PortfolioData.js`](./src/utils/PortfolioData.js).

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [npm](https://npmjs.com/) v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio_equali.sign.git
cd portfolio_equali.sign

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens the dev server at `http://localhost:5173` with Hot Module Replacement (HMR).

### Build

```bash
npm run build
```

Outputs the production bundle to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | ^19 | UI framework |
| [Vite](https://vite.dev/) | ^8 | Build tool & dev server |
| [React Router DOM](https://reactrouter.com/) | ^7 | Client-side routing |
| [Tailwind CSS](https://tailwindcss.com/) | ^4 | Utility-first styling |
| [GSAP](https://gsap.com/) | ^3.15 | Animations |
| [@gsap/react](https://gsap.com/resources/React/) | ^2 | GSAP React integration |

---

## 📄 License

This project is licensed under the terms of the [LICENSE](./LICENSE) file included in this repository.
