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
  },
  sections: {
    about: { eyebrow: 'About', title: 'About me' },
    experience: { eyebrow: 'Experience', title: 'Experience' },
    work: { eyebrow: 'Work', title: 'Selected work' },
    testimonials: { eyebrow: 'Testimonials', title: 'What people say' },
    contact: { eyebrow: 'Contact', title: "Let's build something" },
  },
  hero: {
    badge: 'Buenos Aires, AR — Full Stack Developer',
    title: "I'm here to help you build your next project!",
    description:
      'Crafting optimized, scalable interfaces — from component libraries and Next.js landing pages to CRM modules over GraphQL.',
    secondaryCta: 'See selected work',
  },
  about: {
    role: 'Full Stack Developer',
    location: 'Buenos Aires, Argentina',
    bio: (startYear: number, years: number) =>
      `With a passion for technology and web development ignited in ${startYear}, I bring ${years} year${years === 1 ? '' : 's'} of hands-on experience in crafting optimized and scalable user interfaces.`,
    metadata: {
      specialization: 'Specialization',
      specializationValue: 'Full Stack Developer',
      experienceLevel: 'Experience Level',
      experienceLevelValue: 'Semi-Senior',
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
        role: 'Front-end Developer',
        current: true,
        bullets: [
          'Developed component library using Storybook and MUI.',
          'Built landing pages with Next.js, optimizing SEO, performance, and responsiveness.',
          'Integrated CRM platform modules using GraphQL, Apollo Server, and Axios in a monorepo environment.',
        ],
      },
      {
        date: 'Jul — Dec 2023',
        company: 'CoderHouse',
        role: 'Tutor ReactJS',
        bullets: [
          'Reviewed and provided feedback on student pre-deliveries, ensuring code quality and best practices.',
          'Actively assisted in live sessions by offering real-time support, clarifying concepts, and answering student queries via chat.',
        ],
      },
      {
        date: 'May — Jul 2021',
        company: 'GlobalTech SCM Solutions',
        role: 'Full Stack Developer',
        bullets: [
          'Migration of a desktop Warehouse Management System (WMS) to React Native, enabling seamless inventory management via mobile devices and improving operational efficiency.',
          'Developed and optimized a RESTful API using NestJS, designing scalable endpoints to handle inventory and warehouse operations. Integrated SQL Server as the database, ensuring efficient data management and retrieval.',
        ],
      },
      {
        date: 'Mar — Apr 2021',
        company: 'Alkemy',
        role: 'Full Stack Developer',
        bullets: [
          'Designed and developed a fully responsive website for a non-profit organization in Argentina, using HTML, CSS, and JavaScript to deliver a professional and user-friendly experience.',
          'Continuously expanding technical expertise by learning and applying Node.js, React, Material-UI, Git, and GitHub, staying up to date with the latest industry trends and best practices.',
          'Experienced in Agile methodologies, particularly Scrum, ensuring efficient collaboration and streamlined development workflows.',
        ],
      },
    ] satisfies TimelineEntry[],
  },
  projects: {
    viewRepository: 'View repository',
    items: [
      {
        key: 'omnivest-ai',
        title: 'OmniVest AI',
        description:
          'OmniVest AI is a personal finance ecosystem and trading journal designed to consolidate your portfolio, track derivatives trading, and leverage AI automation for smart financial insights.',
        stack: ['TypeScript', 'AI', 'Fintech'],
      },
      {
        key: 'jdb-portfolio',
        title: 'jdb-portfolio',
        description:
          "A modern, responsive personal portfolio website built with NextJS, React, and TailwindCSS. This portfolio showcases Jhosep Davila's work as a Full Stack Developer with interactive animations and a clean, professional design.",
        stack: ['Next.js', 'Tailwind', 'Motion'],
      },
    ] satisfies ProjectEntry[],
  },
  contact: {
    description:
      "Open to front-end and full-stack work. Book a slot and we talk it through, or drop me a line and I'll get back to you.",
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
      'Full Stack Developer building clean, performant interfaces from Buenos Aires, Argentina.',
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
  },
  sections: {
    about: { eyebrow: 'Sobre mí', title: 'Sobre mí' },
    experience: { eyebrow: 'Experiencia', title: 'Experiencia' },
    work: { eyebrow: 'Proyectos', title: 'Proyectos destacados' },
    testimonials: { eyebrow: 'Testimonios', title: 'Lo que dicen' },
    contact: { eyebrow: 'Contacto', title: 'Construyamos algo' },
  },
  hero: {
    badge: 'Buenos Aires, AR — Desarrollador Full Stack',
    title: '¡Estoy para ayudarte a construir tu próximo proyecto!',
    description:
      'Construyo interfaces optimizadas y escalables — desde librerías de componentes y landing pages con Next.js hasta módulos de CRM sobre GraphQL.',
    secondaryCta: 'Ver proyectos destacados',
  },
  about: {
    role: 'Desarrollador Full Stack',
    location: 'Buenos Aires, Argentina',
    bio: (startYear: number, years: number) =>
      `Con una pasión por la tecnología y el desarrollo web que nació en ${startYear}, aporto ${years} año${years === 1 ? '' : 's'} de experiencia práctica creando interfaces de usuario optimizadas y escalables.`,
    metadata: {
      specialization: 'Especialización',
      specializationValue: 'Desarrollador Full Stack',
      experienceLevel: 'Nivel de experiencia',
      experienceLevelValue: 'Semi-Senior',
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
        role: 'Desarrollador Front-end',
        current: true,
        bullets: [
          'Desarrollé una librería de componentes usando Storybook y MUI.',
          'Construí landing pages con Next.js, optimizando SEO, performance y responsividad.',
          'Integré módulos de una plataforma CRM usando GraphQL, Apollo Server y Axios en un entorno monorepo.',
        ],
      },
      {
        date: 'Jul — Dic 2023',
        company: 'CoderHouse',
        role: 'Tutor ReactJS',
        bullets: [
          'Revisé y di feedback sobre las pre-entregas de los estudiantes, asegurando calidad de código y buenas prácticas.',
          'Asistí activamente en clases en vivo, brindando soporte en tiempo real, aclarando conceptos y respondiendo consultas por chat.',
        ],
      },
      {
        date: 'May — Jul 2021',
        company: 'GlobalTech SCM Solutions',
        role: 'Desarrollador Full Stack',
        bullets: [
          'Migración de un sistema de gestión de almacenes (WMS) de escritorio a React Native, habilitando la gestión de inventario desde dispositivos móviles y mejorando la eficiencia operativa.',
          'Desarrollé y optimicé una API RESTful con NestJS, diseñando endpoints escalables para operaciones de inventario y almacén. Integré SQL Server como base de datos, asegurando una gestión y recuperación de datos eficiente.',
        ],
      },
      {
        date: 'Mar — Abr 2021',
        company: 'Alkemy',
        role: 'Desarrollador Full Stack',
        bullets: [
          'Diseñé y desarrollé un sitio web totalmente responsive para una organización sin fines de lucro en Argentina, usando HTML, CSS y JavaScript para lograr una experiencia profesional y amigable.',
          'Amplié continuamente mi experiencia técnica aprendiendo y aplicando Node.js, React, Material-UI, Git y GitHub, manteniéndome al día con las últimas tendencias y buenas prácticas de la industria.',
          'Experiencia con metodologías ágiles, particularmente Scrum, asegurando una colaboración eficiente y flujos de trabajo optimizados.',
        ],
      },
    ] satisfies TimelineEntry[],
  },
  projects: {
    viewRepository: 'Ver repositorio',
    items: [
      {
        key: 'omnivest-ai',
        title: 'OmniVest AI',
        description:
          'OmniVest AI es un ecosistema de finanzas personales y diario de trading pensado para consolidar tu portfolio, hacer seguimiento de operaciones con derivados y aprovechar automatización con IA para obtener insights financieros inteligentes.',
        stack: ['TypeScript', 'AI', 'Fintech'],
      },
      {
        key: 'jdb-portfolio',
        title: 'jdb-portfolio',
        description:
          'Un sitio de portfolio personal moderno y responsive construido con NextJS, React y TailwindCSS. Este portfolio muestra el trabajo de Jhosep Davila como Desarrollador Full Stack, con animaciones interactivas y un diseño limpio y profesional.',
        stack: ['Next.js', 'Tailwind', 'Motion'],
      },
    ] satisfies ProjectEntry[],
  },
  contact: {
    description:
      'Disponible para trabajos de front-end y full-stack. Reservá un horario y lo charlamos, o escribime y te respondo a la brevedad.',
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
      'Desarrollador Full Stack construyendo interfaces limpias y performantes desde Buenos Aires, Argentina.',
    sections: 'Secciones',
    elsewhere: 'Más enlaces',
  },
}

export const translations = { en, es } satisfies Record<Locale, typeof en>

export type Dictionary = typeof en
