import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Login = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className="text-black">
      <form>
        <div>
          <h2>{currentState}</h2>
          <img src={assets.cross_icon} alt="" />
        </div>
      </form>
    </div>
  );
};

export default Login;
