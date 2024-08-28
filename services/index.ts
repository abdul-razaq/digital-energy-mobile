import axios, { AxiosError } from 'axios';

import APIRoutes from './apis';

export async function getProducts() {
  try {
    const response = await axios.get(APIRoutes.GetProducts);
    if (response.status !== 200) {
      throw new Error('Failed to fetch products');
    }
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(`API Error: ${error.message}`);
    }
    throw new Error('An error occurred while fetching products');
  }
}
