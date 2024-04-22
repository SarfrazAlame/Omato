import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-600 py-5 px-2 sm:px-44" id="footer">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto text-white place-items-center ">
        <div className="">
          <img src={assets.logo} alt="" />
          <p className="my-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            ratione blanditiis natus nihil. Alias incidunt fugit nihil fuga
            iusto dicta aspernatur suscipit quo doloremque cumque, molestiae
            illo fugiat expedita sit.
          </p>
          <div className="flex gap-3">
            <img className="cursor-pointer" src={assets.facebook_icon} alt="" />
            <img className="cursor-pointer" src={assets.twitter_icon} alt="" />
            <img className="cursor-pointer" src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="1/3">
          <h2>COMPANY</h2>
          <ul>
            <li className="cursor-pointer hover:underline">Home</li>
            <li className="cursor-pointer hover:underline">About us</li>
            <li className="cursor-pointer hover:underline">Delivery</li>
            <li className="cursor-pointer hover:underline">Privacy policy</li>
          </ul>
        </div>
        <div className="1/3">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li className="cursor-pointer">+1-212-4456-8970</li>
            <li className="cursor-pointer">sarfrazk7858@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="text-center text-white">
        Copyright 2024 @ Tomato.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
