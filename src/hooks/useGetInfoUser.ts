import type { GithubUser } from '../types'

export const useGetInfoUser = async () => {
  try {
    const response = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
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
