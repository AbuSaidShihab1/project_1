import React from 'react'
import { FiHeart } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import Sellingdata from "../../../data/Selling"
import Sellingproductitems from './Sellingproductitems';
const Sellingproducts = () => {
  return (
    <div className='py-[40px] flex justify-between items-center gap-[20px] flex-wrap'>
    {
      Sellingdata.map((cloth)=>{
        return(
          <Sellingproductitems
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

export default Sellingproducts