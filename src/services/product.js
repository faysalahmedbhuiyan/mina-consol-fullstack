import API from '../api/axios'

// ✅ Named exports for CRUD
export const getProducts = () => API.get('/products')

export const createProduct = data =>
  API.post('/products', data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })

export const updateProduct = (id, data) =>
  API.post(`/products/${id}?_method=PUT`, data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })

export const deleteProduct = id => API.delete(`/products/${id}`)
