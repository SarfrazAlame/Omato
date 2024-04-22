import React from "react";
import { menu_list } from "../../assets/assets";

const Menu = ({ category, setCategory }) => {
  return (
    <div className="">
      <h1 className="md:text-4xl text-2xl text-orange-500 font-bold mb-4">
        Explore our menu
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8  mx-auto w-full items-center justify-center gap-7">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={(prev) =>
                prev.category === item.menu_name
                  ? setCategory("All")
                  : setCategory(item.menu_name)
              }
              className="cursor-pointer"
            >
              <img
                className={
                  category === item.menu_name
                    ? " border-orange-500 border-4 rounded-full "
                    : ""
                }
                src={item.menu_image}
                alt=""
              />
              <p className="w-24 mt-2 text-center font-bold text-gray-600">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="mt-6" />
    </div>
  );
};

export default Menu;
