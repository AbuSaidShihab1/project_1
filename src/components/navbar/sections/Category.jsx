import React from 'react'

const Category = () => {

  const categorydata=[
    {
      image:"https://images.pexels.com/photos/3916049/pexels-photo-3916049.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name:"Smart Watch"
    },
    {
      image:"https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600",
      name:"Smart Watch"
    },
    {
      image:"https://cartzio.vercel.app/static/media/chappal-shoes.c331b54bcc7dca049cdb.jpg",
      name:""
    },
    {
      image:"https://cartzio.vercel.app/static/media/ladies-ware.b5f7c2c84e90eda83610.jpg",
      name:""
    },
    {
      image:"https://cartzio.vercel.app/static/media/kids-ware.59e4ee050c8713a1871b.jpg",
      name:""
    },
    {
      image:"https://images.pexels.com/photos/1496647/pexels-photo-1496647.jpeg?auto=compress&cs=tinysrgb&w=600",
      name:""
    },
  ]
  return (
    <div className='w-full h-auto flex-wrap  px-[30px] py-[70px] flex justify-center items-center gap-[20px]'>
    {
      categorydata.map((data)=>{
        return(
          <div className="box w-[45%] md:w-[15%] relative group  overflow-hidden rounded-[10px]">
          <div className="box_img">
               <img className='w-full group-hover:scale-[1.1] ease-out duration-300
                transition-all  rounded-[5px] h-[220px]' src={data.image} alt="" />
          </div>
          <div className='absolute bottom-[10%]  w-full  '>
            <div className='bg-white w-[70%] text-[13px] md:text-[17px] font-[500] m-auto text-center rounded-3xl p-[5px] md:px-[10px] md:py-[8px]'>
               Smart Watch
            </div>
          </div>
      </div>
        )
      })
    }
    </div>
  )
}

export default Category