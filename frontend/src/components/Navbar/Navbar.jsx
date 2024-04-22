import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="flex justify-between items-center">
      <img src={assets.logo} alt="" className="h-fit " />
      <ul className="hidden md:flex gap-7 cursor-pointer ">
        <li
          className={menu === "home" ? "pb-2 border-b border-orange-400" : ""}
          onClick={() => setMenu("home")}
        >
          home
        </li>
        <li
          className={menu === "menu" ? "pb-2 border-b border-orange-400" : ""}
          onClick={() => setMenu("menu")}
        >
          menu
        </li>
        <li
          className={
            menu === "mobile-app" ? "pb-2 border-b border-orange-400" : ""
          }
          onClick={() => setMenu("mobile-app")}
        >
          mobile-app
        </li>
        <li
          className={
            menu === "contact-us" ? "pb-2 border-b border-orange-400" : ""
          }
          onClick={() => setMenu("contact-us")}
        >
          contact us
        </li>
      </ul>
      <div className="flex items-center gap-7">
        <img src={assets.search_icon} alt="" />
        <div className="relative">
          <img src={assets.basket_icon} alt="" />
          <div className="absolute min-h-2 min-w-2 bg-orange-500 rounded-full top-0 -right-2"></div>
        </div>
        <button className="border px-6 py-2 rounded-full border-red-200 hover:bg-red-100">
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
