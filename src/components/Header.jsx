import { useState, useEffect } from "react"

// icons
import {FaBars} from "react-icons/fa"
import {SiDatadog } from "react-icons/si" //logo

import Nav from './Nav';
import Program from './Program';
import NavMobile from './NavMobile';

const Header = () => {
  // header bg state
  const [bg, setBg] = useState(false);

  // nav mobile state
  const [navMobile, setNavMobile] = useState(false);

  //scroll event
  useEffect(() => {
    window.addEventListener("scroll", ()  => {
      window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })

  
  return (
    <header className={`${bg ? "bg-white py-3 shadow-md" : "bg-none py-5 "} fixed w-full right-0 left-0 z-10 transition-all duration-300`} >
      <div className="container mx-auto flex  justify-between items-center">
        {/*LOGO*/}
            <a href="#"><SiDatadog size={44} className="text-blue-900"/></a>

            {/*NAV*/}
            <div className="hidden lg:flex ">
              <Nav/>
            </div>

            {/*program*/}
            <Program/>

            {/*Nav mobile button*/}

         <div 
         onClick={() => setNavMobile(!navMobile)}
         className="lg:hidden cursor-pointer">
         <FaBars className="text-blue text-3xl"/>
         </div>

         {/* mobile nav */}

      <div className={`${navMobile ? "max-h-[260px]" : "max-h-0"}
       fixed bg-yellow-200 shadow-lg left-0  w-full top-[78px] h-full overflow-hidden transition-all`} >
        <NavMobile navMobile={navMobile} setNavMobile={setNavMobile} />
      </div>

      </div>
    </header>
  )
}

export default Header