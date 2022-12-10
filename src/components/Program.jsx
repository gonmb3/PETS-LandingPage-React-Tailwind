import PhoneIcon from "../assets/img/phone.svg"
const Program = () => {
  return (
    <div className="">
        {/* phone icon & number*/}

        <div className="flex lg:gap-x-2 items-baseline justify-end">
          <img className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]" src={PhoneIcon} alt="phone-img" />
          <div className=" lg:text-[22px] text-blue-900 font-extrabold">
            099 888 777
          </div>
        </div>

        {/* open hours*/}
        <div className="text-sm">
          <div className="hidden lg:flex "> Opening Hours: Mon - Sun : 10am - 18pm</div>

     {/* open hours mobile mode*/}
          <div className="lg:hidden text-right ">Mon - Sun : 10am - 18pm</div>
        </div>
    </div>
  )
}

export default Program