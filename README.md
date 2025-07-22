# JDB Portfolio

A modern, responsive personal portfolio website built with Astro, React, and TailwindCSS. This portfolio showcases Jhosep Davila's work as a Full Stack Developer with interactive animations and a clean, professional design.

## 🚀 Live Demo

Visit the live portfolio at: [jdb-portfolio.vercel.app](https://jdb-portfolio.vercel.app)

## ✨ Features

- **Modern Tech Stack**: Built with Astro 5, React 19, and TailwindCSS 4
- **Responsive Design**: Optimized for all device sizes
- **Interactive Animations**: Smooth animations using Framer Motion
- **Contact Form**: Integrated contact form with EmailJS
- **Dark/Light Mode**: Theme toggle functionality
- **SEO Optimized**: Built-in sitemap and meta tags
- **Performance First**: Optimized for speed and Core Web Vitals

## 🛠️ Tech Stack

### Core Technologies

- **[Astro](https://astro.build/)** - Static site generator with partial hydration
- **[React](https://react.dev/)** - UI component library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework

### UI & Animations

- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lottie React](https://github.com/Gamote/lottie-react)** - Lottie animations
- **[Lucide React](https://lucide.dev/)** - Icon library

### Forms & Validation

- **[React Hook Form](https://react-hook-form.com/)** - Form handling
- **[Zod](https://zod.dev/)** - Schema validation
- **[EmailJS](https://www.emailjs.com/)** - Email service integration

### Development Tools

- **[Biome](https://biomejs.dev/)** - Linting and formatting
- **[Bun](https://bun.sh/)** - Package manager and runtime

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── about.tsx       # About section
│   ├── contact.tsx     # Contact form
│   ├── hero.tsx        # Hero section
│   ├── projects.tsx    # Projects showcase
│   └── ...
├── hooks/              # Custom React hooks
├── layouts/            # Astro layouts
├── lib/                # Utility libraries
├── pages/              # Astro pages
├── styles/             # Global styles
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jhosep98/jdb-portfolio.git
cd jdb-portfolio
```

2. Install dependencies:

```bash
bun install
# or
npm install
```

3. Start the development server:

```bash
bun run dev
# or
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

## 📜 Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run format` - Format code with Biome
- `bun run lint` - Lint code with Biome
- `bun run check` - Run Biome checks and fixes

## 🎨 Sections

The portfolio includes the following sections:

- **Hero** - Introduction with call-to-action buttons
- **About** - Personal information and GitHub stats
- **Skills** - Technical skills and expertise
- **Projects** - Featured projects and work
- **Experience** - Professional experience timeline
- **Testimonials** - Client testimonials and feedback
- **Contact** - Contact form and information

## 🌐 Deployment

This project is configured for deployment on Vercel with the Astro Vercel adapter.

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push to main

### Environment Variables

Set up the following environment variables in your deployment:

- `PUBLIC_CALENDLY_EVENT` - Your Calendly booking link
- Additional EmailJS configuration variables

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Jhosep Davila**

- GitHub: [@jhosep98](https://github.com/jhosep98)
- Email: jhosepdb14@gmail.com
- Portfolio: [jdb-portfolio.vercel.app](https://jdb-portfolio.vercel.app)

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com/)
