import React from 'react'
import { FiHeart } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { add_to_cart } from '../../../reducers/Createslice';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Sellingproductitems = ({id,name,price,desc,rating,image,offer}) => {
    const dispatch=useDispatch();
    function handlefuntion(){
        toast(name+" "+"added")
      }
  return (
    <div className='box w-[45%] md:w-[22%] min-h-[520px]'>
       
    <div className="sub_box relative bg-[whitesmoke] group w-[100%] rounded-[10px] h-[400px] cursor-pointer overflow-hidden">
           <div>
           <NavLink to={`/${id}`}>
             <img className='w-full h-[400px] group-hover:scale-[1.1] ease-out duration-300 transition-all ' src={image} alt="" />
    </NavLink>
            
            </div>
            <ToastContainer />
            <div className="tag absolute top-[5%] left-[10%] bg-orange-500 text-white text-[13px] px-[10px] py-[3px] rounded-[5px]">
              {offer} Off
            </div>
              <div className="text">
                  <div className='absolute  bottom-[-120%] group-hover:bottom-[5%]  ease-out duration-300 transition-all  w-full text-center '>
                  <button className='bg-black w-[70%] text-white text-[15px] font-[500] m-auto text-center rounded-3xl px-[10px] py-[8px]'onClick={()=>{
                      dispatch(add_to_cart({ id, name, price, rating, price, image, qty: 1 })),handlefuntion(name)
                  }}>Add To Cart</button>
                  </div>
                  <div className="icon absolute top-[20%] group-hover:right-[5%] ease-out duration-300 transition-all right-[-125%] flex flex-col gap-[10px]">
                      <div className="icob_box w-[40px] shadow-md h-[40px] bg-white text-[18px] rounded-full flex justify-center items-center">
                          <FiHeart/>
                      </div>
                      <div className="icob_box w-[40px] shadow-md h-[40px] bg-white text-[18px] rounded-full flex justify-center items-center">
                          <MdOutlineRemoveRedEye/>
                      </div>
                      <div className="icob_box w-[40px] shadow-md h-[40px] bg-white text-[18px] rounded-full flex justify-center items-center">
                          <IoPricetagOutline/>
                      </div>
                  </div>
              </div>
      </div>
        <div className="price py-[15px]">
        <NavLink to={`/${id}`}>
        <h1 className='text-[14px] hover:underline cursor-pointer mb-[10px] md:text-[17px]'>{name}</h1>
        </NavLink>
          <div className='flex md:flex-row flex-col justify-between items-center'>
          <h2 className='text-center md:text-left text-[15px] pr-[15px]'>${price}<span className='text-paracolor line-through'>$21.00</span></h2>
           <div className="star flex gap-[5px] text-orange-400">
           <IoIosStar/>
           <IoIosStar/>
           <IoIosStar/>
           <IoIosStar/>
           <IoIosStar/>
           </div>
          </div>
        </div>

  </div>
  )
}

export default Sellingproductitems;