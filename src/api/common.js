import {apiClient} from './request'

const apiGetCities = async () => {
    const result = await apiClient.get('/')

    return result.data.cities
}


export { apiGetCities }