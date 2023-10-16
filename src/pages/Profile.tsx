import Header from "../components/statics/Header"
import {AiFillCamera} from "react-icons/ai"
// import img from "../assets/DSC_7556-01~2.jpeg"
import {BiSolidEditAlt}  from "react-icons/bi"
import img1 from "../assets/img for github acct.jpeg"
import { useState } from "react"
import { updateAvatar } from "../Apis/ContactAPis"
import { useParams } from "react-router-dom"


const Profile = () => {

  const [avatar,setAvatar] = useState<string>(img1)
  const [image,setImage] = useState<string>("")

  const {contactID} = useParams()
  const onHandleImage = (el:any)=>{


    const localImage = el.target.files[0]
    const saveImage = URL.createObjectURL(localImage)
    setAvatar(saveImage)
    setImage(localImage)
  }

  const handleSubmit = ()=>{
    const formData:any = new FormData()

  formData.append("avatar",image)

  updateAvatar(contactID, formData).then((res:any)=>{
    console.log("res",res)
  })
  }

  return (
    <div>
        <Header/>
        <div className="
        w-[100%]
        h-[705px]
        bg-slate-200
        flex
        justify-center
        items-center
        ">
            <div className="
            w-[60%]
            h-[60%]
            bg-white
            rounded-[20px]
            flex
            ">
                <div className="
                w-[50%]
                h-[100%]
                rounded-l-[20px]
                ">
                  <img src={avatar} className="
                  h-[100%]
                  w-[100%]
                  object-cover
                  rounded-l-[20px]
                  "/>
                  <label className="
                  w-[50px]
                  h-[50px]
                  flex
                  rounded-[50%]
                  bg-[rgb(0,0,0)]
                  relative
                  bottom-[413px]
                  left-[260px]
                  justify-center
                  items-center
                  "
                  htmlFor="image"
                  >
                    <AiFillCamera className="
                    text-[white]
                    "/>
                  </label>
                  <input className="
                  hidden
                  "
                  id="image"
                  placeholder="image"
                  type="file"
                  accept="image/png, image/jpg,image/jpeg"
                  onChange={onHandleImage}
                  />
                  <button className="
                  w-[65px]
                  h-[45px]
                  relative
                  bottom-[460px]
                  left-[315px]
                  bg-black
                  rounded-[10px]
                  text-white
                  text-[14px]
                  flex
                  justify-center
                  items-center
                  "
                  type="submit"
                  onClick={()=>{
                    handleSubmit()
                  }}
                  >update</button>
                </div>
                <div className="
                w-[50%]
                h-[100%]
                bg-slate-800
                rounded-r-[20px]
                flex
                flex-col
                justify-center
                items-center
                ">
                  <div className="
                  flex
                  justify-between
                  w-[80%]
                  items-center
                  mb-[15px]
                  ">
                    <div className="
                    text-[20px]
                  text-[#e0e0e0]
                  font-[600]
                    ">Williams</div>
                    <BiSolidEditAlt className="
                  text-[#e0e0e0]
                  text-[20px]
                    "/>
                  </div>
                  <div className="
                  flex
                  justify-between
                  mb-[15px]
                  w-[80%]
                  items-center
                  ">
                    <div className="
                    text-[20px]
                  text-[#e0e0e0]
                  font-[600]
                    ">Daniel</div>
                    <BiSolidEditAlt className="
                  text-[#e0e0e0]
                  text-[20px]
                    "/>
                  </div>
                  <div className="
                  mb-[15px]
                  w-[80%]
                  ">
                  <div className="
                  text-[20px]
                  text-[#e0e0e0]
                  font-[600]
                  ">tbbt@gmail.com</div>
                  </div>
                  <div className="
                  mb-[15px]
                  w-[80%]
                  ">
                  <div className="
                  text-[20px]
                  text-[#e0e0e0]
                  font-[600]
                  ">09093457654</div>
                  </div>
                  <div className="
                  w-[80%]
                  ">
                  <div className="
                  text-[20px]
                  text-[#e0e0e0]
                  font-[600]
                  ">Family</div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile