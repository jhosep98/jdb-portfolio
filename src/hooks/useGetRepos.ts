import { useQuery } from '@tanstack/react-query';

import { githubApi } from 'api/githubApi';

const getUserRepos = async () => {
  const { data } = await githubApi.get('/user/repos');

  return data;
};

export const useGetRepos = () => {
  const queryRepos = useQuery({ queryKey: ['repos'], queryFn: getUserRepos });

  return {
    queryRepos,
  };
};
