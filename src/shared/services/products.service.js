import BaseService from "./base-service";

class ProductService extends BaseService {
  constructor() {
    super('/api/product');
  }

  async getAllProducts(payload) {
    try {
      const { data } = await this.axiosClient.get(`${this.path}/get-all`, { params: payload });
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async createProducts(payload) {
    try {
      const { data } = await this.axiosClient.post(`${this.path}/create`, payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      } );
      return data.data;
    } catch (error) {
      throw error;
    }
  }
  // createMarker: async (payload) => {
  //   const { data } = await axiosClient.post('/api/markers', payload, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   });
  //   return data.responseData;
  // },

}

export const productService = new ProductService();