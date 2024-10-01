// gp-site/utils/api.ts

import { API_BASE_URL } from './constants';

/**
 * A generic function to make API requests.
 * @param endpoint - The API endpoint to call.
 * @param method - The HTTP method to use (GET, POST, etc.).
 * @param headers - Optional headers to include in the request.
 * @param body - Optional body to include in the request.
 * @returns A promise that resolves to the response data.
 */
async function apiRequest(endpoint: string, method: string = 'GET', headers: HeadersInit = {}, body: any = null): Promise<any> {
  const url = `${API_BASE_URL}${endpoint}`;
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : null,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
}

/**
 * Example function to get products from the API.
 * @returns A promise that resolves to the list of products.
 */
export async function getProducts(): Promise<any> {
  return apiRequest('/products');
}

/**
 * Example function to get a single product by ID from the API.
 * @param id - The ID of the product to retrieve.
 * @returns A promise that resolves to the product data.
 */
export async function getProductById(id: string): Promise<any> {
  return apiRequest(`/products/${id}`);
}

/**
 * Example function to submit a new order to the API.
 * @param orderData - The data of the order to submit.
 * @returns A promise that resolves to the response from the API.
 */
export async function submitOrder(orderData: any): Promise<any> {
  return apiRequest('/orders', 'POST', {}, orderData);
}

