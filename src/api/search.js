import { sampleTicket } from '@/FakeData/ticket'
import { fakeRequest } from '@/FakeData/utils'
import { apiClient } from '@/api/request.js'

const apiSearch = async (filters) => {
  var data = sampleTicket

  if (filters?.q) {
    data = data.filter((post) => post.forth.includes(filters.q))
  }

  if (filters?.destination) {
    data = data.filter((post) => post.back.includes(filters.destination))
  }

  if (filters?.travelDate) {
    data = data.filter((post) => post.limit.includes(filters.travelDate))
  }

  if (filters?.passengerCount) {
    data = data.filter((post) => post.price.includes(filters.passengerCount))
  }

  const result = await fakeRequest(data)

  return result
}

const searchInput = async (value) => {
  return apiClient.get(`/search?query=${value}`)
}

const apiSearchFlight = (data) => {
  return apiClient.post('/flight', data)
}

// const apiGetFlightDetail = (flight_id) => {
//   return apiClient.get(`/flight/${flight_id}`)
// }

export { apiSearch, searchInput, apiSearchFlight, apiGetFlightDetail }
