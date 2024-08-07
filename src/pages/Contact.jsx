import React from 'react'
import Header from '../components/navbar/Header'

const Contact = () => {
  return (
     <section className='font-sora'>
       <div>
        <Header/>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747017.1750759482!2d87.70285707363887!3d23.489432210217977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2z4Kas4Ka-4KaC4Kay4Ka-4Kam4KeH4Ka2!5e0!3m2!1sbn!2sbd!4v1722680212346!5m2!1sbn!2sbd"className='w-full h-[400px]' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        {/* ------------------form------------------- */}
         <div className='w-full h-auto px-[40px] md:px-[150px] py-[50px] gap-[40px] flex flex-col md:flex-row justify-center items-center'>
            <div className="left w-[100%] md:w-[45%] ">
                <img className='w-[100%]' src="https://cartzio.vercel.app/static/media/contact.790d7cc953dc2b3d597592c95ddc86e4.svg" alt="" />
            </div>
            <div className="right w-[100%] md:w-[40%] shadow-md p-[25px] border-[1px] border-[#EEEEEE] rounded-[10px]">
                <form action="">
                    <h1 className='text-[25px] font-[500] mb-[20px]'>Get in touch !</h1>
                    <div className="inpbox flex md:flex-row flex-col gap-[10px] mb-[10px] ">
                       <div className="sub-box flex flex-col gap-[5px]">
                        <label htmlFor="Your Name ">Your Name:</label>
                       <input type="text"placeholder='Name:' className='border-[1px] border-[#EEEEEE] px-[10px] py-[5px] h-[50px] rounded-[5px]' />
                       </div>
                       <div className="sub-box flex flex-col gap-[5px]">
                        <label htmlFor="Your Name">Your Email:</label>
                       <input type="text"placeholder='Email:'  className='border-[1px] border-[#EEEEEE] px-[10px] py-[5px] h-[50px] rounded-[5px]'/>
                       </div>
                    </div>
                    <div className="inpbox w-full flex flex-col gap-[5px] mb-[10px] ">
                        <label htmlFor="Your Question:">Your Question:</label>
                        <input type="text"placeholder='Subject:'className='w-full h-[50px] border-[1px] border-[#EEEEEE] px-[10px] py-[5px] h-[50px] rounded-[5px]' />
                    </div>
                    <div className="inpbox flex flex-col gap-[5px] ">
                        <label htmlFor="Your Comment:">Your Comment:</label>
                        <textarea name="message" id=""placeholder='Message:' className='w-full h-[150px] border-[1px] border-[#EEEEEE] px-[10px] py-[10px]  rounded-[5px]'></textarea>
                    </div>
                    <button className='px-[35px] py-[15px] bg-orange-500 text-[16px] text-white mt-[15px] rounded-[5px]'>Send Message</button>
                </form>
            </div>
         </div>
        {/* ------------------form------------------- */}
       </div>
     </section>
  )
}

export default Contact