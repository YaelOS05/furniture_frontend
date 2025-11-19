import axios, {AxiosInstance, AxiosError} from 'axios';
import {ApiError} from './ApiError.ts';

class ApiClient{
  private static instance: AxiosInstance;

  private constructor() {}

  static getInstance(): AxiosInstance {
    if(!ApiClient.instance) {
      ApiClient.instance = axios.create({
        baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080",
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
        },
      });

      ApiClient.instance.interceptors.response.use(
        (response) => response,
        (error: AxiosError) => {
          throw new ApiError(error);
        }
        );
    }

    return ApiClient.instance;
  }
}

export default ApiClient;

// const api = axios.create({
//   baseURL: 'http://localhost:8080', // tu backend
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export default api;
