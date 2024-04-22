import React from "react";
import { assets } from "../../assets/assets";

function AppDownload() {
  return (
    <div className="w-full flex justify-center my-5">
      <div>
        <p className="text-2xl lg:text-5xl my-4">
          For Better Experience Download <br />
          Tomato App
        </p>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 md:gap-20">
          <img className="origin-center hover:origin-top cursor-pointer" src={assets.play_store} alt="" />
          <img className="origin-center hover:origin-top cursor-pointer" src={assets.app_store} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AppDownload;
