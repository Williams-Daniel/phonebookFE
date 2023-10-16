import Header from "../components/statics/Header"
import Typewriter from "typewriter-effect"
import * as yup from "yup"
import {useForm}  from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup" 
import { createContact } from "../Apis/ContactAPis"
import  swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { changeContactState } from "../Global/GlobalState"

const NewContact = () => {

    const navigate =useNavigate()
   const dispatch = useDispatch()

    const schema = yup.object({
        firstName:yup.string().required(),
        lastName:yup.string().required(),
        email:yup.string().required(),
        phoneNumber:yup.string().required(),
        label:yup.string().required()
    })

    const {register,formState:{errors},handleSubmit} = useForm({
        resolver:yupResolver(schema)
    })

    const onSubmit = handleSubmit(async(data:any)=>{
        const {firstName,lastName,email,phoneNumber,label} = data

        createContact({firstName,lastName,email,phoneNumber,label}).then((res:any)=>{
          if(res){
            swal.fire({
                icon:"success",
                text:"contact created",
                timer:3000,
                timerProgressBar:false
            }).then(()=>{
                dispatch(changeContactState(res))
                navigate("/homepage")
            })
          }  
        })
    })

  return (
    <div>
        <Header/>
        <div className="
        w-full
        min-h-[100vh]
        bg-slate-200
        flex
        justify-center
        items-center
        ">
            <div className="
            w-[90%]
            min-h-[100vh]
            flex
            justify-center
            items-center
            ">
                
                <form className="
                w-[400px]
                h-[550px]
                z-10
                border-slate-400
                border-[2px]
                rounded-[5px]
                flex
                flex-col
                justify-center
                items-center
                "
                onSubmit={onSubmit}
                >

                    <div
            className="
            w-[280px]
            text-center
            text-[25px]
            text-slate-800
            font-[700]
            small:w-[150px]
            mb-[20px]
            "
          >
            <Typewriter
              options={{ loop: true, delay: 30, deleteSpeed: 20 }}
              onInit={(type: any) => {
                type

                  .typeString(
                    `Create new contact`
                  )
                  .pauseFor(1500)
                  .deleteAll()

                  .typeString(`Add to your contacts`)
                  .pauseFor(100)
                  .deleteAll()
                  .start();
              }}
            />
          </div>

                    <div className="
                    flex
                    flex-col
                    mb-[10px]
                    ">
                        <label className="
                        text-[14px]
                        font-[500]
                        ">firstName</label>
                        <input className="
                        w-[270px]
                        h-[30px]
                        text-[14px]
                        pl-[10px]
                        rounded-[3px]
                        placeholder:text-[14px]
                        outline-none
                        "
                        placeholder="e.g Daniel"
                        {...register("firstName")}
                        /> 
                        {errors.firstName?.message && <label className="
                        text-[10px]
                        text-red-500
                        ">Please fill this field</label>}
                    </div>
                    <div className="
                    flex
                    flex-col
                    mb-[10px]
                    ">
                        <label className="
                        text-[14px]
                        font-[500]
                        ">lastName</label>
                        <input className="
                        w-[270px]
                        h-[30px]
                        text-[14px]
                        pl-[10px]
                        rounded-[3px]
                        placeholder:text-[14px]
                        outline-none
                        "
                        placeholder="e.g Williams"
                        {...register("lastName")}
                        /> 
                        {errors.lastName?.message && <label className="
                        text-[10px]
                        text-red-500
                        ">Please fill this field</label>}
                    </div>
                    <div className="
                    flex
                    flex-col
                    mb-[10px]
                    ">
                        <label className="
                        text-[14px]
                        font-[500]
                        ">email</label>
                        <input className="
                        w-[270px]
                        h-[30px]
                        text-[14px]
                        pl-[10px]
                        rounded-[3px]
                        placeholder:text-[14px]
                        outline-none
                        "
                        placeholder="e.g Williams"
                        {...register("email")}
                        />
                        {errors.email?.message && <label className="
                        text-[10px]
                        text-red-500
                        ">Please fill this field</label>} 
                    </div>
                    <div className="
                    flex
                    flex-col
                    mb-[10px]
                    ">
                        <label className="
                        text-[14px]
                        font-[500]
                        ">phoneNumber</label>
                        <input className="
                        w-[270px]
                        h-[30px]
                        text-[14px]
                        pl-[10px]
                        rounded-[3px]
                        placeholder:text-[14px]
                        outline-none
                        "
                        placeholder="e.g Williams"
                        {...register("phoneNumber")}
                        /> 
                        {errors.phoneNumber?.message && <label className="
                        text-[10px]
                        text-red-500
                        ">Please fill this field</label>}
                    </div>
                    <div className="
                    flex
                    flex-col
                    mb-[10px]
                    ">
                        <label className="
                        text-[14px]
                        font-[500]
                        ">label</label>
                        <input className="
                        w-[270px]
                        h-[30px]
                        text-[14px]
                        pl-[10px]
                        rounded-[3px]
                        placeholder:text-[14px]
                        outline-none
                        "
                        placeholder="e.g Williams"
                        {...register("label")}
                        /> 
                        {errors.label?.message && <label className="
                        text-[10px]
                        text-red-500
                        ">Please fill this field</label>}
                    </div>
                    {/* <div  className="
                    flex
                    flex-col
                    ">
                        <label className="
                        text-[14px]
                        font-[500]
                        ">Label</label>
                        <select className="
                        w-[270px]
                        h-[30px]
                        outline-none
                        text-[14px]
                        pl-[7px]
                        "
                        {...register("label")}
                        >
                            <option selected>Select a category</option>
                            <option value="Family">Family</option>
                            <option value="Friends">Friends</option>
                            <option value="Loved ones">Loved ones</option>
                            <option value="work">work</option>
                        </select>
                        {errors.label?.message && <label className="
                        text-[10px]
                        text-red-500
                        ">Please fill this field</label>}
                    </div> */}
                    <button className="
                    mt-[30px]
                    px-[15px]
                    py-[3px]
                    bg-slate-800
                    text-white
                    text-[14px]
                    rounded-[30px]
                    "
                    type="submit"
                    
                    >Create</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default NewContact