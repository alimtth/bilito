import { useQuery } from "@tanstack/react-query"
import { apiGetCities } from "../common"

const useGetCities = () => {
    return useQuery({
        queryKey: ['cities'],
        queryFn: apiGetCities
    })
}

export default useGetCities