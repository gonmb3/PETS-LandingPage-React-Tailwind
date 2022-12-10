import React from 'react'
import HeroSlider from './HeroSlider';

const Hero = () => {

  return (
    <section
    id='home'
    className='min-h-[768px] relative pt-24 pb-12 flex
     items-center overflow-hidden px-[50px]:pt-24 after:h-[740px] after:w-[800px]
     after:bg-orange-300 after:absolute after:rounded-full after:-right-28 after:-top-24 
     '>
       <HeroSlider/>
    </section>
  )
}

export default Hero