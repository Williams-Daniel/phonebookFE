import {ImSearch} from "react-icons/im"
import { NavLink } from "react-router-dom"
const Header = () => {
  return (
    <div className="
    w-full
    h-[70px]
    bg-slate-800
    flex
    justify-center
    items-center
    text-white
    ">
      <div className="
      w-[90%]
      h-full
      flex
      items-center
      justify-between
      ">
<NavLink to="/homepage">
<div  className="
text-[20px]
font-[600]
">sabi-KONect</div>
</NavLink>
<div className="
w-[300px]
h-[40px]
bg-[white]
rounded-[30px]
flex
justify-around
items-center
">
  <ImSearch className="
  text-[15px]
  ml-[10px]
  text-slate-800
  "/>
  <input className="
  text-[14px]
  outline-none
  text-black
  w-[80%]
  placeholder:text-black
  placeholder:font-[400]
  placeholder:text-[14px]
  "
  placeholder="enter category or label ..."
  />
</div>
<div className="
flex
w-[150px]
justify-between
text-[14px]
">
  <NavLink to="/new-contact">
  <div>New contact</div>
  </NavLink>
  <NavLink to="/profile">
  <div>Profile</div>
  </NavLink>
</div>
      </div>
    </div>
  )
}

export default Header