import React from 'react'
import Hero from './components/Hero';
import Header from './components/Header';
import Appointment from './components/Appointment';
import Prices from './components/Prices';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto bg-slate-200 relative'>
      <Header/>
      <Hero/>
      <Appointment/>
      <Prices/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App