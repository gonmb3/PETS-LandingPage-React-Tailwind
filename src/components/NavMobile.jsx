import { useEffect, useRef} from "react"
// import data
import {navigation} from "../data"




const NavMobile = ({setNavMobile}) => {

      
      
          /*-----Menu CLOSED on scroll start */
          useEffect(() => {
              window.addEventListener("scroll", () => {
                setNavMobile(false)
              })
          }, [])
          /*Menu CLOSED on scroll end ----*/

  return (

    <nav 
 className="text-[15px] h-full ">

    <ul
     className="flex gap-y-8 h-full flex-col justify-center items-center">
          {navigation.map((item,index) => (
            <li className="font-medium text-blue-900" key={index}>
              <a className="capitalize hover:text-orange-600" href={item.href}>{item.name}</a>
            </li>
          ))}
    </ul>
    
  </nav>
  )
}

export default NavMobile