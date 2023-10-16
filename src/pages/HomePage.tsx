import Header from "../components/statics/Header"
import {AiOutlineStar} from "react-icons/ai"
import {BiSolidEditAlt,BiDotsVerticalRounded} from "react-icons/bi"
import { useGetAllContacts } from "../Hooks/customHooks"


const HomePage = () => {

  const {data} = useGetAllContacts();
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
        h-[100%]
        mt-[20px]
        flex
        flex-wrap
        justify-between
        ">
          {
            data?.map((el:any)=>{
              return(
                <div 
                className="
          w-[350px]
          h-[350px]
          bg-slate-300
          rounded-[10px]
          mb-[20px]
          "
          key={el._id}
          >
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
              w-[130px]
              h-[130px]
              rounded-[50%]
              bg-white
              mt-[15px]
              mb-[10px]
              flex
              justify-center
              items-center
              text-[40px]
              font-[500]
              ">{el.avatar}</div>
              <div className="
              w-[90%]
              h-[140px]
              bg-[white]
              rounded-[10px]
              flex
              flex-col
              justify-center
              pl-[15px]
              ">
                <div className="
                mb-[5px]
                flex
                ">
                  <div className="
                  text-[14px]
                  font-[500]
                  ">firstName:</div>
                  <div className="
                  text-[14px]
                  font-[500]
                  ml-[5px]
                  ">{el.firstName}</div>
                </div>
                <div className="
                mb-[5px]
                flex
                ">
                  <div className="
                  text-[14px]
                  font-[500]
                  ">lastName:</div>
                  <div className="
                  text-[14px]
                  font-[500]
                  ml-[5px]
                  ">{el.lastName}</div>
                </div>
                <div className="
                mb-[5px]
                flex
                ">
                  <div className="
                  text-[14px]
                  font-[500]
                  ">Email:</div>
                  <div className="
                  text-[14px]
                  font-[500]
                  ml-[5px]
                  ">{el.email}</div>
                </div>
                <div className="
                flex
                mb-[5px]
                ">
                  <div className="
                  text-[14px]
                  font-[500]
                  ">phoneNumber:</div>
                  <div className="
                  text-[14px]
                  font-[500]
                  ml-[5px]
                  ">{el.phoneNumber}</div>
                </div>
                <div className="
                flex
                ">
                  <div className="
                  text-[14px]
                  font-[500]
                  ">Label:</div>
                  <div className="
                  text-[14px]
                  font-[500]
                  ml-[5px]
                  ">{el.label}</div>
                </div>
              </div>
            </div>
          </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage



// 