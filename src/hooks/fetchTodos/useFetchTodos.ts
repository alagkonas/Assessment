import { useQuery } from 'react-query';
import axios from 'axios';
import { TODOS_ENDPOINT } from '../../config';

export const fetchTodos = async () => {
  const results = await axios.get(TODOS_ENDPOINT);
  return results;
};

export const useFetchTodos = () => {
  const { data, isLoading } = useQuery('fetch-todos', fetchTodos);

  const response = {
    data: data?.data,
    isLoading,
  };

  return response;
};
