import { IoCall } from "react-icons/io5";
import { MdSecurity } from "react-icons/md";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const LandingPage = () => {
  return (
    <div
      className="
    w-full
    h-[100vh]
    flex
    flex-col
    justify-center
    items-center
    bg-slate-800
    "
    >
      <div
        className="
        w-[50%]
        h-[50%]
        flex
        flex-col
        justify-center
        items-center
        "
      >
        <div
          className="
          w-[120px]
          h-[120px]
          rounded-[50%]
          bg-[white]
          flex
          items-center
          justify-center
          "
        >
          <IoCall
            className="
            text-[45px]
            text-slate-800
            "
          />
        </div>
        <div
          className="
            text-[white]
            mt-[10px]
            font-[600]
            "
        >
          sabi-KONtact
        </div>

        <div
          className="
          flex
          flex-col
          items-center
          mt-[70px]

          "
        >
          <MdSecurity
            className="
            text-[white]
            text-[20px]
            "
          />
          <div
            className="
            w-[250px]
            text-center
            text-white
            text-[10px]
            mt-[7px]
            small:w-[150px]
            "
          >
            <Typewriter
              options={{ loop: true, delay: 30, deleteSpeed: 20 }}
              onInit={(type: any) => {
                type

                  .typeString(
                    `your contacts are safe and will not be shared with anyone`
                  )
                  .pauseFor(1500)
                  .deleteAll()

                  .typeString(`your contacts are safe with sabi-KONtact`)
                  .pauseFor(100)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
        </div>
      </div>
      <Link to="/homepage">
      <div
        className="
        small:
            mb-[10px]
            bg-[white]
            px-[20px]
            py-[10px]
            text-[12px]
            font-[600]
            rounded-[30px]
            justify-center
            items-center
            "
      >
        Get started
      </div>
      </Link>
      <div
        className="
            w-[95%]
            h-[20px]
            flex
            justify-end
            "
      >
        <div
          className="
          hidden
              small:
              mr-[20px]
              w-[50px]
              h-[50px]
              justify-center
              items-center
              rounded-tl-[30px]
              rounded-tr-[30px]
              rounded-bl-[30px]
              bg-[white]
              text-[12px]
              font-[600]
              flex-col
              leading-3
              "
        >
          New
          <div>+</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
