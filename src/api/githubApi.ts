import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/user/',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});
