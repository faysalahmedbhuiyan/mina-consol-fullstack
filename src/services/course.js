import axios from '../api/axios'

export const getCourses = () => axios.get('/courses')

export const createCourse = data =>
  axios.post('/courses', data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })

export const updateCourse = (id, data) =>
  axios.post(`/courses/${id}?_method=PUT`, data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })

export const deleteCourse = id => axios.delete(`/courses/${id}`)
