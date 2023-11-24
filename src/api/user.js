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

const apiGetProfile = () => {
  return apiClient.get('/profile')
}


const apiUpdateCurrentUser = (data) => {
  return apiClient.put('/profile', data)
}

export {apiLoginUser, apiRegisterUser, apiGetCurrentUser, apiGetProfile, apiUpdateCurrentUser}
