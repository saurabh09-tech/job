import React from 'react'
import { Link } from 'react-router'
import Footer from '../components.jsx/Footer'
import Header from '../components.jsx/header'

function Register() {
  return (
    <div>
      <button className='h-[40px] w-[100px] bg-emerald-700 rounded-[5px] text-white text-[20px] p-[5px]'><Link to='/'>Home</Link></button>  
      <Header/> 
    <div className='flex flex-col  justify-center items-center py-[20px] gap-[20px] w-full'>
    <p className='bg-gray-200 w-full py-[20px] flex justify-center items-center text-[40px] font-serif'>Register</p>
      
      <div className='flex flex-col px-[100px] py-[50px] bg-emerald-700 hover:bg-emerald-400 rounded-[20px] justify-center items-center gap-[30px] mb-[30px]   '>
        <p className='text-white text-[22px]'>Already have an account? <button className=' hover:bg-emerald-700 py-[3px] px-[15px] rounded-[10px] text-black hover:text-white text-[18px] '><Link to='/login'>Login</Link></button> </p>
       <div className='flex flex-col gap-[10px]'>
         <label className='text-[25px] font-serif'>Username</label>
         <input type='text ' placeholder='Create username' className='bg-white w-[330px] rounded-[5px] h-[30px] pl-[10px] '/>
        </div> 
        
       <div className='flex flex-col gap-[10px]'>
         <label className='text-[25px] font-serif'>Password</label>
         <input type='password ' placeholder='Enter password' className='bg-white w-[330px] h-[30px] rounded-[5px] pl-[10px]' /> 
       </div>
       <div className='flex flex-col gap-[10px]'>
         <label className='text-[25px] font-serif'>Email</label>
         <input type='email ' placeholder='@gamil.com' className='bg-white w-[330px] h-[30px] rounded-[5px] pl-[10px] ' /> 
       </div>
       <div className='flex flex-col gap-[10px]'>
         <label className='text-[25px] font-serif'>Phone</label>
         <input type='text ' placeholder='Enter phone number' className='bg-white w-[330px] h-[30px] rounded-[5px] pl-[10px] ' /> 
       </div>
      
       
       <div className='mt-[20px]'>
          <button className='h-[40px] w-[200px] bg-emerald-500 rounded-[5px] text-white text-[20px] p-[5px] hover:bg-emerald-700'>Create an account</button>

       </div>
       
        
        


      </div>
      
        
      
    </div>
    
  
    <Footer/>     
    </div>
  )
}

export default Register