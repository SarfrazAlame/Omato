import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="h-[94vh] w-72 border-r">
      <div className="flex flex-col mt-8">
        <NavLink
          to={"/add"}
          className="flex my-5 gap-3 border py-2 w-56 rounded mx-auto px-3 border-gray-400 NavLink"
        >
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </NavLink>
        <NavLink
          to={"/list"}
          className="flex my-5 gap-3 border py-2 w-56 rounded mx-auto px-3 border-gray-400 NavLink"
        >
          <img src={assets.order_icon} alt="" />
          <p>Lists Items</p>
        </NavLink>
        <NavLink
          to={"/orders"}
          className="flex my-5 gap-3 border py-2 w-56 rounded mx-auto px-3 border-gray-400 NavLink"
        >
          <img src={assets.add_icon} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
