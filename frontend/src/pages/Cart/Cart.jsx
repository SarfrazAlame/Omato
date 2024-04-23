import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="mt-20">
      <div>
        <div className="grid grid-cols-6 items-center text-gray-600 font-semibold">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="border border-gray-700" />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="grid grid-cols-6 justify-between h-16 my-2 gap-6">
                  <img src={item.image} alt="" className="h-14" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    className="cursor-pointer text-red-500"
                    onClick={() => removeFromCart(item._id)}
                  >
                    <RiDeleteBin6Line />
                  </p>
                </div>
                <hr className="border border-gray-700" />
              </div>
            );
          }
        })}
      </div>
      <div className="my-14 md:flex w-full justify-between">
        <div className="md:w-1/2 w-full">
          <h2 className="text-2xl font-bold">Cart Totals</h2>
          <div className="">
            <div className="flex justify-between mt-4 mb-2">
              <p className="font-semibold text-gray-600">Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between mt-4 mb-2">
              <p className="font-semibold text-gray-600">Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="flex justify-between mt-4 mb-2">
              <b className="font-semibold text-gray-800">Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="md:w-1/3 w-full border rounded-md h-10 bg-orange-500 text-white"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="mt-8 md:mt-0">
          <div>
            <p className="font-semibold text-gray-600">
              If you have a promo code, Enter it here
            </p>
            <div className="mt-2 flex justify-between items-center bg-zinc-200 rounded-md">
              <input
                type="text"
                placeholder="promo code"
                className="bg-transparent border-none outline-none px-3"
              />
              <button className="px-4 py-2 border-none text-white bg-black">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
