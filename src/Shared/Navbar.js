import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-50">
      <section className="flex justify-center items-center font-Decorative font-semibold h-32 px-10">
        <aside className="flex items-center space-x-7">
          <Link to="/home">Home</Link>
          <Link to="/categories">Reading History</Link>
          <Link
            className="text-3xl uppercase px-3 font-Decorative font-semibold"
            to="/"
          >
            Monirul's
          </Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/about">About</Link>
        </aside>
      </section>
    </div>
  );
};

export default Navbar;
