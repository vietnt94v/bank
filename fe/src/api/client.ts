import axios from 'axios';

import { API_URL, REQUEST_TIMEOUT_MS } from '@/const/app';

export const apiClient = axios.create({
  baseURL: API_URL,
  timeout: REQUEST_TIMEOUT_MS,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
