import {sampleTicket} from '@/FakeData/ticket'
import {fakeRequest} from '@/FakeData/utils'

const apiSearch = async (filters) => {
  var data = sampleTicket

  if (filters?.q) {
    data = sampleTicket.filter((post) => post.forth.includes(filters.q))
  }
  const result = await fakeRequest(data)

  return result
}

export {apiSearch}
