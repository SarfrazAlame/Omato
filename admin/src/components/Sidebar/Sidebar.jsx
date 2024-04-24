import React from "react";
import { assets } from "../../assets/assets";

function Sidebar() {
  return (
    <div className="h-[94vh] w-72 border-r">
      <div>
        <div>
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </div>
        <div>
          <img src={assets.order_icon} alt="" />
          <p>Lists Items</p>
        </div>
        <div>
          <img src={assets.add_icon} alt="" />
          <p>Orders</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
