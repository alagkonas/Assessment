import { useQuery } from 'react-query';
import axios from 'axios';
import { POSTS_ENDPOINT } from '../../config';

const fetchPosts = async () => {
  const results = await axios.get(POSTS_ENDPOINT);
  return results;
};

export const useFetchPosts = () => {
  const { data, isLoading } = useQuery('fetch-posts', fetchPosts);

  const response = {
    data: data?.data,
    isLoading,
  };

  return response;
};
