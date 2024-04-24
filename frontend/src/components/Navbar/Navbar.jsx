import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./Navbar.css";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <>
      <Link to={"/"}>
        <img src={assets.logo} alt="" className="h-fit sm:hidden my-4" />
      </Link>
      <div className="flex justify-between items-center">
        <NavLink to={"/"}>
          <img src={assets.logo} alt="" className="h-fit hidden sm:flex" />
        </NavLink>
        <ul className="hidden md:flex gap-7 cursor-pointer ">
          <Link
            to={"/"}
            className={menu === "home" ? "pb-2 border-b border-orange-400" : ""}
            onClick={() => setMenu("home")}
          >
            home
          </Link>
          <a
            href="#menu"
            className={menu === "menu" ? "pb-2 border-b border-orange-400" : ""}
            onClick={() => setMenu("menu")}
          >
            menu
          </a>
          <a
            href="#app-download"
            className={
              menu === "mobile-app" ? "pb-2 border-b border-orange-400" : ""
            }
            onClick={() => setMenu("mobile-app")}
          >
            mobile-app
          </a>
          <a
            href="#footer"
            className={
              menu === "contact-us" ? "pb-2 border-b border-orange-400" : ""
            }
            onClick={() => setMenu("contact-us")}
          >
            contact us
          </a>
        </ul>
        <div className="sm:flex items-center hidden  gap-7">
          <img src={assets.search_icon} alt="" className="cursor-pointer" />
          <div className="relative">
            <Link to={"/cart"}>
              <img src={assets.basket_icon} alt="" />
            </Link>
            <div
              className={
                getTotalCartAmount() === 0
                  ? ""
                  : "absolute min-h-2 min-w-2 bg-orange-500 rounded-full top-0 -right-2"
              }
            ></div>
          </div>
          {token ? (
            <>
              <div className="navbar-profile">
                <img src={assets.profile_icon} alt="" className="" />
                <ul className="nav-profile-dropdown">
                  <li className="cursor-pointer flex items-center gap-2 justify-between hover:text-orange-400">
                    <img src={assets.bag_icon} alt="" className="w-5" />{" "}
                    <p>Orders</p>
                  </li>
                  <hr className="border-gray-500 w-full" />
                  <li
                    onClick={logout}
                    className="cursor-pointer flex items-center gap-2 justify-between hover:text-orange-400"
                  >
                    <img src={assets.logout_icon} alt="" className="w-5" />
                    <p>Logout</p>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <button
              className="border px-6 py-2 rounded-full border-red-200 hover:bg-red-100"
              onClick={() => setShowLogin(true)}
            >
              sign in
            </button>
          )}
        </div>

        <div className="sm:hidden flex w-full items-center justify-between gap-7">
          <img src={assets.search_icon} alt="" className="" />
          <div className="relative">
            <Link to={"/cart"}>
              <img src={assets.basket_icon} alt="" />
            </Link>
            <div className="absolute min-h-2 min-w-2 bg-orange-500 rounded-full top-0 -right-2"></div>
          </div>
          {token ? (
            <>
              <div className="navbar-profile">
                <img src={assets.profile_icon} alt="" className="" />
                <ul className="nav-profile-dropdown">
                  <li className="cursor-pointer flex items-center gap-2 justify-between hover:text-orange-400">
                    <img src={assets.bag_icon} alt="" className="w-5" />{" "}
                    <p>Orders</p>
                  </li>
                  <hr className="border-gray-500 w-full" />
                  <li
                    onClick={logout}
                    className="cursor-pointer flex items-center gap-2 justify-between hover:text-orange-400"
                  >
                    <img src={assets.logout_icon} alt="" className="w-5" />
                    <p>Logout</p>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <button
              className="border px-6 py-2 rounded-full border-red-200 hover:bg-red-100"
              onClick={() => setShowLogin(true)}
            >
              sign in
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
