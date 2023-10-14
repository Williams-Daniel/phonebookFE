import Header from "../components/statics/Header"
import {AiOutlineStar,AiOutlineCamera} from "react-icons/ai"
import {BiSolidEditAlt,BiDotsVerticalRounded} from "react-icons/bi"
import img from "../assets/dummy-prod-1.jpg"
import { useState } from "react"

const HomePage = () => {

  const [avatar,setAvatar] = useState<string>(img)
  const [image,setImage] = useState<string>("")

  const onHandleImage = (el:any)=>{
    const localImage = el.target.file[0]
    const saveImage = URL.createObjectURL(localImage)
    setAvatar(saveImage)
    setImage(localImage)
  }


  const formData = new FormData()
  formData.append("avatar",image)

  // MdUpdate(formData).then((res)=>{
  //   console.log(first)
  // })


  return (
    <div>
      <Header/>
      <div className="
      min-h-[100vh]
      w-full
      bg-slate-200
      flex
      justify-center
      ">
        <div className="
        w-[90%]
        min-h-[100vh]
        mt-[10px]
        ">
          <div className="
          w-[350px]
          h-[350px]
          bg-slate-300
          rounded-[10px]
          ">
            <div className="
            w-[100%]
            mt-[10px]
            flex
            flex-col
            items-center
            ">
              <div className="
              flex
              w-[100%]
              justify-end
              ">
                <AiOutlineStar className="
                mt-[10px]
                text-[25px]
                "
                />
                <BiSolidEditAlt className="
                ml-[15px]
                mt-[10px]
                text-[25px]
                "/>
                <BiDotsVerticalRounded className="
                ml-[10px]
                text-[25px]
                mt-[10px]
                "/>
              </div>
              <div className="
              w-[100%]
              h-[200px]
              flex
              flex-col
              items-center
              justify-center
              ">
                <div className="
                w-[123px]
                h-[123px]
                rounded-[50%]
                bg-white
                flex
                justify-center
                items-center
                ">
                <img className="
                w-[120px]
                h-[120px]
                rounded-[50%]
                bg-slate-500
                object-cover
                "
                src={avatar}
                />
                </div>
                <div className="
                flex
                mt-[5px]
                ">
                <div className="
                px-[10px]
                py-[2px]
                bg-slate-800
                text-white
                text-[12px]
                rounded-[30px]
                mr-[10px]
                ">update</div>
                <label className="
                w-[25px]
                h-[25px]
                rounded-[50%]
                flex
                justify-center
                items-center
                bg-slate-800
                "
                htmlFor="image"
                ><AiOutlineCamera className="
                text-white
                "/></label>
                </div>
                <input className="
                bg-[black]
                hidden
                "
                type="file"
                placeholder="image"
                accept="image/png,image/jpg,image/jpeg,"
                id="image"
                onChange={onHandleImage}
                />
              </div>
              <div className="
              w-[90%]
              h-[100px]
              bg-[white]
              rounded-[10px]
              flex
              justify-center
              ">
                <div className="
                w-[90%]
                flex
                flex-col
                items-center
                ">
                  <div className="
                  flex
                  text-[25px]
                  font-[500]
                  justify-center
                  mt-[20px]
                  ">
                  <div>Williams</div>
                  <div className="
                  ml-[5px]
                  ">Daniel</div>
                  </div>
                  <div className="
                  text-[18px]
                  font-[600]
                  ">09091468987</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage