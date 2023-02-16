import { useQuery } from '@tanstack/react-query';

import { githubApi } from 'api/githubApi';

const getUserRepos = async (): Promise<any> => {
  const data = await githubApi.get<any>('/user/repos');

  return data;
};

export const useGetRepos = () => {
  const queryRepos = useQuery(['repos'], getUserRepos);

  return {
    queryRepos,
  };
};
