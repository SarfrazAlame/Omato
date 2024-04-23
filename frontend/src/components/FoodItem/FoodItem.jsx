import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { addToCart, cartItems, removeFromCart } = useContext(StoreContext);
  return (
    <div className="w-full shadow-md cursor-pointer rounded-lg">
      <div className="relative">
        <img src={image} alt="" className=""/>
        {!cartItems[id] ? (
          <img
            className="absolute right-0 bottom-0"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="absolute right-0 bottom-0 flex gap-2">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p className="text-black">{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="m-3">
        <div className="flex justify-between mb-3">
          <p className="font-semibold">{name}</p>
          <img className="h-4" src={assets.rating_starts} alt="" />
        </div>
        <p className="font-light">{description}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
