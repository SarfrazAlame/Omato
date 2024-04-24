import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-4/5 mx-auto flex justify-between items-center ">
      <Link to={"/"}>
        <img className="" src={assets.logo} alt="" />
      </Link>
      <img className="h-14" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
