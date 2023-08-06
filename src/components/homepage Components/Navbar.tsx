import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaChevronCircleDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="hidden md:flex w-full gap-5 justify-between items-center px-3 py-6 bg-white">
<div>
  <h2 className="font-bold text-xl italic tracking-widest">InternSync</h2>
</div>
<div className=" gap-8 items-center flex">
  <p className="font-normal ml-2 text-2xl cursor-pointer hover:scale-75 transition-all ease-in">Join InternSync</p>
  <p className="font-normal ml-2 text-2xl cursor-pointer hover:scale-75 transition-all ease-in">As Employers</p>
  <p className="font-normal ml-2 text-2xl cursor-pointer hover:scale-75 transition-all ease-in">As Interns</p>
</div>
<div className="flex gap-8 items-center">
  <p className="flex px-3 py-3 rounded-full bg-black text-white items-center gap-3">Join InternSync <FaChevronCircleDown /> </p>
  <p className="flex px-3 py-3 rounded-full bg-gray-200 text-black items-center gap-3">Hire Intern </p>

</div>
      </div>
      {/* mobile nav bar */}
      <div style={{height:'15Vh' , inset:'0'}} className="bg-white fixed h-[15vh]  md:hidden  ">
        <div className="fixed top-3 right-3 left-3 px-3 flex items-center justify-between h-[10%] bg-white shadow-md rounded-md  md:hidden">
        <div>
          <h2 className="font-bold italic tracking-widest">InternSync</h2>
        </div>
        <div>
          <FaBars
            className="cursor-pointer"
            onClick={() => setVisible(true)}
            fontSize={27}
          />
        </div>
        <div
          className={`${
            visible ? "flex " : "hidden "
          }  fixed top-0 right-0 bottom-0 left-0  bg-white flex-col p-6 `}
        >
          <div className="p-2 flex justify-end">
            <IoMdClose
              onClick={() => setVisible(false)}
              fontSize={27}
              className="font-bold"
            />
          </div>
          <div className="flex-1 flex flex-col mt-2 ">
            <Link to="" className="text-2xl flex gap-4 items-center my-8">
              For Employers{" "}
              <FaChevronCircleDown onClick={() => console.log("hello")} />{" "}
            </Link>
            <Link to="" className="text-2xl my-8">
              For Employers
            </Link>
            <Link to="" className="text-2xl my-8">
              For Employers
            </Link>
          </div>
          <div className="py-4 items-center  h-[15%] w-full flex gap-4">
            <Link
              className="px-6 flex items-center tracking-widest justify-center font-bold bg-gray-200  rounded-full  py-5 "
              to={"/auth/login"}
            >
         Join InternSync
            </Link>
         
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default Navbar;
