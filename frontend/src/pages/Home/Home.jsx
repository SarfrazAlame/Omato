import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import FoodDispaly from "../../components/FoodDispaly/FoodDispaly";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="w-[70%] m-auto">
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <FoodDispaly category={category} />
      <AppDownload/>
    </div>
  );
};

export default Home;
