import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
import type { ApiResponse } from './endpoints'

const baseURL = import.meta.env.VITE_API_BASE_URL || '/api'

export const http = axios.create({
  baseURL,
  timeout: 12000,
  headers: {
    'Content-Type': 'application/json'
  }
})

http.interceptors.request.use((config) => {
  const token = localStorage.getItem('LYHH_TOKEN')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  config.headers['X-Tenant-Code'] = localStorage.getItem('LYHH_TENANT') || 'lingyun'
  return config
})

http.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('[API ERROR]', error)
    return Promise.reject(error)
  }
)

export async function request<T>(config: AxiosRequestConfig): Promise<T> {
  const response = await http.request<ApiResponse<T>>(config)
  return response.data.data
}
