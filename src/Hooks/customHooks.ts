import  {useQuery} from "@tanstack/react-query"
import { allContacts } from "../Apis/ContactAPis"


export const useGetAllContacts = ()=>{
    const {data,isLoading} = useQuery({
        queryKey:["allContacts"],
        queryFn: allContacts
    })
    return{data,isLoading}
}