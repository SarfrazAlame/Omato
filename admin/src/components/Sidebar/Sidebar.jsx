import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="h-[94vh] sm:mx-8 border-r">
      <div className="flex flex-col mt-8">
        <NavLink
          to={"/add"}
          className="flex my-5 gap-3 border py-2 md:w-56 w-fit items-center rounded mx-auto px-3 border-gray-400 NavLink"
        >
          <img src={assets.add_icon} alt="" />
          <p className="hidden md:flex">Add Items</p>
        </NavLink>
        <NavLink
          to={"/list"}
          className="flex my-5 gap-3 border py-2 md:w-56 w-fit items-center rounded mx-auto px-3 border-gray-400 NavLink"
        >
          <img src={assets.order_icon} alt="" />
          <p className="hidden md:flex">Lists Items</p>
        </NavLink>
        <NavLink
          to={"/orders"}
          className="flex my-5 gap-3 border py-2 md:w-56 w-fit items-center rounded mx-auto px-3 border-gray-400 NavLink"
        >
          <img src={assets.add_icon} alt="" />
          <p className="hidden md:flex">Orders</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
