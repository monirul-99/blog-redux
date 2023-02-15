import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-[#ECF0F5]">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <div className="h-24 bg-white flex justify-between items-center px-10">
          <h1 className="uppercase font-Poppins text-2xl font-semibold text-[#151C46]">
            Dashboard
          </h1>
          {/* <aside>
            <input
              className="py-2.5 rounded-full w-80 text-sm pl-5 font-Poppins outline-none border border-[#151C46]"
              type="text"
              name=""
              placeholder="Search Here ..."
            />
          </aside>
          <aside className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://lh3.googleusercontent.com/a/AEdFTp6jjsk3edZwHidZQhoWs0NjLme-tnh_EZdJtWyF=s96-c"
                  alt=""
                />
              </div>
            </div>
            <div className="text-[#151C46] font-Poppins">
              <h1 className="text-sm">Monirul Islam</h1>
              <p className="text-xs">Admin</p>
            </div>
          </aside> */}
        </div>

        <Outlet />
      </div>
      <div className="drawer-side bg-white">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="p-4 w-80 mt-24">
          <nav aria-label="Main Nav" className="flex flex-col relative h-full">
            <Link
              to="/dashboard/addPost"
              className="flex items-center border-l-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span className="ml-3 text-sm font-medium"> Blog Post </span>
            </Link>

            <Link
              to="/dashboard/postManager"
              className="flex items-center border-l-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              <span className="ml-3 text-sm font-medium"> Post Manage </span>
            </Link>

            <Link
              to="/"
              className="absolute bottom-0 flex items-center border-l-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>

              <span className="ml-3 text-sm font-medium"> Home </span>
            </Link>
          </nav>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
