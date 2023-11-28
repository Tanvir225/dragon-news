import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { FaEye, FaEyeSlash,FaGoogle,FaGithub } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css"
import Context from "../../Context/Context";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
  //show password state
  const [show, setShow] = useState(false)

  //useLocation check state
  const location = useLocation()
  console.log(location);

  //navigate 
  const navigate = useNavigate()

  //get context
  const {logInUser,googleLogin} = Context(AuthContext)

  //handle login User 
  const handleLogin =(e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email');
    const password = formData.get('password');
    console.log(email,password);

    formData.getAll('')

    //login user
    logInUser(email,password)
    .then(result =>{
      const user = result.user
      console.log(user);
      toast.success('successfully login')
      navigate( location?.state ? location.state : "/")
    })
    .catch(e=>{
      toast.error(e.message.slice(10,e.message.length))
    })
  }

  //  google login
  const handleMediaLogin = (media)=>{
      media()
      .then(result =>{
        const user = result.user
        console.log(user);
        toast.success('login successful')
        navigate(location?.state ? location.state : "/")
      })
      .catch(e=>{
        toast.error(e.message.slice(10,e.message.length))
      })
  }





  return (
    <div className="back">
      <div className="py-5">
        <Navbar ></Navbar>
      </div>

      <div className="flex flex-col px-2 mt-7  justify-center gap-5 items-center h-[77vh] w-[40%] rounded-lg mx-auto bg-base-100 shadow-md">
        <h2 className="text-2xl text-gray-600 font-bold">
          Login in your account.
        </h2>
        <form onSubmit={handleLogin} className="w-full px-10 space-y-4">
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
              type={show ? 'text' : 'password'}
              name="password"
              placeholder="password"
              className="block w-full bg-gray-100 px-5 py-2 rounded-lg"
            />
            <span className="absolute top-3 right-3" onClick={() => setShow(!show)}>{show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
          </div>

          <button className="w-full btn btn-outline">Login</button>
        </form>
        <div className="space-x-5">
          <button onClick={()=>handleMediaLogin(googleLogin)} className="btn btn-outline btn-secondary "><FaGoogle></FaGoogle> google </button>

          <button className="btn btn-outline btn-secondary"><FaGithub></FaGithub> github </button>
        </div>
        <p className="text-base">Dont’t Have An Account ? <Link to={"/register"} className="text-pink-500">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
