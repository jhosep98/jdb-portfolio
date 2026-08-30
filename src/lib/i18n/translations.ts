export type Locale = 'en' | 'es'

export const LOCALES: Locale[] = ['en', 'es']

export const DEFAULT_LOCALE: Locale = 'en'

/** Read on the server so the first paint already matches the visitor's choice. */
export const LOCALE_COOKIE = 'locale'

export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365

export function isLocale(value: string | undefined): value is Locale {
  return value === 'en' || value === 'es'
}

/** Endonyms — a language picker always names each language in its own language. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
}

export interface TimelineEntry {
  date: string
  company: string
  role: string
  bullets: string[]
  current?: boolean
}

export interface ProjectEntry {
  key: string
  title: string
  description: string
  stack: string[]
  /** Repo is private — hide the "View repository" CTA and show a private-project label instead. */
  private?: boolean
}

const en = {
  nav: {
    about: 'About',
    experience: 'Experience',
    work: 'Work',
    testimonials: 'Testimonials',
    contact: 'Contact',
  },
  common: {
    letsTalk: "Let's talk",
  },
  a11y: {
    home: 'Home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    toggleTheme: 'Toggle theme',
    language: 'Language',
    heroIllustration: 'Person working with a laptop',
    playAnimation: 'Play animation',
    pauseAnimation: 'Pause animation',
  },
  sections: {
    about: { eyebrow: 'About', title: 'About me' },
    experience: { eyebrow: 'Experience', title: 'Experience' },
    work: { eyebrow: 'Work', title: 'Selected work' },
    testimonials: { eyebrow: 'Testimonials', title: 'What people say' },
    contact: { eyebrow: 'Contact', title: "Let's build something" },
  },
  hero: {
    badge: 'Buenos Aires, Argentina — Frontend Engineer',
    title: 'Building fast, scalable web experiences.',
    description: 'Frontend Engineer specializing in React, TypeScript, and Next.js.',
    secondaryCta: 'See selected work',
  },
  about: {
    role: 'Frontend Engineer',
    location: 'Buenos Aires, Argentina',
    bio: (startYear: number, years: number) => [
      `I've been building for the web since ${startYear}, with ${years} years of hands-on experience developing modern web applications with React, TypeScript, and Next.js.`,
      'I turn designs and product requirements into production-ready interfaces, with a focus on performance, maintainability, and user experience.',
    ],
    metadata: {
      specialization: 'Specialization',
      specializationValue: 'Frontend Engineering',
      experienceLevel: 'Experience Level',
      experienceLevelValue: 'Mid-Level',
      languages: 'Languages',
      languagesValue: 'Spanish, English',
    },
    downloadCv: 'Download CV',
  },
  experience: {
    present: 'Present',
    items: [
      {
        date: 'Aug 2021',
        company: 'Wulpers',
        role: 'Frontend Engineer',
        current: true,
        bullets: [
          'Designed and built scalable frontend systems using React, TypeScript, Next.js, and reusable component architectures.',
          'Built an LLM-driven automation pipeline with n8n to generate production-ready client websites, reducing project turnaround from weeks to days.',
          'Developed SEO-focused Next.js landing pages achieving 90+ Lighthouse scores across performance, accessibility, and best practices.',
          'Built data-driven features with GraphQL and TanStack Query within a Turborepo monorepo, improving frontend performance and maintainability.',
          'Partnered with design and backend teams to deliver responsive, production-ready interfaces from Figma.',
        ],
      },
      {
        date: 'Jul — Sep 2023',
        company: 'Coderhouse',
        role: 'ReactJS Teaching Assistant',
        bullets: [
          'Mentored 30+ students in React, covering functional components, custom hooks, state management, and frontend patterns.',
          'Led code reviews and debugging sessions, providing feedback on code quality, architecture, and rendering performance.',
        ],
      },
      {
        date: 'May — Jul 2021',
        company: 'GlobalTech SCM Solutions',
        role: 'Full Stack Developer',
        bullets: [
          'Developed a React Native mobile application to modernize a Warehouse Management System, enabling real-time inventory management from mobile devices.',
          'Built RESTful APIs with NestJS and SQL Server to support inventory and warehouse operations.',
        ],
      },
      {
        date: 'Mar — Apr 2021',
        company: 'Alkemy',
        role: 'Full Stack Developer',
        bullets: [
          'Developed a responsive website for a non-profit organization using HTML, CSS, and JavaScript.',
          'Worked in an Agile/Scrum environment while expanding experience with React, Node.js, Material UI, Git, and GitHub.',
        ],
      },
    ] satisfies TimelineEntry[],
  },
  projects: {
    viewRepository: 'View repository',
    privateLabel: 'Private project',
    items: [
      {
        key: 'webbuilder',
        title: 'WebBuilder',
        private: true,
        description:
          'An AI-powered component system for generating branded, production-ready landing pages from a shared codebase. Built with React, TypeScript, Tailwind CSS, GraphQL, TanStack Query, n8n, Turborepo, and Bun.',
        stack: [
          'React',
          'TypeScript',
          'Next.js',
          'Tailwind CSS',
          'GraphQL',
          'TanStack Query',
          'n8n',
          'AI',
          'Turborepo',
        ],
      },
      {
        key: 'omnivest-ai',
        title: 'OmniVest AI',
        description:
          'A personal finance and trading ecosystem for portfolio tracking, derivatives journaling, and AI-powered financial workflows.',
        stack: ['TypeScript', 'AI'],
      },
      {
        key: 'jdb-portfolio',
        title: 'jdb-portfolio',
        description:
          'A modern personal portfolio built with Next.js, React, and Tailwind CSS, designed to showcase frontend engineering work through interactive motion and a clean, responsive interface.',
        stack: ['Next.js', 'React', 'Tailwind CSS', 'Motion'],
      },
    ] satisfies ProjectEntry[],
  },
  contact: {
    description:
      'Open to Frontend Engineer opportunities and selected freelance projects. Let’s talk about what you’re building.',
    bookACall: 'Book a call',
    callDuration: '30 min — Calendly',
  },
  form: {
    emailLabel: 'Email',
    subjectLabel: 'Subject',
    messageLabel: 'Message',
    emailPlaceholder: 'john@example.com',
    subjectPlaceholder: 'Subject',
    messagePlaceholder: 'Message',
    submit: 'Send Message',
    validation: {
      email: 'Email is required',
      subject: 'Subject is required',
      message: 'Message is required',
    },
    success: 'Thank you for your message!',
    error: 'Error sending message',
  },
  footer: {
    tagline:
      'Frontend Engineer based in Buenos Aires, Argentina, specializing in React, TypeScript, and Next.js.',
    sections: 'Sections',
    elsewhere: 'Elsewhere',
  },
}

