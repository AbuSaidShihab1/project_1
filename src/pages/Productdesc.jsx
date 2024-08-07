import React from 'react'
import Header from '../components/navbar/Header'
import { IoIosStar } from "react-icons/io";
import Data from '../data/Data';
import { useParams } from 'react-router-dom';
const Productdesc = () => {
    const {id}=useParams();
    const filterdata=Data.filter((data)=>{
        return data.id==id;
    })
    console.log(filterdata)
  return (
    <div className='w-full h-auto font-sora'>
       <Header/>
       {/* -----------------product description--------------- */}
       <div className="product-desc px-[40px] md:px-[150px] py-[50px] ">
            <div className="product-box w-full flex md:flex-row flex-col justify-center gap-[20px]">
                <div className="product-img w-[100%] md:w-[40%]">
                    <img className='w-[60%] rounded-[10px] m-auto' src={filterdata[0].image} alt="" />
                </div>
                <div className="product_text w-[100%] md:w-[60%]">
                    <h1 className='text-[25px] font-[500] mb-[10px]'>{filterdata[0].title}</h1>
                     <div className="star flex gap-[5px] text-orange-500 mb-[10px]">
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                     </div>
                     <h2 className='text-[30px] font-[500] mb-[20px]'>${filterdata[0].price}</h2>
                     <p className='text-[16px] leading-[25px] mb-[20px]'>Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.</p>
                    <div className='flex gap-[10px]'>
                        <h2 className='text-[18px] font-bold flex justify-center items-center'>Sizes:</h2>
                        <div className='flex justify-center items-center px-[10px] py-[5px] border-[1px] border-neutral-400'>M</div>
                    </div>
                    <button className='w-[40%] md:w-[30%] m-auto mt-[30px] h-[50px] text-white bg-black'>Add To Cart</button>
                </div>
            </div>
         </div>
       {/* -----------------product description--------------- */}
    </div>
  )
}

export default Productdesc