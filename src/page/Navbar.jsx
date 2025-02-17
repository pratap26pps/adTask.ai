import React from 'react'
import { MdOutlineArrowDropDown } from "react-icons/md";
const Navbar = () => {
  return (
    <div className='text-white'>
       <div className=' lg:w-[1176px] w-[760px] lg:scale-100 scale-75 h-[63px] z-50  rounded-[16px] relative top-[33px]  lg:left-[76px]
        border-[1px] border-[rgba(255,255,255,0.1)] p-2
       bg-[rgba(105,97,92,0.1)]'>
               <div className='flex justify-between'>
                  <div className='text-white text-2xl mt-1'>ad<b>Task</b>.ai</div>
                  <div className='flex gap-3 mt-2 lg:ml-10 ml-0'>
                    <div className='cursor-pointer gap-1 flex'><p>Products</p><MdOutlineArrowDropDown className='text-white mt-1'/> </div>
                    <div className='cursor-pointer gap-1 flex'><p>Tools</p><MdOutlineArrowDropDown className='text-white mt-1'/></div>
                    <div className='cursor-pointer'>Contact Us</div>
                  </div>
                  <div className='flex gap-5 '>
                  <div className='p-2 w-[132px] cursor-pointer rounded-full    bg-[rgba(38,48,72,1)] border-1 border-blue-400 shadow-sm shadow-amber-50'>Log in</div>
                  <div className='p-2 w-[132px] cursor-pointer rounded-full     bg-[rgba(38,48,72,1)] border-1 border-blue-400 shadow-sm shadow-amber-50'>Schedule a Call</div>
                    
                  </div>
               </div>
      </div>
    </div>
  )
}

export default Navbar
