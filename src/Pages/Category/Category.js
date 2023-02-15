import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogHistoryGet from "../../Redux/Thunk/BlogHistoryGet";
import HistoryCard from "./HistoryCard";

const Category = () => {
  const blogHistory = useSelector((state) => state.blogs.historyBlog);
  console.log(blogHistory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(BlogHistoryGet());
  }, [dispatch]);
  return (
    <div className="container mx-auto mt-10 grid gap-5">
      {blogHistory.map((blog, inx) => (
        <HistoryCard key={inx} blog={blog}></HistoryCard>
      ))}
    </div>
  );
};

export default Category;
