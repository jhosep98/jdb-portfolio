import type { GithubUser } from '../types'

export const GITHUB_API_URL = 'https://api.github.com/user'

/**
 * @params Github token
 * Fetches the authenticated user's information from the GitHub API.
 * @returns {Promise<GithubUser>} A promise that resolves to the GithubUser object.
 * @throws {Error} If the fetch fails, the API returns an error, or the GitHub token is missing.
 */
export const getGithubUser = async ({
  token,
}: {
  token: string
}): Promise<GithubUser> => {
  if (!token) {
    console.error(
      'GitHub token is not available. Please set the GITHUB_TOKEN environment variable.',
    )
    throw new Error('Configuration error: GitHub token is missing.')
  }

  const response = await fetch(GITHUB_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json',
    },
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: `Request failed with status ${response.status}`,
    }))
    throw new Error(`GitHub API Error: ${errorData.message || 'Failed to fetch user data'}`)
  }

  const data = await response.json()

  return data as GithubUser
}
