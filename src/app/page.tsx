import About from '@/components/about'
import Contact from '@/components/contact'
import Experience from '@/components/experience'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Testimonials from '@/components/testimonials'
import { PROFILE, SITE_URL } from '@/lib/constants'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: PROFILE.name,
  url: SITE_URL,
  image: PROFILE.avatar,
  jobTitle: 'Frontend Engineer',
  email: `mailto:${PROFILE.email}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Buenos Aires',
    addressCountry: 'AR',
  },
  sameAs: [PROFILE.github, PROFILE.linkedIn],
  knowsAbout: ['React', 'TypeScript', 'Next.js', 'Frontend Engineering', 'Web Development'],
}

export default function Home() {
  return (
    <>
      <script type='application/ld+json'>
        {JSON.stringify(personJsonLd).replace(/</g, '\\u003c')}
      </script>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  )
}
