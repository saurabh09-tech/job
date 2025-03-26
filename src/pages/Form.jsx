import React from "react";
import { Link } from "react-router";
import Header from "../components.jsx/header";
import Footer from "../components.jsx/Footer";

function Form() {
  return (
    <>
      <button className="h-[40px] w-[100px] bg-emerald-700 rounded-[5px] text-white text-[20px] p-[5px]">
        <Link to="/">Home</Link>
      </button>
      <Header />
       {/* this background of the form div */}
       <div className="flex gap-[20px] flex-col py-[20px] items-center ">
      <p className="bg-gray-200 w-full py-[20px] flex justify-center items-center text-[40px] font-serif ">Create a job</p>
        {/* main div for form */}
        <div className="p-[30px] border-[1px] rounded-[8px] flex flex-col  gap-[20px]">
          <div className="flex flex-row gap-[40px] ">
            <div className="flex flex-col gap-[10px]">
              <label>Company Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-[450px] border-[1px] border-gray-300 rounded-[4px] h-[40px] pl-[15px]"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Company Website</label>
              <input
                type="text"
                placeholder="Website Link"
                className="w-[450px] border-[1px] border-gray-300 rounded-[4px] h-[40px] pl-[15px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
          <label>Job Title</label>
              <input
                type="text"
                placeholder="Title"
                className="w-[950px] border-[1px] border-gray-300 rounded-[4px] h-[40px] pl-[15px]"
              />
              </div>
              <div className="flex flex-row gap-[40px]">
            <div className="flex flex-col gap-[10px]">
              <label>Job Category</label>
              <select className="w-[450px] border-[1px] border-gray-300 rounded-[4px] h-[40px] pl-[15px]">
                <option>Technology</option>
                <option>Software Development</option> 
                </select>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Job Type</label>
             <select className="w-[450px] border-[1px] border-gray-300 rounded-[4px] h-[40px] pl-[15px]">
              <option>Full-Time</option>
              <option>Half-Time</option>
             </select>
            </div>
          </div> 
          <div className="flex flex-row gap-[40px]">
            <div className="flex flex-col gap-[10px]">
              <label>Job Location</label>
              <input
                type="text"
                placeholder="Location"
                className="w-[450px] border-[1px] border-gray-300 rounded-[4px] h-[40px] pl-[15px]"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Salary Range</label>
              <input
                type="text"
                placeholder="Salary Range"
                className="w-[450px] border-[1px] border-gray-300 rounded-[4px] h-[40px] pl-[15px]"
              />
            </div>
          </div>
           <div className="flex flex-row gap-[40px]">
            <div className="flex flex-col gap-[10px]">
              <label>Experience</label>
              <input
                type="text"
                placeholder="Experience"
                className="w-[450px] border-[1px] border-gray-300 rounded-[4px] h-[40px] pl-[15px]"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Qualification</label>
              <input
                type="text"
                placeholder="Qualification"
                className="w-[450px] border-[1px] border-gray-300 rounded-[4px] h-[40px] pl-[15px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
          <label>Application Deadline</label>
              <input
                type="text"
                placeholder="Job application deadline"
                className="w-[950px] border-[1px] border-gray-300 rounded-[4px] h-[40px] pl-[15px]"
              />
              </div>
              <div className="flex flex-col gap-[10px]">
          <label>Job application link</label>
              <input
                type="text"
                placeholder="Job application link Url"
                className="w-[950px] border-[1px] border-gray-300 rounded-[4px] h-[40px] pl-[15px]"
              />
              </div>
              <div className="flex flex-col gap-[10px]  ">
          <label>Job Description</label>
          <textarea type='text' placeholder="Job Description" className="h-[300px] w-[950px] border-[1px] border-gray-300  pl-[20px] rounded-[4px] pt-[20px] "

          />

         
             
              </div>
              <div className="pl-[800px] ">
               <button className='px-[20px] py-[7px]  rounded-[8px] bg-emerald-700 text-white '>Post a job</button>
               </div>
         

          
        </div>
        </div>
      <Footer/>
    </>
  );
}

export default Form
