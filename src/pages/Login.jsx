import React from 'react'
import { Link } from 'react-router'
import Footer from '../components.jsx/Footer'
import Header from '../components.jsx/header'





function Login() {
  return (
   <div>
    <button className='h-[40px] w-[100px] bg-emerald-700 rounded-[5px] text-white text-[20px] p-[5px]'><Link to='/'>Home</Link></button>
    <Header/>
    <div className='flex flex-col  justify-center items-center py-[20px] gap-[20px]'>
    <p className='bg-gray-200 w-full py-[20px] flex justify-center items-center text-[40px] font-serif'>Login</p>
      
      <div className='flex flex-col py-[90px] px-[100px] bg-emerald-700 hover:bg-emerald-400 rounded-[10px] justify-center items-center gap-[30px] '>
       <div className='flex flex-col gap-[10px]'>
         <label className='text-[25px] font-serif'>Username</label>
         <input type='text ' placeholder='Enter username' className='bg-white w-[230px] rounded-[5px] h-[30px] pl-[10px]'/>
        </div> 
       <div className='flex flex-col gap-[10px]'>
         <label className='text-[25px] font-serif'>Password</label>
         <input type='password ' placeholder='Enter password' className='bg-white w-[230px] h-[30px] rounded-[5px] pl-[10px]' /> 
       </div>
       <div className='mt-[15px]'>
          <button className='h-[40px] w-[100px] bg-emerald-500 rounded-[5px] text-white text-[20px] p-[5px]'>login</button>

       </div>
       <p className='text-white mt-[20px]'>Not a member ? <button className=' hover:bg-emerald-700 h-[30px] w-[70px] rounded-[8px] text-black hover:text-white '><Link to='/register'>Register</Link></button></p>
        
        


      </div>
      
        
        
    </div>
    <Footer/>
    </div>
  )
}

export default Login