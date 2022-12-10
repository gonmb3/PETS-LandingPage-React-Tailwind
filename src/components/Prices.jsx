import {bundleData } from "../data"
import { useState, useEffect} from 'react';
import Bundles from "./Bundles";

const Prices = () => {

  //index state
  const [index, setIndex] = useState(0);

  //bundles state
  const [bundles,setBundles] = useState([]);
  useEffect(() => {
    setBundles(bundleData[0].services)
  },[])

  const getBundle = (name) => {
    const newBundle = bundleData.find((bundle) => {
      return bundle.name === name;
      
    } )
    setBundles(newBundle.services)
  }


  return (

    <section 
    id="prices"
    className="py-12 lg:py-24">
      {/* text  */}
      <div className="container mx-auto">

        <div className="text-center mb-20">
          <div className=" text-orange-500 font-semibold mb-3">Our Prices</div>
          <h2 className="h2 mb-3">How Big Your Dog Is?</h2>
          <p className="text-lg text-blue-800"><span className="font-black">Choose</span> your dog category </p>
        </div>


        {/* grid  */}
        <div className="grid grid-cols-4 gap-4 lg:gap-[30px]">
          {bundleData.map((item,idx) => (

          <div
          onClick={() =>{
            setIndex(idx) 
            getBundle(item.name)
          }  }
           className="text-center capitalize cursor-pointer" key={idx}>
            <div className="mb-2 lg:mb-8 ">
              <img className="hover:scale-105 duration-200 w-full" src={item.image} alt={item.name} />
            </div>
            <h3 className="lg:text-2xl font-semibold text-blue-900">{item.name}</h3>

               {/* category  */}

               <div className={`${index === idx ? "border-b-4 border-orange-500 transition-all" : "border-b-4 border-transparent pb-4 mb-12"}`}>
                  <div className="hidden lg:block capitalize">{item.dogCategory} </div>
               </div>


          </div>
          ))}
        </div>
      </div>
        
        {/* bundles component */}

        <Bundles bundles={bundles} />

    </section>
  )
}

export default Prices