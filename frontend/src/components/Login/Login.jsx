import React, { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Login = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currentState, setCurrentState] = useState("Sign Up");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser((data) => ({ ...data, [name]: value }));
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, user);

    if (response.data.success) {
      setToken(response.data.data);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="absolute -mt-10 w-full h-2/3 bg-opacity-50 bg-gray-800 grid ">
      <form
        className="place-self-center flex flex-col bg-white gap-6 py-6 px-8 rounded-lg font-normal"
        onSubmit={handlerSubmit}
      >
        <div className="flex justify-between items-center text-black">
          <h2 className="text-2xl font-bold text-gray-700">{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5">
          {currentState === "Login" ? (
            <></>
          ) : (
            <>
              <input
                onChange={handleOnchange}
                value={user.name}
                name="name"
                className="border  border-gray-600 h-12 rounded-md px-3 "
                type="text"
                placeholder="Your Name"
                required
              />
            </>
          )}
          <input
            onChange={handleOnchange}
            value={user.email}
            name="email"
            className="border  border-gray-600 h-12 rounded-md px-3 "
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            onChange={handleOnchange}
            value={user.password}
            name="password"
            className="border  border-gray-600 h-12 rounded-md px-3 "
            type="password"
            placeholder="Your Password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full border h-12 rounded-md bg-orange-500 text-white"
        >
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="flex justify-between">
          <input type="checkbox" required />
          <p className="w-4/5 ">
            By continuing, i agree to the terms of use & privacy policy
          </p>
        </div>
        {currentState === "Login" ? (
          <>
            <p>
              Create a new account?{" "}
              <span
                onClick={() => setCurrentState("Sign Up")}
                className="cursor-pointer text-orange-500"
              >
                Click here
              </span>
            </p>
          </>
        ) : (
          <>
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setCurrentState("Login")}
                className="cursor-pointer text-orange-500"
              >
                Login here
              </span>
            </p>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
