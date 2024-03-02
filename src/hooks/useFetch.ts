import { getData } from "@/apis"
import { useQuery, useQueryClient } from "react-query"

export const useFetch = () => {
    const queryClient = useQueryClient()

    const { data, error, isLoading: loading } = useQuery('data', getData)
    console.log('data: ', data)
    return { data, error, loading }
}