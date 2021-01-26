import axios, { AxiosInstance } from 'axios';
import 'dotenv/config';

interface Servers {
  [key: string]: string | undefined;
}

const servers: Servers = {
  [process.env.SERVER_1_NAME as string]: process.env.SERVER_1_API_URL,
  [process.env.SERVER_2_NAME as string]: process.env.SERVER_2_API_URL,
};

const api = (company: string): AxiosInstance => {
  const serverUrl: string | null = servers[company] || null;

  if (!serverUrl) {
    throw new Error('Api server URL not provided');
  }

  return axios.create({
    baseURL: serverUrl,
  });
};

export default api;
