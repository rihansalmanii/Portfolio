import React, { useEffect } from 'react'
import gsap from 'gsap'
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {

  useEffect(() => {
    const tl = gsap.timeline();

    
    tl.fromTo(
      '.leftPart',
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', stagger: 0.5, delay: 0.5 } 
    );

    gsap.fromTo(
      '.rightPart',
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' } 
    );
  }, []);
  

  return (
    <div>
      <div className='w-full h-fit flex justify-between px-[10rem] py-[5rem] z-[5] select-none'>
        <div className=' w-[60%]'>
            <h1 className='leftPart inline-block text-[4vw] font-semibold font-[greaterTheory] '>Rihan</h1>
             <h1 className='leftPart inline-block text-[4vw] font-semibold font-[greaterTheory] ml-4  '>Salmani</h1>
              
            <p className='font-semibold font-[roboto] text-[#696969] hover:text-[#3a3a3a]'>Hi, I’m Rihan Salmani — a passionate web developer and aspiring software engineer from IITM Janakpuri. I build intuitive and modern web experiences using the latest technologies. My journey is driven by curiosity, creativity, and a love for solving problems. Explore my projects and skills, and let’s create something amazing together.</p>

          <div className='leading-[5rem] mt-16 flex flex-col'>
            <h1 className='text-[5vw] font-semibold text-[#e9e9e9] font-[devnagri] hover:text-[#dbdbdb] inline-block'>Learning</h1>
            <h1 className='text-[5vw] font-semibold text-[#e9e9e9] font-[devnagri] hover:text-[#dbdbdb] inline-block'>Building</h1>
          </div>

        </div>
        <div className='rightPart h-[60vh] w-[25vw] object-cover rounded-[2rem] overflow-hidden'>
          <img src="https://images.unsplash.com/photo-1750564042970-27123995da1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
        </div>
    </div>
    <div className='flex items-center w-full justify-center pb-20'>
         <div className='border-2  border-[#b1b1b1] p-4 rounded-full'>
          <span className='hover:rotate-45'>
          <FaArrowDown color='#b1b1b1' />
        </span>
         </div>
       </div>
    </div>
  )
}

export default Hero