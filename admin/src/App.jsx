import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="">
      <Navbar />
      <hr className="border border-gray-500"/>

      <div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
