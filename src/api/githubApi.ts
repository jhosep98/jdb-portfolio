import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

export const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    token: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
});
