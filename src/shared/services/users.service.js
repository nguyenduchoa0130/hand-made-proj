import axiosClient from '../interceptors';

const UserService = {
  getAllUsers: async () => {
    const { data: responseResults } = await axiosClient.get('/api/user/getAll');
    return responseResults.data;
  },
};

export default UserService;
