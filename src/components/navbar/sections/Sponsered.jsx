import React from 'react'

const Sponsered = () => {
  const sponserdata=[
    {  id:1,
      image:"https://pixio.dexignzone.com/xhtml/images/company/1.jpg",
      logo:"https://pixio.dexignzone.com/xhtml/images/company/logo/logo1.png"
    },
    { id:2,
      image:"https://pixio.dexignzone.com/xhtml/images/company/3.jpg",
      logo:"https://pixio.dexignzone.com/xhtml/images/company/logo/logo4.png"
    },
    { id:3,
      image:"https://pixio.dexignzone.com/xhtml/images/company/1.jpg",
      logo:"https://pixio.dexignzone.com/xhtml/images/company/logo/logo3.png"
    },
    { id:4,
      image:"https://pixio.dexignzone.com/xhtml/images/company/2.jpg",
      logo:"https://pixio.dexignzone.com/xhtml/images/company/logo/logo2.png"
    },
    
  ]
  return (
    <div className='w-full h-auto px-[40px] md:px-[150px] py-[40px]'>
        <div>
            <h1 className='text-[30px] font-[500] mb-[40px]'>Sponsored</h1>
        </div>
        {/* ------------------sponsered box-------------- */}
          <div className="sponsered-item flex flex-wrap justify-between items-center gap-[10px] md:gap-[20px] ">
          {
            sponserdata.map((data)=>{
              return(
                <div className='w-[45%] md:w-[22%] group'>
                <div className='relative  rounded-[10px] overflow-hidden'>
                <div>
                  <img className='w-full h-[220px] group-hover:scale-[1.1]
                   ease-out duration-700 transition-all' src={data.image} alt="" />
                </div>
                <div className='w-full h-[100%] absolute top-0 left-0 flex justify-center items-center z-[1000] bg-colortransparent'>
                  <img className='w-[50%]' src={data.logo} alt="" />
                </div>
                </div>
  
                <div className="text pt-[20px] flex justify-between flex-col md:flex-row">
                   <h1 className='text-[16px] md:text-[18px] font-[500]'>Outdoor Shoes</h1>
                   <p className='text-[15px] text-[#222]'>Min. 30% Off</p>
                </div>
                </div>
              )
            })
          }
          </div>
        {/* ------------------sponsered box-------------- */}
    </div>
  )
}

export default Sponsered