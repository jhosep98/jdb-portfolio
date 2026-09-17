import type * as React from 'react'
import AboutContentView from '@/components/about-content-view'
import { PROFILE } from '@/lib/constants'

const AboutContent: React.FC = () => (
  <AboutContentView avatarUrl={PROFILE.avatar} name={PROFILE.name} />
)

export default AboutContent
