import type { GithubUser } from '../types'

export const useGetInfoUser = async (): Promise<GithubUser> => {
  try {
    const response = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    })

    if (!response?.ok) {
      const errorData = await response?.json()

      throw new Error(`GitHub API Error: ${errorData.message || 'Failed to fetch user data'}`)
    }

    const data: GithubUser = await response?.json()

    return data
  } catch (error) {
    throw new Error(`Failed to fetch GitHub user information ${error}`)
  }
}
