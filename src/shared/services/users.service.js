import axiosClient from '../interceptors';

export const UserService = {
  getAllUsers: async () => {
    const { data: responseResults } = await axiosClient.get('/api/user/getAll');
    return responseResults.data;
  },
};
