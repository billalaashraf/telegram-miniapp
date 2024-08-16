import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface HttpClientInstance {
  get: <T>(url: string, config?: AxiosRequestConfig) => Promise<T>;
  post: <T>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<T>;
}


function httpClient(baseURL: string): HttpClientInstance {
  const instance: AxiosInstance = axios.create({
    baseURL,
    timeout: 10000, // 10 seconds
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response: AxiosResponse<T> = await instance.get(url, config);
    return response.data;
  };

  const post = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    console.log(`${baseURL}${url}`)
    const response: AxiosResponse<T> = await instance.post(url, data, config);
    return response.data;
  };

  return { get, post };
}

export default httpClient;