import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import qzone1 from "../../assets/qZone1.png";
import qzone2 from "../../assets/qZone2.png";
import qzone3 from "../../assets/qZone3.png";
import bgImage from "../../assets/bg.png";

const RightSidebar = () => {
  return (
    <div className="bg-base-100 p-5 space-y-6  ">
      <div className="  space-y-5">
        <h2 className="text-lg text-gray-700 font-bold">Log In With</h2>

        <button className="btn btn-outline btn-secondary w-full">
          <FaGoogle></FaGoogle> Google
        </button>

        <button className="btn btn-outline btn-secondary w-full">
          <FaGithub></FaGithub> Github
        </button>
      </div>

      <div className="">
        <h2 className="text-lg text-gray-700 font-bold">Find us on</h2>

        <p className="border flex items-center gap-3 px-5 py-3 rounded-t-lg hover:bg-pink-600 hover:text-white">
          <FaFacebook></FaFacebook> Facebook
        </p>

        <p className="border flex items-center gap-3 px-5 py-3 border-y-0 hover:bg-pink-600 hover:text-white">
          <FaInstagram></FaInstagram> Instagram
        </p>

        <p className="border flex items-center gap-3 px-5 py-3 rounded-b-lg hover:bg-pink-600 hover:text-white">
          <FaTwitter></FaTwitter> Instagram
        </p>
      </div>

      <div className="bg-gray-100 p-3 rounded-lg ">
        <h2 className="text-lg text-gray-700  font-bold">Q-zone</h2>
        <div>
          <img src={qzone1} alt={`q-zone picture`} className="w-full h-full" />
          <img src={qzone2} alt={`q-zone picture`} className="w-full h-full" />
          <img src={qzone3} alt={`q-zone picture`} className="w-full h-full" />
        </div>
      </div>

      <div
        className="bg-no-repeat bg-cover h-[60vh] rounded-lg flex flex-col justify-center text-center items-center text-white"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="space-y-5 px-5">
          <h2 className="text-lg text-bold">Create an Amazing Newspaper</h2>
          <p className="text-sm font-sembold">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="btn btn-outline btn-secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
};



export default RightSidebar;
