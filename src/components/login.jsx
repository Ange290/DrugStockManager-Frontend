import React, {use, useState} from "react";
import ContainerImg from "../assets/Container.svg";

function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
   
      <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center w-[30vw] border-4 ">
      
        <img
          src={ContainerImg}
          alt="Login"
          className=""
        />

        <h1 className="text-gray-950 text-center font-outfit font-medium text-3xl ">
         DrugStock System
        </h1>
        <p className="text-gray-700 text-sm">Hospital Pharmacy Management</p>

        <form action="" className="font-outfit pt-6 left-2">

          <label htmlFor="username" >Username</label><br />
          <input type="text" id="username" name="username" placeholder="Enter your username" 
          className="hover:border border-lime-900 px-5 py-3 rounded-lg"/><br /><br />

          <label htmlFor="password">Password</label><br />
          <input type="password" id="password" name="password" placeholder="Enter your password" 
          className="hover:border border-lime-900 px-5 py-3 rounded-lg shad" /><br /><br />

 <div className="flex items-center justify-between w-full mb-6">
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-600 cursor-pointer">
              Remember me
            </label>
          </div>
          
          <a href="#" className="text-sm text-lime-600 hover:underline">
            Forgot password?
          </a>
        </div>
        <input type="submit" value="Sign In" className="bg-gradient-to-r from-lime-500 to-green-600 text-white w-full px-6 py-3 rounded-lg cursor-pointer hover:bg-lime-700 transition-colors" />
        </form>
        <p className="text-sm text-gray-600 py-3">Need help? Contact your system administrator</p>
      </div>
      <p className="text-sm text-gray-600 py-3">Version1.0.0 | &copy; 2026 DrugStockSystem</p>
    </div>
  );
}

export default Login;
