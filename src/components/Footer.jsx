import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='w-full font-sora h-auto   bg-white border-t-[1px] border-[#EEEEEE] px-[40px] md:px-[150px] pt-[40px]'>
          <div className='main_box w-full flex md:flex-row flex-col justify-between items-center gap-[20px] md:gap-[10px]'>
          <div className="box w-[100%] md:w-[28%]">
            <h1 className='text-[20px] mb-[10px] font-[500]'>About Shop</h1>
            <p className='text-[16px] font-[400] mb-[10px] text-[#6c757d]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Read more</p>
              <div className="location">
                <p className='text-[15px] mb-[5px] '>E. hello@uxper.co</p>
                <p className='text-[15px]'>T. (00) 342 489 33</p>
                </div>         
          </div>
          <div className="company w-[100%] md:w-auto">
          <h1 className='text-[20px] mb-[10px] font-[500]'>Company</h1>
          <ul>
            <li className='mb-[8px] text-[#222] hover:underline'>
                <NavLink to="">Home</NavLink>
            </li>
            <li className='mb-[8px] text-[#222] hover:underline'>
                <NavLink to="">Shop</NavLink>
            </li>
            <li className='mb-[8px] text-[#222] hover:underline'>
                <NavLink to="">Sell</NavLink>
            </li>
            <li className='mb-[8px] text-[#222] hover:underline'>
                <NavLink to="">Contact</NavLink>
            </li>
          </ul>
          </div>
          <div className="company w-[100%] md:w-auto">
          <h1 className='text-[20px] mb-[10px] font-[500]'>Customer Care</h1>
          <ul>
            <li className='mb-[8px] text-[#222] hover:underline'>
                <NavLink to="">Size Guide</NavLink>
            </li>
            <li className='mb-[8px] text-[#222] hover:underline'>
                <NavLink to="">Help & FAQs</NavLink>
            </li>
            <li className='mb-[8px] text-[#222] hover:underline'>
                <NavLink to="">Return My Order</NavLink>
            </li>
            <li className='mb-[8px] text-[#222] hover:underline'>
                <NavLink to="">Refer a Friend</NavLink>
            </li>
          </ul>
          </div>
          <div className="company w-[100%] md:w-auto">
          <h1 className='text-[20px] mb-[10px] font-[500]'>Terms & Policies</h1>
          <ul>
            <li className='mb-[8px] text-[#222] hover:underline'>
                <NavLink to="">Duties & Taxes</NavLink>
            </li>
            <li className='mb-[8px] text-[#222] hover:underline'>
                <NavLink to="">Shopping Info</NavLink>
            </li>
            <li className='mb-[8px] text-[#222] hover:underline'>
                <NavLink to="">Privacy Policy</NavLink>
            </li>
            <li className='mb-[8px] text-[#222] hover:underline'>
                <NavLink to="">Terms Conditions</NavLink>
            </li>
          </ul>
          </div>
          <div className="company w-[100%] md:w-auto">
          <h1 className='text-[20px] mb-[10px] font-[500]'>Follow Us</h1>
          <ul>
            <li className='mb-[8px] text-[#222] hover:underline'>
                <NavLink to="">Instagram</NavLink>
            </li>
            <li className='mb-[8px] text-[#222] hover:underline'>
                <NavLink to="">Facebook</NavLink>
            </li>
            <li className='mb-[8px] text-[#222] hover:underline'>
                <NavLink to="">Twitter</NavLink>
            </li>
            <li className='mb-[8px] text-[#222] hover:underline'>
                <NavLink to="">Youtube</NavLink>
            </li>
          </ul>
          </div>
          </div>
          <div className="box flex-col md:flex-row gap-[20px] md:gap-[10px]  py-[20px] border-t-[1px] border-[#EEEEEE] flex justify-between items-center">
            <p>© 2024 DexignZone Theme. All Rights Reserved.</p>
            <div className="card">
                <img src="https://pixio.dexignzone.com/xhtml/images/footer-img.png" alt="" />
            </div>
          </div>
    </footer>
  )
}

export default Footer