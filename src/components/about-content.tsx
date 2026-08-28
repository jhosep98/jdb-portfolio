import type * as React from 'react'
import AboutContentView from '@/components/about-content-view'
import { GITHUB_API_URL } from '@/lib/constants'
import type { ResponseGithubUserType } from '@/lib/types'

const DEFAULT_USER_DATA = {
  avatar_url:
    'https://avatars.githubusercontent.com/u/52141195?s=400&u=113ba6e72b0d3f39b6a00165e4a7d6d8cc56e777&v=4',
  name: 'Jhosep Davila',
}

const GITHUB_TOKEN = process.env.GITHUB_TOKEN

async function fetchGithubUser(): Promise<ResponseGithubUserType | null> {
  try {
    if (!GITHUB_TOKEN) {
      console.error(
        'GitHub token is not available. Please set the GITHUB_TOKEN environment variable.',
      )
      return {
        success: false,
        error: 'Configuration error: GitHub token is missing.',
      }
    }

    const response = await fetch(GITHUB_API_URL || '', {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        message: `Request failed with status ${response.status}`,
      }))

      return {
        success: false,
        error: errorData.message || `Failed to fetch user data (${response.status})`,
      }
    }

    const data = await response.json()

    return {
      success: true,
      data,
    }
  } catch (error) {
    console.error('Unexpected error fetching GitHub user:', error)
    return {
      success: false,
      error: 'An unexpected error occurred while fetching user data.',
    }
  }
}

const AboutContent: React.FC = async () => {
  const result = await fetchGithubUser()
  const user = result?.success ? result.data : DEFAULT_USER_DATA

  return (
    <AboutContentView
      avatarUrl={user?.avatar_url ?? DEFAULT_USER_DATA.avatar_url}
      name={user?.name}
    />
  )
}

export default AboutContent
