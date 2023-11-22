import {apiClient} from './request'

const apiLoginUser = (data) => {
  return apiClient.post('/auth/login', data)
}

const apiRegisterUser = async (data) => {
  await apiClient.get('/sanctum/csrf-cookie')
  return apiClient.post('/register', data)
}

const apiGetCurrentUser = () => {
  return apiClient.get('/auth/me')
}

export {apiLoginUser, apiRegisterUser, apiGetCurrentUser}
