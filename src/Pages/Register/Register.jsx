import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css"
import Context from "../../Context/Context";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";



const Register = () => {
  //show password state
  const [show, setShow] = useState(false);

  //getContext from context api
  const { createUser } = Context()

  //navigate
  const naviagte = useNavigate()

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const name = formData.get('name');
    const photo = formData.get('photo');
    const email = formData.get('email');
    const password = formData.get('password');
    
    formData.getAll('')
    //create user
    createUser(email, password)
      .then(result => {
        const user = result.user
        console.log(user);


        //update profile
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then()
          .catch(e => {
            console.log(e.message);
            toast.error(e.message.slice(10, e.message.length))
          })


        toast.success('User created Successfully')
        
        //navigate to login
        naviagte("/")
      })
      .catch(e => {
        console.log(e.message);
        toast.error(e.message.slice(10, e.message.length))
      })

  }







  return (
    <div className="back py-5">

      <Navbar></Navbar>


      <div className="flex flex-col px-2 mt-7 justify-center gap-5 items-center h-[95vh]  w-[40%] rounded-lg mx-auto bg-base-100 shadow-md">
        <h2 className="text-2xl text-gray-600 font-bold">Register</h2>
        <form onSubmit={handleSubmit} className="w-full px-10 space-y-4">
          <label htmlFor="email" className="block  font-bold text-gray-600">
            Your name
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="block w-full  bg-gray-100 px-5 py-2 rounded-lg"
            required
          />

          <label htmlFor="email" className="block  font-bold text-gray-600">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="block w-full  bg-gray-100 px-5 py-2 rounded-lg"
            required
          />

          <label htmlFor="email" className="block  font-bold text-gray-600">
            Photo Url
          </label>
          <input
            type="text"
            name="photo"
            placeholder="http://im.bb/tanvir.jpg"
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
              type={show ? "text" : "password"}
              name="password"
              placeholder="password"
              className="block w-full bg-gray-100 px-5 py-2 rounded-lg"
              required
            />
            <span
              className="absolute top-3 right-3"
              onClick={() => setShow(!show)}
            >
              {show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>

          <input type="checkbox" name="terms" required />
          <label htmlFor="terms" className="ml-3 text-pink-400">Allow Terms And Condition</label>
          <button className="w-full btn btn-outline">Register</button>
        </form>

        <p className="text-base">
          Already Have An Account ?
          <Link to={"/login"} className="text-pink-500 ml-1">
            Login
          </Link>
        </p>
      </div>

    </div>
  );
};

export default Register;
