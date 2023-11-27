import BreakingNews from "../../Components/BreakingNews/BreakingNews";
import Header from "../../Components/Header/Header";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import Navbar from "../../Components/Navbar/Navbar";
import RightSidebar from "../../Components/RighSidebar/RightSidebar";

import { FaRegBookmark, FaShare, FaEye } from 'react-icons/fa'
import { Rating } from '@smastrom/react-rating'
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";

const Home = () => {

    // state for all news 
    const [data, setData] = useState([])


    //useeffect fot load all news data
    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div>
            {/* header import from component */}
            <Header></Header>

            {/* Breaking news from component  */}
            <BreakingNews></BreakingNews>

            {/* navbar from component */}
            <Navbar></Navbar>

            {/* Home page Layout */}

            <div className="mt-10 grid-cols-1 grid md:grid-cols-4">
                <div className="">
                    {/* leftSidebar from components */}
                    <LeftSidebar></LeftSidebar>
                </div>

                <div className="md:col-span-2  bg-base-100 shadow-sm p-5">
                    <h2 className=" text-gray-700 font-semibold text-xl">Dragon News Home</h2>
                    {
                        data.map(data => <>
                            <div>
                                <div className="flex justify-between items-center bg-blue-50 py-5 px-5 rounded-lg">
                                    <div className="flex items-center gap-5">
                                        <img src={data.author.img} alt={`${data.author.name} image`} className="w-16 rounded-lg avatar" />
                                        <div>
                                            <h4 className="text-sm text-blue-800 font-semibold">{data.author.name}</h4>
                                        </div>

                                    </div>


                                    <div className="text-lg flex items-center gap-3">
                                        <FaRegBookmark></FaRegBookmark>
                                        <FaShare className=""></FaShare>
                                    </div>
                                </div>

                                <div>
                                    <h2>{data.title}</h2>
                                    <img src={data.image_url} alt="" />
                                    <p></p>
                                    <div className="flex items-center justify-between">
                                        <div className="">
                                            <Rating style={{maxWidth:120}} value={parseFloat(data.rating.number)}></Rating>

                                        </div>

                                        <div className="flex  items-center text-lg gap-3">
                                            <FaEye></FaEye>
                                            <p>{data.total_view}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>)
                    }
                </div>

                <div className="border">
                    {/* rightSidebar from component */}

                    <RightSidebar></RightSidebar>
                </div>
            </div>
        </div>
    );
};

export default Home;