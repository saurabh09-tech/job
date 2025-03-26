import React from 'react'
import Header from '../components.jsx/header'
import { Link } from 'react-router'
import Footer from '../components.jsx/Footer'

function Details() {
  return (
    <div>
      <button className='h-[40px] w-[100px] bg-emerald-700 rounded-[5px] text-white text-[20px] p-[5px]'><Link to='/'>Home</Link></button>
        <Header/>
        <p className='bg-gray-200 w-full py-[20px] flex justify-center items-center text-[40px] font-serif mt-[10px]'>Laravel Developer(Full-Time)-Match company limited </p>
        <div className='flex flex-row gap-[20px] justify-center p-[15px]'>
          <button className='border-[1px] rounded-[7px] text-[18px] py-[8px] px-[15px]'><Link to=''>View Company</Link></button>
          <button className=' bg-emerald-700 rounded-[7px] text-white text-[18px] py-[8px] px-[15px]'><Link to='/details'>Apply This Job</Link></button>
           </div>

        <div className='px-[80px] py-[20px] flex flex-col gap-[30px]  '>
          
<p className='flex flex-row gap-[10px] text-[15px] text-gray-700'> <b>Minimum Qualification:</b> Bachelor</p>
<p className='flex flex-row gap-[10px] text-[15px] text-gray-700'><b>Experience Level:</b> Mid level</p>
<p className='flex flex-row gap-[10px] text-[15px] text-gray-700'><b>Experience Length:</b> 2 years</p>
<p className='flex flex-row gap-[10px] text-[15px] text-gray-700'><b>Location:</b> San Francisco, USA</p>
<p className='flex flex-row gap-[10px] text-[15px] text-gray-700'><b>Application Deadline:</b> 12/08/2022</p>
<p className='flex flex-row gap-[10px] text-[15px] text-gray-700'><b>Salary Range:</b> $ 105,000 - 150,000</p>

<b>Job description</b>
<div className=' flex flex-col gap-[20px] text-[15px] text-gray-700'>
<p>We are searching for a Laravel developer to build web applications for our company. In this role, you will design and create projects using
 Laravel framework and PHP, and assist the team in delivering high-quality web applications, services, and tools for our business.</p>

 <p>To ensure success as a Laravel developer you should be adept at utilizing Laravel's GUI and be able to design a PHP application from start
 to finish. A top-notch Laravel developer will be able to leverage their expertise and experience of the framework to independently produce
 complete solutions in a short turnaround time.</p>
 </div>

  <b>Laravel Developer Requirements:</b>
<ul className='flex flex-col gap-[10px] text-[15px] text-gray-700 list-disc'>
  <li>A degree in programming, computer science, or a related field.</li>
  <li>Experience working with PHP, performing unit testing, and managing APIs such as REST.</li>
  <li>A solid understanding of application design using Laravel.</li>
  <li>Knowledge of database design and querying using SQL.</li>
  <li>Proficiency in HTML and JavaScript. Experience developing in Vue is considered a plus.</li>
  <li>Practical experience using the MVC architecture.</li>
  <li>The ability to work on LAMP development environment</li>
  <li>Problem-solving skills and critical mindset.</li>
  <li>Great communication skills.</li>
  <li>The desire and ability to learn.</li>

  </ul>

 <b>Responsibilities:</b>
 <ul className='flex flex-col gap-[10px] text-[15px] text-gray-700 list-disc'>
 <li>Discussing project aims with the client and development team.</li>
 <li>Designing and building web applications using Laravel.</li>
 <li>Troubleshooting issues in the implementation and debug builds.</li>
 <li>Working with front-end and back-end developers on projects.</li>
 <li>Testing functionality for users and the backend.</li>
 <li>Ensuring that integrations run smoothly.</li>
 <li>Scaling projects based on client feedback.</li>
 <li>Recording and reporting on work done in Laravel.</li>
 <li>Maintaining web-based applications.</li>
 <li>Presenting work in meetings with clients and management.</li>
</ul>
        </div>
        <Footer/>
    </div>
  )
}

export default Details