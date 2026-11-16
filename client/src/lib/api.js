import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      return Promise.reject(new Error('Request timeout. Please try again.'));
    }
    if (!error.response) {
      return Promise.reject(new Error('Network error. Please check your connection.'));
    }
    const message = error.response.data?.error || error.response.data?.message || 'An error occurred';
    return Promise.reject(new Error(message));
  }
);

export const productsApi = {
  getAll: (params = {}) => api.get('/products', { params }).then(r => r.data),
  getFeatured: () => api.get('/products/featured').then(r => r.data),
  getCategories: () => api.get('/products/categories').then(r => r.data),
  getBySlug: (slug) => api.get(`/products/slug/${slug}`).then(r => r.data),
  getById: (id) => api.get(`/products/${id}`).then(r => r.data),
};

export const inquiriesApi = {
  create: (data) => api.post('/inquiries', data).then(r => r.data),
  getAll: () => api.get('/inquiries').then(r => r.data),
  getById: (id) => api.get(`/inquiries/${id}`).then(r => r.data),
  updateStatus: (id, status) => api.patch(`/inquiries/${id}/status`, { status }).then(r => r.data),
  delete: (id) => api.delete(`/inquiries/${id}`).then(r => r.data),
};

export default api;