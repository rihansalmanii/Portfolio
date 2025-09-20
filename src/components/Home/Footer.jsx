import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router';

const Footer = () => {
  return (
   <div className=''>
     <div className='flex justify-between px-20 py-10 border-t-[1.5px] border-[#b7b7b7] shadow-md'>
        <div className='w-[20vw]'>
           <h1 className='font-semibold text-2xl'>Rihan Salmani</h1>
            <p className='font-medium text-[#7d7d7d] text-sm py-4'>Web Developer and Designer learning new technologies and building web apps that solve problems. Connect with me: </p>
            <div className='flex gap-5 font-[roboto]'>
                <span className='border-[1px] border-transparent p-2 bg-[#d6d6d6] hover:bg-[#e6e6e6] rounded-full'>
                    <a href="">
                        <FaInstagram size={20} />
                    </a>
                </span >
                <span className='border-[1px] border-transparent p-2 bg-[#d6d6d6] hover:bg-[#e6e6e6] rounded-full'>
                    <a href="">
                        <FaGithub size={20} />
                    </a>
                </span>
                <span className='border-[1px] border-transparent p-2 bg-[#d6d6d6] hover:bg-[#e6e6e6] rounded-full'>
                    <a href="">
                        <FaLinkedinIn size={20} />
                    </a>
                </span>
            </div>
        </div>
        <div className='w-[15vw] flex flex-col font-[roboto] font-semibold'>
            <h1 className='font-semibold font-[roboto] pb-2'>Quick Links</h1>
           <div className='flex flex-col gap-1'>
            <Link to='/home' className='text-[#7d7d7d] hover:text-[#292929] text-[1rem]'>Home</Link>
           <Link to='/projects' className='text-[#7d7d7d] hover:text-[#292929] text-[1rem]'>Projects</Link>
           <Link to='/skills' className='text-[#7d7d7d] hover:text-[#292929] text-[1rem]'>Skills</Link>
           <Link to='/contact' className='text-[#7d7d7d] hover:text-[#292929] text-[1rem]'>Contact</Link>
           </div>
           
        </div>
        <div className='w-[20vw] flex flex-col font-[roboto] font-semibold'>
            <h1 className='font-semibold  font-[roboto] pb-2'>Contact</h1>
            <div className='flex flex-col gap-1'>
                <p className='text-[#7d7d7d]  text-[1rem]'>New Delhi, India</p>
                <p className='text-[#7d7d7d]  text-[1rem]'>salmanirihan76@gmail.com</p>
                <p className='text-[#7d7d7d]  text-[1rem]'>+91 9821496758</p>
            </div>
        </div>
    </div>
    <div className='flex justify-center py-5 border-t-[1px] border-[#bdbdbd] font-semibold select-none font-[roboto]'>
        <p className='text-[#484848] ' >© 2025 Rihan Salmani. All rights reserved.</p>
    </div>
   </div>
  )
}

export default Footer