import React from "react";
import ContainerImg from "../assets/Container.svg";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
   
      <div className="bg-lime-800 p-8 rounded-xl shadow-lg flex flex-col items-center w-96 border-4 border-red-500">
      
        <img
          src={ContainerImg}
          alt="Login"
          className="w-48 h-48 object-contain mb-4"
        />

        <p className="text-gray-500 text-center">
          Please login to continue
        </p>
      </div>
    </div>
  );
}

export default Login;
