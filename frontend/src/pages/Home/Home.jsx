import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import FoodDispaly from "../../components/FoodDispaly/FoodDispaly";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="w-[70%] m-auto">
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <FoodDispaly />
    </div>
  );
};

export default Home;
