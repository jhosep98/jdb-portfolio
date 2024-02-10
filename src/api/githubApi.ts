import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `Bearer ${import.meta.env.PROD ? import.meta.env.GITHUB_TOKEN : import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});
