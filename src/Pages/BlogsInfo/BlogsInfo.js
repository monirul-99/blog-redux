import React from "react";
import { useLoaderData } from "react-router-dom";
import { RiQuillPenLine } from "react-icons/ri";
import "./BlogInfo.css";

const BlogsInfo = () => {
  const Hi = useLoaderData();
  const { title, img, describe, keywords } = Hi;
  return (
    <>
      <div className="relative h-[550px] overflow-hidden">
        <img className="w-full -mt-40" src={img} alt="" />
        <div className="absolute bottom-8 text-white z-10 w-full">
          <div className="container mx-auto">
            <aside className="px-[75px]">
              <p className="text-[#1DB1EF] font-Poppins">{keywords}</p>
            </aside>
            <aside className="flex items-center space-x-5 -mt-5">
              <RiQuillPenLine size={30} />
              <p className="border-r-2 h-7"></p>
              <h1 className="text-4xl font-bold font-Poppins mt-10 mb-10">
                {title}
              </h1>
            </aside>
          </div>
        </div>
        <div className="gradient-color"></div>
      </div>

      <div className="container mx-auto">
        <p className="text-start mt-10">{describe}</p>
      </div>
    </>
  );
};

export default BlogsInfo;
