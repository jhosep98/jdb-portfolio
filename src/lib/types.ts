export type Language = 'es' | 'en'

export type ResponseGithubUserType = {
  success: boolean
  data?: GithubUser
  error?: string
}

export interface GithubUser {
  id: number
  login: string
  name: string
  avatar_url: string
  html_url: string
  bio: string
  location: string
  email: string | null
  followers: number
  following: number
  public_repos: number
  created_at: string
  updated_at: string
}

export interface GithubRepo {
  name: string
  stargazers_count: number
  html_url: string
  description: string
}

export interface GithubStarsResponse {
  totalStars: number
  repositories: {
    name: string
    stars: number
    url: string
  }[]
}
