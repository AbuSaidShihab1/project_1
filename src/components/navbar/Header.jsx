import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { TbShoppingBagHeart } from "react-icons/tb";
import { useSelector } from 'react-redux';
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const Header = () => {
    const [menu,activemenu]=useState(false); function activemenufunction(){
        console.log("ell")
        activemenu(!menu)
     }
    const [navbar,activenavbar]=useState(false);
    const navigate=useNavigate();
    const cartdata=useSelector((state)=>state.cart.cart);
    console.log(cartdata);
    const totalQty = cartdata.reduce((totalQty, item) => totalQty + item.qty, 0);

    window.addEventListener("scroll",()=>{
        if(window.scrollY >200){
            activenavbar(true)
        }else{
            activenavbar(false)
        }
    })
    // -------------cartpage----------
    function cartpage(){
           navigate("/cart")
    }
    // navlink
    const navlink=[
        {
            name:"Home",
            pathname:"/"
        },
        {
            name:"Shop",
            pathname:"/shop"
        },
        {
            name:"Contact",
            pathname:"/contact"
        },
    ]
  return (
    <header className={navbar ? 'w-full h-[12vh] font-sora fixed top-0 left-0 flex justify-between items-center px-[70px] md:px-[150px] py-[20px] bg-white shadow-lg  transition duration-200 z-[1000]':'w-full transition duration-200 h-[12vh] flex justify-between items-center px-[40px] font-sora md:px-[150px] py-[20px]'}>
          <div className="logo overflow-auto md:hidden">
            {/* <img src="https://guza-demo.vercel.app/assets/imgs/template/logo.svg" alt="" /> */}
            <h1 className='font-sora text-[22px] font-bold'>Storee</h1>
        </div>
        <nav className={menu ? 'md:flex w-full md:w-auto p-[20px] bg-[whitesmoke]   md:bg-white absolute top-[12vh] left-0 justify-center   items-center gap-[30px] md:static':'hidden md:flex  w-full md:w-auto h-auto px-[20px]  z-[10000]  py-[30px] md:justify-end md:items-center gap-[100px] absolute top-[10vh] left-0 md:static '}>
        <div className="logo md:flex hidden ">
        <h1 className='font-sora text-[25px] font-bold text-orange-500'>Storee</h1>

            {/* <img src="https://guza-demo.vercel.app/assets/imgs/template/logo.svg" alt="" /> */}
        </div>
            <ul className='md:flex gap-[35px] block'>
                {
                    navlink.map((link)=>{
                        return(
                            <li className='relative md:m-0 mt-[20px] text-[18px]'>
                            <NavLink to={link.pathname}>{link.name}</NavLink>
                        </li>
                        )
                    })
                }
            </ul>
        </nav>
        <div className="list_item flex gap-[25px] justify-center items-center">
            <div className="box relative cursor-pointer"onClick={cartpage}>
                  <button onClick={cartpage}>
                     <FiShoppingCart size={25}/>
                  </button>
                  <div className={totalQty >0 ? 'absolute top-[-15%] right-[-10px] w-[20px] h-[20px] text-[13px] bg-orange-500 flex justify-center items-center rounded-full text-white':''}>
                     {totalQty >0 ? totalQty:""}
                  </div>
            </div>
            <div className="box">
                  <button>
                     <TbShoppingBagHeart size={25}/>
                  </button>
            </div>
           <div className="menu text-[30px] md:hidden">
           {menu ? <IoMdClose size={30} onClick={activemenufunction} className='cursor-pointer' />:<IoMenuSharp className='cursor-pointer' size={30} onClick={activemenufunction} />}
           </div>
        </div>
    </header>
  )
}

export default Header