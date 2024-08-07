import React from 'react'

const Offer = () => {
  return (
    <div className='w-full h-auto px-[40px] md:px-[150px] font-sora py-[40px] '>
        <div className="offer_box w-full h-[350px]  bg-orange-600 bg-[url('https://images.pexels.com/photos/1227497/pexels-photo-1227497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] md:bg-[url('https://cartzio.vercel.app/static/media/bg1.3a31373e4557b1c81db5.png')] flex justify-start items-center rounded-[20px] bg-cover bg-no-repeat">
             <div className="box w-full md:w-[40%] text-center  p-[15px] ">
             <h1 className='text-[25px] md:text-[40px] text-white font-[600] mb-[20px] '>Sale Outlet <br />
               Up to 75% Off</h1>
               <button className='px-[35px] py-[15px] bg-white text-black rounded-[25px] text-[15px] font-[500]'>Offer Grab Now</button>
             </div>
        </div>
    </div>
  )
}

export default Offer