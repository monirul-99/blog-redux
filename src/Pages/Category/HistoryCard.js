import React from "react";

const HistoryCard = ({ blog }) => {
  return (
    <div className="flex items-center">
      <aside className="">
        <img className="w-[350px] h-[150px]" src={blog.img} alt="" />
      </aside>
      <aside className="mb-5 pl-2">
        <p className="font-Poppins text-sm py-1.5">{blog?.date}</p>
        <h1 className="text-xl font-semibold font-Poppins mb-2">
          {blog.title}
        </h1>
        <p className="font-Poppins text-sm">
          {blog?.describe?.slice(0, 109)}. . .
        </p>
      </aside>
    </div>
  );
};

export default HistoryCard;
