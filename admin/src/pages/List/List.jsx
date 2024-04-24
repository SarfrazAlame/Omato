import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { RiDeleteBin6Line } from "react-icons/ri";

function List({ url }) {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFoodItems = async (id) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: id });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="m-10 w-2/3">
      <p>All Foods List</p>
      <div className="flex flex-col">
        <div className="border w-full flex justify-between py-3 border-gray-400 rounded px-6">
          <b className="mx-4">Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((food, index) => {
          return (
            <div
              key={index}
              className="flex border justify-between px-2 py-2 rounded border-gray-400 "
            >
              <img
                src={`${url}/images/` + food.image}
                alt=""
                className="w-20"
              />
              <p className="mx-4">{food.name}</p>
              <p className="mx-4">{food.category}</p>
              <p className="mx-4">${food.price}</p>
              <p className="mx-4">
                <RiDeleteBin6Line
                  onClick={() => removeFoodItems(food._id)}
                  className="text-red-500 cursor-pointer"
                />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
