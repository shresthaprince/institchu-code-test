import axios from 'axios'
import { addUser } from '../api';

jest.mock('axios');
const mockAxiosPost = jest.mocked(axios.post);

const TEST_USER = { name: 'Test User', email: 'test@example.com', username: 'testuser', phone: '+61410800200' };

describe('addUser', () => {
  it('successfully add user', async () => {
    mockAxiosPost.mockResolvedValueOnce({ data: { id: 11, name: 'Test User', username: 'testuser', phone: '+61410800200' } });

    const result = await addUser(TEST_USER);

    expect(result).toEqual({ id: 11, name: 'Test User', username: 'testuser', phone: '+61410800200' });
  });

  it('catches error on adding user', async () => {
    mockAxiosPost.mockRejectedValueOnce(new Error('Something went wrong'));

    await expect(addUser(TEST_USER)).rejects.toThrow('Something went wrong');
  });
});





