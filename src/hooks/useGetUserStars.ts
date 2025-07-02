import type { GithubRepo, GithubStarsResponse } from '../types'

export const useGetUserStars = async (username: string): Promise<GithubStarsResponse> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch repositories')
    }

    const repos: GithubRepo[] = await response.json()

    const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)

    return {
      totalStars,
      repositories: repos.map((repo) => ({
        name: repo.name,
        stars: repo.stargazers_count,
        url: repo.html_url,
      })),
    }
  } catch (error) {
    console.error('Error fetching user stars:', error)
    throw error
  }
}
