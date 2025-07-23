import type { GithubRepo } from '@/types'

export const useGetRepos = async (): Promise<GithubRepo[]> => {
  try {
    const response = await fetch('https://api.github.com/user/repos', {
      headers: {
        Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    })

    if (!response?.ok) {
      const errorData = await response?.json()

      throw new Error(
        `GitHub API Error: ${errorData.message || 'Failed to fetch user repositories'}`,
      )
    }

    const data: GithubRepo[] = await response?.json()

    return data
  } catch (error) {
    throw new Error(`Failed to fetch user repositories ${error}`)
  }
}
