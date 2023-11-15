import {sampleTicket} from '@/FakeData/ticket'
import {fakeRequest} from '@/FakeData/utils'
import {apiClient} from "@/api/request.js";

const apiSearch = async (filters) => {
  var data = sampleTicket

  if (filters?.q) {
    data = data.filter((post) => post.forth.includes(filters.q))
  }

  if (filters?.destination) {
    data = data.filter((post) => post.destination.includes(filters.destination))
  }
  const result = await fakeRequest(data)

  return result
}
const searchInput = async (value)=>{
  return apiClient.get(`/search?query=${value}`)
}

export {apiSearch,searchInput}
