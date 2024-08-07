import React,{useState} from 'react'
import Header from '../components/navbar/Header'
import Sellingproducts from '../components/navbar/products/Sellingproducts'
import Products from '../components/navbar/products/Products'
import { IoIosSearch } from "react-icons/io";
import data from '../data/Data';
const Shop = () => {


  return (
    <div className='font-sora'>
        <Header/>
        {/* -------------------shop section--------------------- */}
         <div className="shop-section w-full h-auto px-[40px] md:px-[150px] py-[30px]">
            <div className="hero w-[100%] md:w-[50%]">
              <h1 className='text-[25px] md:text-[30px] font-[500] mb-[15px]'>Man collection</h1>
              <p className='text-[15px] leading-[25px] text-neutral-500'>We not only help you design exceptional products, but also make it easy for you to share your designs with more like-minded people.</p>
            </div>
         </div>
        {/* -------------------shop section--------------------- */}
      {/* ------------------product-filter------------- */}
      <Products/>
      {/* ------------------product-filter------------- */}
    </div>
  )
}

export default Shop