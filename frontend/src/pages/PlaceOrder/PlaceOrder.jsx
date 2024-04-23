import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="w-4/5 mx-auto my-10 flex justify-between items-center">
      <div>
        <p className="text-4xl my-3 font-bold text-gray-600">
          Delivery Information
        </p>
        <div className="flex gap-3">
          <input
            className="w-full py-2 px-2 border border-gray-500 my-1 rounded outline-none"
            type="text"
            placeholder="First Name"
          />
          <input
            className="w-full py-2 px-2 border border-gray-500 my-1 rounded outline-none"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="w-full py-2 px-2 border border-gray-500 my-1 rounded outline-none"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="w-full py-2 px-2 border border-gray-500 my-1 rounded outline-none"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="w-full py-2 px-2 border border-gray-500 my-1 rounded outline-none"
            type="text"
            placeholder="City"
          />
          <input
            className="w-full py-2 px-2 border border-gray-500 my-1 rounded outline-none"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="w-full py-2 px-2 border border-gray-500 my-1 rounded outline-none"
            type="text"
            placeholder="Zip Code"
          />
          <input
            className="w-full py-2 px-2 border border-gray-500 my-1 rounded outline-none"
            type="text"
            placeholder="State"
          />
        </div>
        <input
          className="w-full py-2 px-2 border border-gray-500 my-1 rounded outline-none"
          type="text"
          placeholder="Phone"
        />
      </div>
      <div className="w-1/3">
        <h2 className="text-2xl font-bold text-gray-700">Cart Totals</h2>
        <div className="">
          <div className="flex justify-between mt-4 mb-2">
            <p className="font-semibold text-gray-600">Subtotal</p>
            <p>{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="flex justify-between mt-4 mb-2">
            <p className="font-semibold text-gray-600">Delivery Fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          <div className="flex justify-between mt-4 mb-2">
            <b className="font-semibold text-gray-800">Total</b>
            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
          </div>
        </div>
        <button className="w-1/2 border rounded-md h-10 bg-orange-500 text-white">
          PROCEED TO PAYMENT
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
