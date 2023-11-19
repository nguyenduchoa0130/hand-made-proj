import axiosClient from '../interceptors';

export const ProductsService = {
  getAllProducts: async () => {
    const {} = await axiosClient.get('/api/product/get-all');
  },
};
