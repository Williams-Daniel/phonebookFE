import axios from "axios"

const URL:string ="https://phonebook-g3gq.onrender.com/api"


export const createContact = async(data:any)=>{
    try {
        return await axios.post(`${URL}/create-contact`,data).then((res:any)=>{
            console.log(res)
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}