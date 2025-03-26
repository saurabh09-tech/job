import React, { useState } from 'react'
import Header from '../components.jsx/header'
import Footer from '../components.jsx/Footer'
import Tech from './tech'
import User from './user'
import { FaRegCirclePlay } from "react-icons/fa6";
import { Link } from 'react-router'


function Home() {
   
  const handlesubmit =()=>{

  }
 
  return (
    <div>
        <Header/>
        <div className=' w-full bg-emerald-200 mt-[5px] flex flex-row justify-around'>
          <div className='flex flex-col pt-[40px] md:pl-[100px] gap-[100px] md:w-[800px] w-[500px] '>
            <div className='flex flex-col gap-[20px]'>
            <p className=' text-[25px] md:text-[50px] md:font-serif font-light'>Find A <span className='text-emerald-700'>Job</span> That  <br/><span className='text-emerald-700'>Matches</span> Your <br/>Passion</p>
              <p className='text-zinc-500'>Hand-picked opportunities to work from home, 
              remotely, freelance,<br/>full-time, part-time, 
              contract and internships.</p>

              </div>
              <div>
             
              <input type='search' placeholder='search by the job title...' className='bg-white  w-[100px] md:w-[400px] h-[40px] rounded-[5px] pl-[10px] relative '  />
              <button className='bg-emerald-700   w-[50px] md:w-[100px] h-[40px] rounded-[5px] md:ml-[-100px] text-white absolute' onClick={handlesubmit}>Search</button>
             

              </div>
             

          </div>
          <div>
            <img src='./images/girl.png ' className='flex justify-center h-[600px] w-[500px] '/>
          </div>

        </div>
        <div className='flex flex-col gap-[10px] bg-gray-200 '>
          <p className='flex justify-around flex-col md:flex-row'>Popular Categories</p>
          <Tech/> 
          
        </div>
        <User/>
        
        <div className='flex justify-center py-[10px]'>
        <Link to='/Joblist'>
        <button className=' bg-emerald-700 rounded-[5px] text-white text-[18px] py-[7px] px-[10px] flex flex-row justify-center items-center gap-[5px] '>View more<FaRegCirclePlay/></button>
        </Link>
        </div>
        <Footer/>
    </div>
  )
}

export default Home