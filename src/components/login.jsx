import React from "react";
import ContainerImg from "../assets/Container.svg";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
   
      <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center w-96 border-4 ">
      
        <img
          src={ContainerImg}
          alt="Login"
          className=""
        />

        <h1 className="text-gray-700 text-center font-outfit font-medium text-2xl ">
         DrugStock System
        </h1>

        <form action="" className="font-outfit">
          <label htmlFor="username">Username</label><br />
          <input type="text" id="username" name="username" placeholder="Enter your username" /><br /><br />
          <label htmlFor="password">Password</label><br />
          <input type="password" id="password" name="password" placeholder="Enter your password" /><br /><br />
          
        </form>
      </div>
    </div>
  );
}

export default Login;
