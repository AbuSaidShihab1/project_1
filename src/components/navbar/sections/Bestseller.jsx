import React from 'react'
import Sellingproducts from '../products/Sellingproducts'

const Bestseller = () => {
  return (
    <div className='px-[40px] md:px-[150px] py-[40px]'>
        {/* ---------------heading------------ */}
          <div className='text-center'>
             <h1 className='text-[30px] font-[500] mb-[10px]'>Best Seller Items</h1>
             <p className='text-[16px] text-paracolor'>Shop the latest products from the most popular collections</p>
          </div>
        {/* ---------------heading------------ */}
       <Sellingproducts/>
    </div>
  )
}

export default Bestseller