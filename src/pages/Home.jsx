import React from 'react'
import Header from '../components/navbar/Header'
import Subheader from '../components/navbar/Subheader'
import Category from '../components/navbar/sections/Category'
import Trendingitems from '../components/navbar/sections/Trendingitems'
import Products from '../components/navbar/products/Products'
import Offer from '../components/navbar/sections/Offer'
import Bestseller from '../components/navbar/sections/Bestseller'
import Sponsered from '../components/navbar/sections/Sponsered'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='font-sora'>
      <div className='font-sora w-full h-[100vh]'>
        {/* ---------------header------------------ */}
        <Header/>
           <div className="hero w-full md:h-[88vh] flex flex-col-reverse md:flex-row justify-between items-center px-[40px] md:px-[150px] py-[40px] gap-[50px]">
              <div className="left w-[100%] md:w-[40%]">
                   <h3 className='text-[18px] mb-[10px] font-[400]'>HOLIDAY 2023</h3>
                   <h1 className='text-[30px] md:text-[70px] mb-[5px]'>End Of Season Sale</h1>
                   <p className='text-[17px] md:text-[18px] font-[500] mb-[20px]'>New colors, now also available</p>
                  <NavLink to="/shop">
                   <button className='bg-orange-600 px-[35px] py-[15px] text-white shadow-lg rounded-[5px]'>View Collection</button>
                  </NavLink>
              </div>
              <div className="right w-[70%] md:w-[60%]">
                <img className='w-[100%] md:w-[80%] m-auto' src="https://guza-demo.vercel.app/assets/imgs/page/homepage5/banner.png" alt="" />
              </div>
           </div>
      </div>
      {/*---------------------- category----------------------- */}
        <Category/>
      {/*---------------------- category----------------------- */}
      {/*---------------------- trending items----------------------- */}
       <Trendingitems/>
      {/*---------------------- trending items----------------------- */}
      {/* ---------------offer----------------- */}
      <Offer/>
      {/*---------------------- best sell items----------------------- */}
      <Bestseller/>
      {/*---------------------- sponsered ----------------------- */}
       <Sponsered/>
      {/*---------------------- products items----------------------- */}
      {/* <Products/> */}
      {/*---------------------- products items----------------------- */}
    </div>
  )
}

export default Home