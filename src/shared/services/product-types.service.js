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

  update: async (productTypeId, formData) => {
    const { data: responseResults } = await axiosClient.patch(
      `/api/product-types/update/${productTypeId}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return responseResults.data;
  },

  delete: async (productTypeId) => {
    await axiosClient.delete(`/api/product-types/delete/${productTypeId}`);
    return null;
  },
};

export default ProductTypesService;
