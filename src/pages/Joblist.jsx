import React from "react";
import Header from "../components.jsx/header";
import { Link } from "react-router";
import { MdDelete } from "react-icons/md";
import { MdRemoveRedEye } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import Footer from "../components.jsx/Footer";

function Joblist() {
  return (
    <div>
      <button className="h-[40px] w-[100px] bg-emerald-700 rounded-[5px] text-white text-[20px] p-[5px]">
        <Link to="/">Home</Link>
      </button>
      <Header />
    <div className="flex flex-col  justify-center items-center py-[20px]  ">
        <p className="bg-gray-200 w-full py-[20px] flex justify-center items-center text-[40px] font-serif">
          My Jobs List
        </p>
        </div>
        <div className="flex flex-col  justify-center items-center py-[20px]  ">
        {/* div fpe the upper header */}
        <div className="flex justify-center items-center gap-[100px] px-[38px] py-[14px] border-[1px] border-gray-200 rounded-t-[5px] drop-shadow-sm shadow-white ">
          <div className="flex gap-[400px]">
            <b className="pl-[30px]"> Title</b>
            <b>Job Type</b>
          </div>
          <div className="flex gap-[80px]">
            <b>Posted Date</b>
            <b>Application Deadline</b>
            <b>Action</b>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[129px] pl-[63px]  py-[14px] border-[1px] border-gray-200 pr-[25px] ">
          <div className="flex gap-[303px]">
            <p >Laravel Developer</p>
            <p>Full Time</p>
          </div>
          <div className="flex gap-[93px]">
            <p>03/22/2025</p>
            <p>Full Time</p>
            </div>
            <div className="flex gap-[20px] ">
              <MdRemoveRedEye />
              <MdOutlineModeEdit />
              <MdDelete />
            </div>
        </div>
        <div className="flex justify-center items-center gap-[129px] pl-[63px]  py-[14px] border-[1px] border-gray-200 pr-[25px] ">
          <div className="flex gap-[303px]">
            <p >Laravel Developer</p>
            <p>Full Time</p>
          </div>
          <div className="flex gap-[93px]">
            <p>03/22/2025</p>
            <p>Full Time</p>
            </div>
            <div className="flex gap-[20px] ">
              <MdRemoveRedEye />
              <MdOutlineModeEdit />
              <MdDelete />
            </div>
        </div>
        <div className="flex justify-center items-center gap-[129px] pl-[63px]  py-[14px] border-[1px] border-gray-200 pr-[25px] ">
          <div className="flex gap-[303px]">
            <p >Laravel Developer</p>
            <p>Full Time</p>
          </div>
          <div className="flex gap-[93px]">
            <p>03/22/2025</p>
            <p>Full Time</p>
            </div>
            <div className="flex gap-[20px] ">
              <MdRemoveRedEye />
              <MdOutlineModeEdit />
              <MdDelete />
            </div>
        </div>
        <div className="flex justify-center items-center gap-[129px] pl-[63px]  py-[14px] border-[1px] border-gray-200 pr-[25px] ">
          <div className="flex gap-[303px]">
            <p >Laravel Developer</p>
            <p>Full Time</p>
          </div>
          <div className="flex gap-[93px]">
            <p>03/22/2025</p>
            <p>Full Time</p>
            </div>
            <div className="flex gap-[20px] ">
              <MdRemoveRedEye />
              <MdOutlineModeEdit />
              <MdDelete />
            </div>
        </div>
        <div className="flex justify-center items-center gap-[129px] pl-[63px]  py-[14px] border-[1px] border-gray-200 pr-[25px] ">
          <div className="flex gap-[303px]">
            <p >Laravel Developer</p>
            <p>Full Time</p>
          </div>
          <div className="flex gap-[93px]">
            <p>03/22/2025</p>
            <p>Full Time</p>
            </div>
            <div className="flex gap-[20px] ">
              <MdRemoveRedEye />
              <MdOutlineModeEdit />
              <MdDelete />
            </div>
        </div>
        <div className="flex justify-center items-center gap-[129px] pl-[63px]  py-[14px] border-[1px] border-gray-200 pr-[25px] ">
          <div className="flex gap-[303px]">
            <p >Laravel Developer</p>
            <p>Full Time</p>
          </div>
          <div className="flex gap-[93px]">
            <p>03/22/2025</p>
            <p>Full Time</p>
            </div>
            <div className="flex gap-[20px] ">
              <MdRemoveRedEye />
              <MdOutlineModeEdit />
              <MdDelete />
            </div>
        </div>
        <div className="flex justify-center items-center gap-[129px] pl-[63px]  py-[14px] border-[1px] border-gray-200 pr-[25px] ">
          <div className="flex gap-[303px]">
            <p >Laravel Developer</p>
            <p>Full Time</p>
          </div>
          <div className="flex gap-[93px]">
            <p>03/22/2025</p>
            <p>Full Time</p>
            </div>
            <div className="flex gap-[20px] ">
              <MdRemoveRedEye />
              <MdOutlineModeEdit />
              <MdDelete />
            </div>
        </div>
        <div className="flex justify-center items-center gap-[129px] pl-[63px]  py-[14px] border-[1px] border-gray-200 pr-[25px] ">
          <div className="flex gap-[303px]">
            <p >Laravel Developer</p>
            <p>Full Time</p>
          </div>
          <div className="flex gap-[93px]">
            <p>03/22/2025</p>
            <p>Full Time</p>
            </div>
            <div className="flex gap-[20px] ">
              <MdRemoveRedEye />
              <MdOutlineModeEdit />
              <MdDelete/>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Joblist;
