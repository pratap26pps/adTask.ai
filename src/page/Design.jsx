import React from 'react'
import { FaStar } from "react-icons/fa6";
const Design = () => {
  return (
      
     <div className="relative  lg:w-[710px] z-10 h-[490px] lg:left-[349px] left-[79px]  ">

       <div className='relative  lg:w-[710px] z-10 h-[490px]   blur-3xl  '>                 
        {/* Child with clip-path */}
        <div className="absolute
          w-[531px]  h-[531px]
          bg-[rgba(38,48,72,1)]
          [clip-path:polygon(50%_0%,0%_100%,100%_100%)]
         
        ">
          </div>
        </div>  
 

          <div className='absolute flex gap-1 cursor-pointer   
           w-[371px] rounded-[15px] border-2 top-[80px] left-[85px]
           bg-[rgba(40,40,40,1)]  border-[rgba(255,255,255,0.05)]
           text-[#e5e7ec] p-2 
         ' 
          ><div className=''>
            < FaStar className='text-amber-100 size-2'/> 
            < FaStar className='text-amber-100 size-3 ml-1'/>
          </div>Transform Your Digital Presence with AI Agents</div>

           <div className='absolute z-20 top-[152px] text-9xl opacity-10
             text-[rgba(133,137,146,1)]'
           >ad<b>Task</b>.ai
           </div>
           <p className='lg:w-[767px] w-[553px]   h-[47px] top-[328px]
               text-white absolute 
]              lg:left-[-123px] z-50
           '>Stop struggling with marketing decisions.
            Our AI assistant analyzes your business,
             creates personalized strategies, and helps you execute them - all in real-time.
             </p> 
             <div className='absolute
           w-[185px] h-[48px] rounded-[15px] border-2 top-[421px] left-[155px]
           bg-[rgba(51,59,79,1)]  border-[rgba(255,255,255,0.05)]
            inset-0   bg-gradient-to-r from-[#7687B5] to-[#333B4F]
           text-white p-2 z-50
         ' 
          > Start Free Trail</div> 
          <p className=' text-[rgba(142,141,141,1)] absolute top-[485px] left-[125px]
        z-40   w-[246px] h-[15px] '>Try AdTask AI free for 30 days</p>
    </div>
  )
}

export default Design
