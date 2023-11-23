import {apiClient} from './request'

const apiLoginUser = (data) => {
  return apiClient.post('/login', data)
}

const apiRegisterUser = (data) => {
  return apiClient.post('/register', data)
}

const apiGetCurrentUser = () => {
  return apiClient.get('/user')
}


const apiUpdateCurrentUser = (data) => {
  return apiClient.post('/profile', data)
}

export {apiLoginUser, apiRegisterUser, apiGetCurrentUser}
