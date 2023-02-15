import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BlogKeywords } from "../../Redux/Actions/BlogActions";
import BlogHistoryReq from "../../Redux/Thunk/PostHistoryReq";

const BlogSingleCard = ({ blog }) => {
  const dispatch = useDispatch();
  return (
    <div className="rounded-t-lg bg-gray-100">
      <Link
        onClick={() => dispatch(BlogHistoryReq(blog))}
        to={`/blog-info/${blog._id}`}
      >
        <aside className="w-full h-[193px] overflow-hidden">
          <img className="rounded-t-lg" src={blog.img} alt="" />
        </aside>
      </Link>
      <aside className="mb-5 pl-2">
        <p className="font-Poppins text-sm py-1.5">{blog?.date}</p>
        <h1 className="text-xl font-semibold font-Poppins mb-2">
          {blog.title.slice(0, 35)} . . .
        </h1>
        <p className="font-Poppins text-sm">
          {blog?.describe?.slice(0, 150)}. . .{" "}
        </p>
        <div className="mt-3 flex items-center space-x-5">
          <button
            onClick={() => dispatch(BlogKeywords(blog.keywords))}
            className="text-xs bg-amber-300 px-5 py-1 rounded shadow-2xl font-Poppins"
          >
            {blog.keywords}
          </button>

          <p className="font-Poppins text-xs">5 Min read</p>
        </div>
      </aside>
    </div>
  );
};

export default BlogSingleCard;
