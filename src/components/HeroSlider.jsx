//swiper react components
import {Swiper, SwiperSlide} from "swiper/react"
// import swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "../swiper.css"

// import modules
import {Pagination, Navigation, Autoplay} from "swiper";


import {heroSlider} from "../data"

const HeroSlider = () => {
  return (
    <Swiper modules={[Pagination, Navigation, Autoplay]}
    autoplay={true}
    loop={true}
    pagination={{
      clickable:true,
      dynamicBullets:true,

    }}
    navigation={true}
    className="heroSlider"
    >

      {heroSlider.map((slide, index) => {
      const {id , title, image, subtitle, buttonText} = slide;
        return (
            <SwiperSlide className="py-12 lg:py-16 " key={index}>  
              <div className="container mx-auto text-center lg:text-start">
                           
              <div className="flex flex-col justify-between items-center lg:flex-row">
                {/* text */}
              <div className="flex-1">
                    <h1 className="text-blue-900 font-extrabold mb-4 text-[36px] leading-20 lg:text-[72px] ">{title} </h1>
                    <p className="text-base lg:text-lg mb-7">  {subtitle} </p>
                   
                  <a href="#appointment">
                  <button className="btn mb-8 lg:mb-0 font-semibold">{buttonText}</button>
                  </a>
                </div>
                  {/* image */}
                  <div className="flex-1 flex justify-center">
                    <img  className="h-96 lg:h-auto object-cover" src={image} alt={title} />
                  </div>
              </div>



              </div>
            </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default HeroSlider