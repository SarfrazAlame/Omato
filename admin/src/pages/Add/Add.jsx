import React, { useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

function Add({url}) {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/food/add`, formData);

    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message)
    }
  };

  return (
    <div className="sm:m-10 w-full md:w-2/3 mx-auto">
      <form className="flex flex-col" onSubmit={onSubmitHandler}>
        <div className="my-3 w-full md:w-1/4">
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
            className="w-4/5 sm:w-1/2 md:w-1/3 border outline-none border-gray-400 py-2 rounded my-2"
            type="text"
            name="name"
            placeholder="Type Here"
            onChange={onChangeHandler}
            value={data.name}
          />
        </div>

        <div>
          <p className="text-gray-600">Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write Content here"
            className="w-4/5 sm:w-1/2 md:w-1/3 border outline-none border-gray-400 rounded my-2"
          ></textarea>
        </div>

        <div className="sm:flex w-full my-2 gap-3 ">
          <div className="">
            <p className="text-gray-600">Product Category</p>
            <select
              onChange={onChangeHandler}
              name="category"
              className="border outline-none w-2/3 sm:w-full border-gray-400 py-2 my-2 rounded"
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
              onChange={onChangeHandler}
              value={data.price}
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
