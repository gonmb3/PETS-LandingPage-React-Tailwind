import DogImg from "../assets/img/dogs/dog-contact.png"

const Contact = () => {
  
  return (
    <section id='contact' className="bg-yellow-200/80 pt-6">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row justify-around">

          {/*image*/}
          <div className=" order-1 lg:-order-1 mt-16">
            <img src={DogImg} alt="img-dog" className="w-[500px] h-[400px] drop-shadow-1xl shadow-black object-cover  -mb-[10px] -rotate-2 " />
          </div>

          {/*text*/}
          <div className="flex flex-col items-center justify-center">
            <div className="text-orange-600 font-semibold mb-3 text-[18px]">Contact</div>
            <div className="text-4xl text-blue-900 font-extrabold">099 888 777</div>
            <div className="mb-7 text-blue-800">Opening Hours: Mon - Sun : 10am - 18pm</div>
            <button className="btn">Get an Appointment</button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact