import { fetchTodos } from '../useFetchTodos';

it('Fetched todos should be 200', async () => {
  expect.assertions(1);
  const { data } = await fetchTodos();
  expect(data.length).toEqual(200);
});
