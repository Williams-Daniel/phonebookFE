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
export const updateAvatar = async(data:any, contactID:string)=>{
    try {

        const config:any = {
            "content-type":"multipart/form-data"
        }

        return await axios.patch(`${URL}/${contactID}/update-contact-avatar`,config, data).then((res:any)=>{
            console.log("res",res)
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const allContacts = async()=>{
    try {
        return await axios.get(`${URL}/find-contacts`).then((res:any)=>{
            console.log(res)
            return res.data.data
            
        })
    } catch (error) {
        console.log(error)
    }
}