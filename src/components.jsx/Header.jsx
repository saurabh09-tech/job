import React, { useState } from 'react'
import { Link } from 'react-router'
import { RiMenuUnfold2Line } from "react-icons/ri";


function Header() {

  const [isvisible,setisvisible]=useState(true)
  const Nav =()=>{
    return <div className='animate flex  flex-col md:flex-row justify-between md:h-[50px] md:w-full  p-[20px]'>
      
    <div className='text-emerald-700 text-[25px] font-serif'><p>JobsPortal</p></div> 
    <div className='flex  flex-col md:flex-row gap-[15px] text-[18px] '>
    <p className='text-emerald-700 font-serif text-[20px]'><Link to="/login">Login</Link></p>
    <button className='h-[30px] w-[100px]  rounded-[8px] bg-emerald-700 text-white   '><Link to='/form'>Post a job</Link></button> 
     </div> 
    

 </div>
  }

  return (
  <div>
    <div className='md:hidden'>
             <button className='flex flex-row h-[30px] w-[100px]  rounded-[8px] bg-emerald-700 text-white  items-center justify-center gap-[10px]' onClick={()=>setisvisible(!isvisible)}>Menu<RiMenuUnfold2Line /></button>
       {isvisible ? <Nav/> :<div></div>}

       </div>
       <div className='hidden md:flex md:flex-row '>
<Nav/>
    </div>

    </div>
   
    
  )
}

export default Header