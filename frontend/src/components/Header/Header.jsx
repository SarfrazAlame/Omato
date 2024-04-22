import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="flex justify-center my-4">
      <div className="text-center">
        <h2 className="my-3 text-2xl md:text-4xl  font-bold text-orange-500">Order your favourite food here</h2>
        <p className="my-2 w-full sm:w-1/2 mx-auto">
          Choose from a diverse menu featuring a delectiable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your craving and elevate your dining experience,
          one delicius meal at a time
        </p>
        <button className="my-3 border px-4 py-2 rounded-full border-orange-400 hover:bg-orange-500 hover:text-white">View Menu</button>
      </div>
    </div>
  );
};

export default Header;
