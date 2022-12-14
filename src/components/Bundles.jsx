
//icons
import {BsCheckCircleFill} from "react-icons/bs"

const Bundles = ({bundles}) => {

  return (
    <div className="flex flex-col md:flex-row justify-between gap-[30px] overflow-x-hidden px-8">
      {bundles.map((bundle , index) => (    
        <div  
        className="w-full lg:max-w-1/3 bg-white shadow-md  text-center h-[560px] px-8 rounded-[60px] " 
        key={index}
        >
            {/* price */}
            <div className="text-5xl font-bold w-[250px] mx-auto text-white my-4 bg-orange-600/90 rounded-full py-2">
              ${bundle.price}
               </div>

             {/* name */}
             <div className="capitalize mb-12 text-blue-800 font-bold  border-b-4 w-[120px] mx-auto border-yellow-200">{bundle.name} </div>

              {/* list */}
            <div className="flex flex-col gap-y-4 max-w-[230px] mx-auto ">
              {bundle.list.map((item, index) => (
                  <div  key={index} className="flex items-center justify-center gap-x-3 ">
                    <BsCheckCircleFill className="text-orange-600"/>
                    <div className="capitalize py-2 border-b border-gray-300 ">
                      {item}
                    </div>

                  </div>
            ))}
           </div>
        </div>
      ) )}
    </div>
  )
}

export default Bundles