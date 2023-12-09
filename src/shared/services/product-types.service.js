import axiosClient from '../interceptors';

const ProductTypesService = {
  create: async (formData) => {
    const { data: responseResults } = await axiosClient.post('/api/product-types', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return responseResults.data;
  },
  getAll: async () => {
    const { data: responseResults } = await axiosClient.get('/api/product-types');
    return responseResults.data;
  },
};

export default ProductTypesService;
