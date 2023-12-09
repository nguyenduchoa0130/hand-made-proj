import BaseService from './base-service';

class ProductService extends BaseService {
  constructor() {
    super('/api/product');
  }

  async getAllProducts(params) {
    try {
      const { data } = await this.axiosClient.get(`${this.path}/get-all`, { params });
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
      });
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async updateProducts(payload, id) {
    try {
      const { data } = await this.axiosClient.put(`${this.path}/update/${id}`, payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data.data;
    } catch (error) {
      throw error;
    }
  }
  async deleteProducts(id) {
    try {
      const { data } = await this.axiosClient.delete(`${this.path}/delete/${id}`);
      return data.data;
    } catch (error) {
      throw error;
    }
  }
}

export const productService = new ProductService();
