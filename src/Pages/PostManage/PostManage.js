import React, { useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BlogDelete from "../../Redux/Thunk/DeleteBlog";
import GetBlogData from "../../Redux/Thunk/GetBlogData";

const PostManage = () => {
  const blogs = useSelector((state) => state.blogs.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetBlogData());
  }, [dispatch]);
  return (
    <div>
      <div className="overflow-hidden rounded-lg border-gray-200 pl-10 mt-10">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 font-2xl tracking-wide uppercase text-gray-900"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-2xl tracking-wide uppercase text-gray-900"
              >
                Publish Date
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-2xl tracking-wide uppercase text-gray-900"
              >
                Edit
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-2xl tracking-wide uppercase text-gray-900"
              >
                Action
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900"
              ></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {blogs?.map((post, inx) => (
              <tr key={inx} className="hover:bg-gray-50">
                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div className="relative h-10 w-10">
                    <img
                      className="h-full w-full rounded-full object-cover object-center"
                      src={post.img}
                      alt=""
                    />
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-700">
                      {post.title}
                    </div>
                    <div className="text-gray-400">{post.keywords}</div>
                  </div>
                </th>
                <td className="px-6 py-4">{post.date}</td>
                <td className="px-6 py-4">
                  <Link to={`/dashboard/blog-edit/${post._id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      x-tooltip="tooltip"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                  </Link>
                </td>
                <td
                  className="px-6 py-4 cursor-pointer"
                  onClick={() => dispatch(BlogDelete(post._id))}
                >
                  <p className="bg-blue-50 w-10 h-10 rounded-full text-xs font-semibold text-blue-600 flex items-center justify-center">
                    <RiDeleteBin6Line size={16} />
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostManage;
