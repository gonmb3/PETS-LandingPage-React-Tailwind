import {SiDatadog } from "react-icons/si" //logo
import {AiFillTwitterCircle , AiFillInstagram} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs" 

const Footer = () => {

  return (
    <footer>
          <div className="bg-orange-500 py-8 lg:py-4">
            <div className=" container mx-auto flex justify-between items-center lg:flex-row"> 
            <a href="#"><SiDatadog size={40} className="text-white"/>  </a>

            <div className="text-white text-[11px] font-semibold" >
              &copy; Copyright 2022. All rights reserved.
            </div>

            {/* socials */}

          <div className="flex gap-x-1 text-white cursor-pointer " >
            <AiFillTwitterCircle size={20}/>
            <AiFillInstagram size={20}/>
            <BsFacebook size={18}/>
          </div>


           
            </div>
          </div>
    </footer>
  )
}

export default Footer