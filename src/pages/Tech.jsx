import React from 'react'
import { AiOutlineLaptop } from "react-icons/ai";

import { GiMusicalNotes } from "react-icons/gi";
<GiMusicalNotes />
function Tech() {
  const data=[
    {
      title:"Technology",
      icon:<AiOutlineLaptop />
    },
    {
      title:"Arts and music",
      icon:<GiMusicalNotes/>
    }
  ]
  return (
    <div className='grid grid-cols-5 justify-around gap-[30px] bg-gray-200 p-[30px]'>
      {data.map((e)=>{
        return   <div key={e.title}className='p-[30px] aspect-square bg-white flex flex-col justify-center items-center gap-[20px]'>
        <div className='h-[40px] aspect-square rounded-full bg-emerald-200 flex justify-center items-center'> {e.icon}</div>
         <p>{e.title}</p>

       </div>
      })}
        

    </div>
  )
}

export default Tech