import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDispaly = () => {
  const { food_list } = useContext(StoreContext);
  return (
    <div>
      <h2 className="my-7 text-3xl">Top dishes near you</h2>
      <div className="grid grid-cols-4 mt-5 gap-8">
        {food_list.map((food, index) => {
          return (
            <FoodItem
              key={index}
              id={food._id}
              name={food.name}
              price={food.price}
              description={food.description}
              image={food.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDispaly;
