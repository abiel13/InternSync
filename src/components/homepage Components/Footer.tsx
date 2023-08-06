import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="min-h-[90vh] flex flex-col mt-[2rem] px-3">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h1 className="font-bold tracking-widest text-[3rem] italic">
            InternSync
          </h1>
          <p className="text-2xl leading-9 mt-3">
            have any question contact @dbestabi28@gmail.com
          </p>
        </div>
        <div className="flex flex-col gap-9 mt-4 md:flex-row md:gap-28">
          <div className="flex flex-col mt-6 gap-9">
            <p className="font-medium text-3xl">Company</p>
            <li
              style={{ listStyle: "none" }}
              className=" font-normal text-2xl tracking-wide "
            >
              Who We Are
            </li>
            <li
              style={{ listStyle: "none" }}
              className=" font-normal text-2xl tracking-wide "
            >
              Careers
            </li>
            <li
              style={{ listStyle: "none" }}
              className=" font-normal text-2xl tracking-wide "
            >
              {" "}
              Blogs
            </li>
          </div>
          <div className="flex flex-col gap-9">
            <p className="font-medium text-3xl">Services</p>
            <li
              style={{ listStyle: "none" }}
              className=" font-normal text-2xl tracking-wide "
            >
              Recruitment Services
            </li>
            <li
              style={{ listStyle: "none" }}
              className=" font-normal text-2xl tracking-wide "
            >
              OutStaffing
            </li>
            <li
              style={{ listStyle: "none" }}
              className=" font-normal text-2xl tracking-wide "
            >
              Join InternSync
            </li>
          </div>
          <div className="flex flex-col gap-9">
            <p className="font-medium text-3xl">Programs</p>
            <li
              style={{ listStyle: "none" }}
              className=" font-normal text-2xl tracking-wide "
            >
              Hire a dev
            </li>
            <li
              style={{ listStyle: "none" }}
              className=" font-normal text-2xl tracking-wide "
            >
              Pipelie
            </li>
            <li
              style={{ listStyle: "none" }}
              className=" font-normal text-2xl tracking-wide "
            >
              Tech Summit
            </li>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 my-[5rem]">
        <div className="my-[1rem] w-full h-[1px] bg-gray-400" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xl">@2023 InternSync All Rights Reserved </p>
          <div className="flex flex-col md:flex-row gap-3">
            <p className="flex gap-4 items-center text-xl my-4">
              Terms <li className="text-gray-400" /> privacy
            </p>
            <p className="flex gap-5 text-xl items-center">
              <p>Linkedln</p>
              <p>Twitter</p>
              <p>Gmail</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
