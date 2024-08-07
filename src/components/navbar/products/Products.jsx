import React, { useState } from 'react'
import { FiHeart } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import AllData from '../../../data/Data';
import { useDispatch } from 'react-redux';
import { add_to_cart } from '../../../reducers/Createslice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Productitem from './Productitem';
const Products = () => {
  const dispatch=useDispatch();
  const [currentpage,setpage]=useState(1);
  const [inputVal, setInputVal] = useState("");
const [searchpro,setsearchpro]=useState("")
  const [data, setData] = useState(AllData);
  const recordperpage=6;
  const lastindex=currentpage *recordperpage;
  const firstindex=lastindex-recordperpage;
  const records=data.slice(firstindex,lastindex);
  const npage=Math.ceil(data.length / recordperpage);
  const numbers=[...Array(npage+1).keys()].slice(1);
  const datalength=data.length;

  const selectItem = (event) =>{
    console.log(event.target.value);
    setInputVal(event.target.value)
}
if(inputVal == "Product A to Z"){
  data.sort((a,b)=>{
      let nameA = a.title;
      let nameB = b.title;

      if(nameA < nameB){
          console.log(nameA);
          console.log(nameB);

          return -1;

      }

  })
}
if(inputVal == "Product Z to A"){
  data.sort((a,b)=>{
      let nameA = a.title;
      let nameB = b.title;

      if(nameA > nameB){
          console.log(nameA);
          console.log(nameB);

          return -1;

      }

  })
}
if(inputVal == "Price High to Low"){
  data.sort((a,b)=>{
      return b.price - a.price

  })
}
if(inputVal == "Price Low to High"){
  data.sort((a,b)=>{
      return a.price - b.price

  })
}
  function prepage(){
    if(currentpage != firstindex){
            setpage(currentpage-1);
    }
  }
  function changepage(id){
    setpage(id)
  }
  function nextpage(){
    if(currentpage != lastindex){
          setpage(currentpage+1)
    }
  }
  // filter

// ---------------handlecategory----------------
function handlecategory(category){
   const matchcategory=data.filter((dat)=>{
     return dat.category===category;
   });
   setData(matchcategory)
  
}
function fashioncategory(category){
      const matchcate=data.filter((da)=>{
        return da.category===category
      });
      setData(matchcate)
}
// toastify

function productadd(datap){
  toast("Product Added!")
  dispatch(add_to_cart({datap,qty: 1 }))
}
  return (
<div className="product-main flex w-full gap-[20px] h-auto px-[40px] flex-col-reverse md:flex-row md:px-[150px] py-[50px] border-t-[1px] border-[#EEEEEE]">
        <div className="product-left w-[100%] md:w-[30%] h-auto ">
                <div className="search py-[20px] border-b-[1px] border-[#EEEEEE]">
                    <h1 className='text-[20px] font-[500] mb-[10px]'>Search:</h1>
                    <div className='w-full h-[55px] border-[1px] border-[#EEEEEE] relative'>
                      <input className='w-full h-[100%] outline-none px-[10px] text-[16px] tracking-wide' type="text"onChange={(e)=>{setsearchpro(e.target.value)}} name="" id=""placeholder='Search....' />
                     <div className='w-[20%] h-[100%] absolute bg-white top-0 right-0 flex justify-end items-center px-[10px]'>
                     <button className=' text-[25px] cursor-pointer'><IoIosSearch/></button>
                     </div>
                    </div>
                </div>
                <ToastContainer />
                <div className='py-[20px] border-b-[1px] border-[#EEEEEE]'>
                  <h1 className='text-[20px] font-[500] mb-[20px]'>Category</h1>
                <div className="category">
                   <div className='flex gap-[15px] items-center mt-[10px]'>
                      <input type="checkbox"onClick={()=>{setData(AllData)}} className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                      <label htmlFor="name"className='text-[16px]'>All Categories</label>
                   </div>
                   <div className='flex gap-[15px] items-center mt-[10px]'>
                      <input type="checkbox"onClick={()=>{fashioncategory("fashion")}} className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                      <label htmlFor="name"className='text-[16px]'>Fashion</label>
                   </div>
                   <div className='flex gap-[15px] items-center mt-[10px]'>
                      <input type="checkbox"onClick={()=>{fashioncategory("men")}} className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                      <label htmlFor="name"className='text-[16px]'>Men</label>
                   </div>
                   <div className='flex gap-[15px] items-center mt-[10px]'>
                      <input type="checkbox"onClick={()=>{fashioncategory("women")}} className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                      <label htmlFor="name"className='text-[16px]'>Women</label>
                   </div>
                   <div className='flex gap-[15px] items-center mt-[10px]'>
                      <input type="checkbox"onClick={()=>{fashioncategory("kids")}} className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                      <label htmlFor="name"className='text-[16px]'>Kids</label>
                   </div>
                </div>
                </div>
                {/* <div className="color py-[20px] border-b-[1px] border-[#EEEEEE]">
                <h1 className='text-[20px] font-[500] mb-[20px]'>Colors</h1>
                <div className="color flex gap-[20px]">
                  <input type="radio"value="" className='text-green-500 w-[25px] h-[25px]' />
                  <input type="radio"value=""className='text-green-500 w-[25px] h-[25px]'  />
                  <input type="radio"value=""className='text-green-500 w-[25px] h-[25px]'  />
                  <input type="radio"value=""className='text-green-500 w-[25px] h-[25px]'  />
                  <input type="radio"value=""className='text-green-500 w-[25px] h-[25px]'  />
                </div>
                </div> */}
                <div className='py-[20px] border-b-[1px] border-[#EEEEEE]'>
                  <h1 className='text-[20px] font-[500] mb-[20px]'>Sizes</h1>
                <div className="category">
                   <div className='flex gap-[15px] items-center mt-[10px]'>
                      <input type="checkbox"value="" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                      <label htmlFor="name"className='text-[16px]'>XS</label>
                   </div>
                   <div className='flex gap-[15px] items-center mt-[10px]'>
                      <input type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                      <label htmlFor="name"className='text-[16px]'>S</label>
                   </div>
                   <div className='flex gap-[15px] items-center mt-[10px]'>
                      <input type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                      <label htmlFor="name"className='text-[16px]'>M</label>
                   </div>
                   <div className='flex gap-[15px] items-center mt-[10px]'>
                      <input type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                      <label htmlFor="name"className='text-[16px]'>L</label>
                   </div>
                   <div className='flex gap-[15px] items-center mt-[10px]'>
                      <input type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                      <label htmlFor="name"className='text-[16px]'>XL</label>
                   </div>
                   <div className='flex gap-[15px] items-center mt-[10px]'>
                      <input type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                      <label htmlFor="name"className='text-[16px]'>2XL</label>
                   </div>
                </div>
                </div>
        </div>
        {/* -----------------right side---------------------- */}
        <div className='w-[100%] md:w-[70%] py-[40px]'>
        <div className="filter w-full py-[30px] flex justify-between items-center">
          <h1 className='text-[16px]'>Showing 1-{datalength}</h1>
          <div className="box">
            <select name="option" onChange={selectItem} id=""className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
              <option value="">Featured</option>
              <option value="Product A to Z">Alfa A-Z</option>
              <option value="Product Z to A">Alfa Z-A</option>
              <option value="Price Low to High">Price Low-Hight</option>
              <option value="Price High to Low">Price Hight-Low</option>
            </select>
          </div>
        </div>
    {/* ------------------products---------------- */}
    <div className=' w-[100%] flex justify-between items-center gap-[10px] md:gap-[20px] flex-wrap'>
         {
         records.length >0 ?   records.filter((data)=>{
          if(searchpro==""){
                 return data
          }else if(data.title.toLocaleLowerCase().includes(searchpro.toLocaleLowerCase())){
                  return data;
          }
        }).map((cloth)=>{
          return(
            <Productitem
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
        }):<h1 className='p-[30px] text-[30px] font-[500] text-center w-full'>Filter did not match!</h1>
         } 
   </div>
    {/* --------------------products------------- */}
        <div className="pagination py-[30px] flex justify-center items-center w-full">
           <ul className='flex rounded-[5px] overflow-hidden'>
           <li className='p-[15px] bg-orange-500 text-white hover:bg-orange-600 border-r-[1px] border-orange-700 text-[15px] cursor-pointer font-[500]'><a href="#"onClick={prepage}>Prev</a></li>
           {
            numbers.map((n,i)=>{
              return(
            <li className='p-[15px] bg-orange-500 text-white hover:bg-orange-600 border-r-[1px] border-orange-700 text-[15px] cursor-pointer font-[500]'key={i}><a href="#"onClick={()=>{changepage(n)}}>{n}</a></li>
              )
            })
           }
            <li className='p-[15px] bg-orange-500 text-white hover:bg-orange-600 border-r-[1px] border-orange-700 text-[15px] cursor-pointer font-[500]'><a href="#"onClick={nextpage}>Next</a></li>
           </ul>
        </div>
       </div>
        {/* -----------------right side---------------------- */}

      </div>
  )
}

export default Products