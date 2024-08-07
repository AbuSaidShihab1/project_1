import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

import Trendingproducts from '../products/Trendingproducts';
const Trendingitems = () => {
  return (
    <div className='w-full h-auto px-[40px] md:px-[150px] py-[30px]'>
        {/* -------------------title------------------- */}
          <div className='w-full h-auto'>
            <h1 className=' text-[25px]md:text-[30px] font-[500]'>Trending Items</h1>
            <div className='flex justify-between items-center pt-[20px] '>
                <p className='text-[13px] w-[60%] md:text-[16px] text-paracolor'>Shop the latest products from the most popular items</p>
                <button className='flex gap-[10px] justify-center text-paracolor text-[13px] md:text-[16px] items-center'>See More Items <FaArrowRightLong/></button>
            </div>
          </div>
        {/* ---------------------title-------------------- */}
        {/*----------------------- trending products box--------------------- */}
         <Trendingproducts/>
        {/*----------------------- trending products box--------------------- */}
    </div>
  )
}

export default Trendingitems