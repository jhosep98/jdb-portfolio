import { useQuery } from '@tanstack/react-query';

import { githubApi } from 'api/githubApi';
import { UserInfoModel } from 'interfaces';

const getUserInfo = async () => {
  const { data } = await githubApi.get<UserInfoModel>('/user');

  return data;
};

export const useGetUserInfo = () => {
  const queryUserInfo = useQuery({ queryKey: ['user-info'], queryFn: getUserInfo });

  return {
    queryUserInfo,
  };
};
