import { fetchUsers } from '../useFetchUsers';

it('Fetched users should be 10', async () => {
  expect.assertions(1);
  const { data } = await fetchUsers();
  expect(data.length).toEqual(10);
});
