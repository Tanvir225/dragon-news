import Header from "../../Components/Header/Header";
import RightSidebar from "../../Components/RighSidebar/RightSidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const NewsDes = () => {
  //useParams
  const { id } = useParams();

  //state for all news
  const [description, setDescription] = useState([]);

  //useEfftect for data load
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setDescription(data));
  }, []);

  //find a news details
  const findDetails = description.find((aNews) => aNews._id === id);

  const {title,image_url,details} = findDetails ||  {}


  return (
    <div className="space-y-5">
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-2xl font-bold text-gray-600">Dragon News</h2>


          <div className="card card-compact bg-base-100 shadow-sm py-5 space-y-5">
            <figure>
              <img
                src={image_url}
                alt={`${title} image`}
              />
            </figure>
            <div className="card-body space-y-5">
              <h2 className="card-title">{title}</h2>
              <p>{details}</p>
              <div className="card-actions ">
                <Link to={'/'} className="btn btn-secondary btn-outline w-1/2">Go home</Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </div>
  );
};

export default NewsDes;
