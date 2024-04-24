import React, { useState } from "react";
import { assets } from "../../assets/assets";

function Add() {
  const [image, setImage] = useState(false);

  return (
    <div className="m-10 w-2/3 mx-auto">
      <form className="flex flex-col">
        <div className="my-3 w-1/4">
          <p className="text-gray-600">Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
              className=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
            className=""
          />
        </div>

        <div className="w-full my-2">
          <p className="text-gray-600">Product Name</p>
          <input
            className="w-1/3 border outline-none border-gray-400 py-2 rounded my-2"
            type="text"
            name="name"
            placeholder="Type Here"
          />
        </div>

        <div>
          <p className="text-gray-600">Product description</p>
          <textarea
            name="description"
            rows="6"
            placeholder="Write Content here"
            className="w-1/3 border outline-none border-gray-400 rounded my-2"
          ></textarea>
        </div>

        <div className="flex my-2 gap-3 ">
          <div className="">
            <p className="text-gray-600">Product Category</p>
            <select
              name="category"
              className="border outline-none w-full border-gray-400 py-2 my-2 rounded"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Pure">Pure</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodels">Noodels</option>
            </select>
          </div>
          <div>
            <p className="text-gray-600">Product price</p>
            <input
              type="number"
              name="price"
              placeholder="$20"
              className="border border-gray-400 py-2 my-2 outline-none rounded"
            />
          </div>
        </div>
        <button
          type="submit"
          className="border-none bg-black w-32 py-2 text-white my-2"
        >
          ADD
        </button>
      </form>
    </div>
  );
}

export default Add;