export type SectionKey = keyof typeof en.sections

const es: typeof en = {
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    work: 'Proyectos',
    testimonials: 'Testimonios',
    contact: 'Contacto',
  },
  common: {
    letsTalk: 'Hablemos',
  },
  a11y: {
    home: 'Inicio',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    toggleTheme: 'Cambiar tema',
    language: 'Idioma',
    heroIllustration: 'Persona trabajando con una laptop',
    playAnimation: 'Reproducir animación',
    pauseAnimation: 'Pausar animación',
  },
  sections: {
    about: { eyebrow: 'Sobre mí', title: 'Sobre mí' },
    experience: { eyebrow: 'Experiencia', title: 'Experiencia' },
    work: { eyebrow: 'Proyectos', title: 'Proyectos destacados' },
    testimonials: { eyebrow: 'Testimonios', title: 'Lo que dicen' },
    contact: { eyebrow: 'Contacto', title: 'Construyamos algo' },
  },
  hero: {
    badge: 'Buenos Aires, Argentina — Frontend Engineer',
    title: 'Construyo experiencias web rápidas y escalables.',
    description: 'Frontend Engineer especializado en React, TypeScript y Next.js.',
    secondaryCta: 'Ver proyectos destacados',
  },
  about: {
    role: 'Frontend Engineer',
    location: 'Buenos Aires, Argentina',
    bio: (startYear: number, years: number) => [
      `Desde ${startYear} trabajo en el desarrollo de aplicaciones web, con ${years} años de experiencia práctica utilizando React, TypeScript y Next.js.`,
      'Transformo diseños y requisitos de producto en interfaces listas para producción, con foco en rendimiento, mantenibilidad y experiencia de usuario.',
    ],
    metadata: {
      specialization: 'Especialización',
      specializationValue: 'Frontend Engineering',
      experienceLevel: 'Nivel de experiencia',
      experienceLevelValue: 'Mid-Level',
      languages: 'Idiomas',
      languagesValue: 'Español, Inglés',
    },
    downloadCv: 'Descargar CV',
  },
  experience: {
    present: 'Actual',
    items: [
      {
        date: 'Ago 2021',
        company: 'Wulpers',
        role: 'Frontend Engineer',
        current: true,
        bullets: [
          'Diseñé y desarrollé sistemas frontend escalables utilizando React, TypeScript, Next.js y arquitecturas de componentes reutilizables.',
          'Construí un pipeline de automatización basado en LLMs con n8n para generar sitios web de clientes listos para producción, reduciendo los tiempos de desarrollo de semanas a días.',
          'Desarrollé landing pages optimizadas para SEO con Next.js, alcanzando puntuaciones superiores a 90 en Lighthouse en rendimiento, accesibilidad y buenas prácticas.',
          'Desarrollé funcionalidades basadas en datos con GraphQL y TanStack Query dentro de un monorepo con Turborepo, mejorando el rendimiento y la mantenibilidad del frontend.',
          'Trabajé junto a los equipos de diseño y backend para convertir diseños de Figma en interfaces responsivas y listas para producción.',
        ],
      },
      {
        date: 'Jul — Sep 2023',
        company: 'Coderhouse',
        role: 'Tutor de ReactJS',
        bullets: [
          'Acompañé a más de 30 estudiantes en el aprendizaje de React, incluyendo componentes funcionales, custom hooks, manejo de estado y patrones de frontend.',
          'Realicé revisiones de código y sesiones de debugging, brindando feedback sobre calidad, arquitectura y rendimiento de los componentes.',
        ],
      },
      {
        date: 'May — Jul 2021',
        company: 'GlobalTech SCM Solutions',
        role: 'Desarrollador Full Stack',
        bullets: [
          'Desarrollé una aplicación móvil con React Native para modernizar un sistema de gestión de almacenes (WMS), permitiendo gestionar el inventario en tiempo real desde dispositivos móviles.',
          'Desarrollé APIs RESTful con NestJS y SQL Server para soportar operaciones de inventario y gestión de almacenes.',
        ],
      },
      {
        date: 'Mar — Abr 2021',
        company: 'Alkemy',
        role: 'Desarrollador Full Stack',
        bullets: [
          'Desarrollé un sitio web responsivo para una organización sin fines de lucro utilizando HTML, CSS y JavaScript.',
          'Trabajé bajo metodologías ágiles, principalmente Scrum, mientras ampliaba mi experiencia con React, Node.js, Material UI, Git y GitHub.',
        ],
      },
    ] satisfies TimelineEntry[],
  },
  projects: {
    viewRepository: 'Ver repositorio',
    privateLabel: 'Proyecto privado',
    items: [
      {
        key: 'webbuilder',
        title: 'WebBuilder',
        private: true,
        description:
          'Un sistema de componentes potenciado por IA para generar landing pages de marca listas para producción a partir de un código base compartido. Construido con React, TypeScript, Tailwind CSS, GraphQL, TanStack Query, n8n, Turborepo y Bun.',
        stack: [
          'React',
          'TypeScript',
          'Next.js',
          'Tailwind CSS',
          'GraphQL',
          'TanStack Query',
          'n8n',
          'AI',
          'Turborepo',
        ],
      },
      {
        key: 'omnivest-ai',
        title: 'OmniVest AI',
        description:
          'Un ecosistema de finanzas personales y diario de trading para gestionar portfolios, registrar operaciones con derivados y automatizar flujos de trabajo financieros con IA.',
        stack: ['TypeScript', 'AI', 'Fintech'],
      },
      {
        key: 'jdb-portfolio',
        title: 'jdb-portfolio',
        description:
          'Un portfolio personal moderno construido con Next.js, React y Tailwind CSS, diseñado para mostrar proyectos de frontend mediante animaciones interactivas y una interfaz limpia y responsiva.',
        stack: ['Next.js', 'React', 'Tailwind CSS', 'Motion'],
      },
    ] satisfies ProjectEntry[],
  },
  contact: {
    description:
      'Disponible para oportunidades como Frontend Engineer y proyectos freelance seleccionados. Hablemos sobre lo que estás construyendo.',
    bookACall: 'Agendar una llamada',
    callDuration: '30 min — Calendly',
  },
  form: {
    emailLabel: 'Email',
    subjectLabel: 'Asunto',
    messageLabel: 'Mensaje',
    emailPlaceholder: 'juan@ejemplo.com',
    subjectPlaceholder: 'Asunto',
    messagePlaceholder: 'Mensaje',
    submit: 'Enviar mensaje',
    validation: {
      email: 'El email es obligatorio',
      subject: 'El asunto es obligatorio',
      message: 'El mensaje es obligatorio',
    },
    success: '¡Gracias por tu mensaje!',
    error: 'Error al enviar el mensaje',
  },
  footer: {
    tagline:
      'Frontend Engineer especializado en React, TypeScript y Next.js, construyendo aplicaciones web rápidas, escalables y mantenibles desde Buenos Aires, Argentina.',
    sections: 'Secciones',
    elsewhere: 'Más enlaces',
  },
}

export const translations = { en, es } satisfies Record<Locale, typeof en>

export type Dictionary = typeof en
