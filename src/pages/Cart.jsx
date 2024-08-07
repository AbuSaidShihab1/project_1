import React from 'react'
import Header from '../components/navbar/Header'
import { IoIosStar } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { decrementQty, incrementQty, remove_product } from '../reducers/Createslice';
const Cart = () => {
    const cartdata=useSelector((state)=>state.cart.cart);
    console.log(cartdata);
    const totalQty = cartdata.reduce((totalQty, item) => totalQty + item.qty, 0);
    const totalPrice = cartdata.reduce(
      (total, item) => total + item.qty * item.price,
      0
    );
      const dispatch=useDispatch();
  return (
    <div className='font-sora'>
        {/* ----------------header------------- */}
        <Header/>
        {/* ----------------header------------- */}
        <div className="cart-main  px-[40px] md:px-[150px] py-[50px]">
            <h1 className='text-[20px] font-[600]'>My Cart</h1>
         <div className='flex flex-col md:flex-row gap-[40px]'>
         <div className="w-[100%] md:w-[60%] py-[40px] h-auto cart-box ">
                {
                   cartdata.length >0 ?  cartdata.map((data)=>{
                    console.log(data)
                    return(
                        <div className='flex justify-between gap-[30px] flex-col md:flex-row border-b-[1px] p-[20px] border-[#EEEEEE]'>
            <div className='flex justify-between md:justify-center gap-[20px]'>
                <div className='p-[1px] rounded-[10px] border-[1px] border-[#EEEEEE]'>
                    <img className='w-[100px] h-[100px]' src={data.image} alt="" />
                </div>
                <div className="text w-[60%]">
                    <p>{data.name}</p>
                    <h2>Price:{data.price}$</h2>
                         <div className="star text-orange-500 flex gap-[10px] mt-[15px]">
                            <IoIosStar />
                            <IoIosStar/>
                            <IoIosStar/>
                            <IoIosStar/>
                            <IoIosStar/>
                         </div>
                </div>
               </div>
               <div className="operation flex justify-between  md:justify-center items-center gap-[30px]">
                  <div className="controll flex gap-[20px]">
                      <button className='px-[15px] rounded-[5px] text-[25px] border-[1px] border-[#EEEEEE]'onClick={()=>{data.qty > 1 ? dispatch(decrementQty(data.id)) : (data.qty = 0)}}>-</button>
                      <h2 className='text-[20px]'>{data.qty}</h2>
                      <button className='px-[15px] rounded-[5px] text-[25px] border-[1px] border-[#EEEEEE]'onClick={()=>{data.qty >= 1 ? dispatch(incrementQty(data.id)) : (data.qty = 0)}}>+</button>
                  </div>
                  <button className='px-[10px] py-[10px] rounded-[5px] text-white bg-red-500'onClick={()=>{dispatch(remove_product(data))}}><MdDelete/></button>
               </div>
            </div>
                    )
                }):<h1 className='w-full text-center font-[500] text-[25px]'>You Do Not Have Any Item!</h1>
                }
             
            </div>
            {/* -------------------------pament system---------------------- */}
               <div className="pament-system w-[100%] md:w-[40%] mt-[20px] md:mt-[50px] h-full shadow-md border-[1px] border-[#EEEEEE] rounded-[5px]">
                  <div className='p-[20px]'>
                  <div className="div flex justify-between items-center mb-[20px] py-[10px] border-b-[1px] border-[#EEEEEE]">
                       <h2 className='text-[17px] md:text-[20px]  font-[500]'>Subtotal</h2>
                       <h2 className='text-[17px] md:text-[20px] font-[500]'>${totalPrice}</h2>
                   </div>
                   <div className="div flex justify-between items-center mb-[20px] py-[10px] border-b-[1px] border-[#EEEEEE]">
                    <h2 className='text-[17px] md:text-[20px] font-[500]'>Location</h2>
                    <h2 className='text-[17px] md:text-[20px] font-[500]'>Bangladesh</h2>
                   </div>
                   <div className="div flex justify-between items-center mb-[20px] py-[10px] border-b-[1px] border-[#EEEEEE]">
                    <h2 className='text-[17px] md:text-[20px] font-[500]'>Number Of Product</h2>
                    <h2 className='text-[17px] md:text-[20px] font-[500]'>{totalQty}</h2>
                   </div>
                   <div className="div flex justify-between items-center mb-[20px] py-[10px] border-b-[1px] border-[#EEEEEE]">
                       <h2 className='text-[17px] md:text-[20px] font-[500]'>Total</h2>
                       <h2 className='text-[17px] md:text-[20px] font-[500]'>${totalPrice}</h2>
                   </div>
                   <button className='w-full h-[50px] rounded-[5px] font-[500] text-white bg-orange-500'>Checkout</button>
                  </div>
               </div>
            {/* -------------------------pament system---------------------- */}
         </div>
        </div>
    </div>
  )
}

export default Cart