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

const apiOrder = () => {
  return apiClient.get('profile/user_orders')
}

const apiUpdateCurrentUserAvatar = async (file) => {
  const formData = new FormData()
  formData.append('iamge', file)

  return apiClient.put('/profile', formData)
}



const apiUpdateCurrentUser = async (data) => {
  return apiClient.put('/profile', data)
}

export {apiLoginUser, apiRegisterUser, apiGetCurrentUser, apiGetProfile, apiUpdateCurrentUser, apiOrder, apiUpdateCurrentUserAvatar}

