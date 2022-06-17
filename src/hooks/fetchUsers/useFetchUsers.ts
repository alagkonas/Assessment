import { useQuery } from 'react-query';
import axios from 'axios';
import { USERS_ENDPOINT } from '../../config';

export const fetchUsers = async () => {
  const results = await axios.get(USERS_ENDPOINT);
  return results;
};

export const useFetchUsers = () => {
  const { data, isLoading } = useQuery('fetch-users', fetchUsers);

  const response = {
    data: data?.data,
    isLoading,
  };

  return response;
};
