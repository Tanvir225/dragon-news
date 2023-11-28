import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import {FaEye,FaEyeSlash} from 'react-icons/fa'
import { Link } from "react-router-dom";



const Login = () => {
    //show password state
    const [show,setShow] = useState(false)





  return (
    <div className="">
      <Navbar></Navbar>

      <div className="flex flex-col px-2 mt-7  justify-center gap-5 items-center h-[70vh] w-[40%] rounded-lg mx-auto shadow-md">
        <h2 className="text-2xl text-gray-600 font-bold">
          Login in your acoount.
        </h2>
        <form className="w-full px-10 space-y-4">
          <label htmlFor="email" className="block  font-bold text-gray-600">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="block w-full  bg-gray-100 px-5 py-2 rounded-lg"
          />

          <label
            htmlFor="password"
            className="block  font-bold text-gray-600"
          >
            password
          </label>
          <div className="relative">
            <input
              type={show ? 'password' : 'text'}
              name="password"
              placeholder="password"
              className="block w-full bg-gray-100 px-5 py-2 rounded-lg"
            />
            <span className="absolute top-3 right-3" onClick={()=> setShow(!show)}>{show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
          </div>
          
          <button className="w-full btn btn-outline">Login</button>
        </form>

        <p className="text-base">Dont’t Have An Account ? <Link to={"/register"} className="text-pink-500">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
