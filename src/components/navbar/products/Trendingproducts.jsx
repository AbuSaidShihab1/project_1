import React from 'react'
import { FiHeart } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import Trendingdata from '../../../data/Trendingdata';
import Trendingitems from './Trendingitems';
const Trendingproducts = () => {
  return (

<div className='py-[40px] flex justify-between items-center gap-[10px] md:gap-[20px] flex-wrap'>
{
  Trendingdata.map((cloth)=>{
    return(
      <Trendingitems
      key={cloth.id}
      id={cloth.id}
      name={cloth.title}
      price={cloth.price}
      desc={cloth.decription}
      rating={cloth.rating}
      image={cloth.image}
      offer={cloth.offer}
      />
    )
  })
}
         </div>
  )
}

export default Trendingproducts