import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilterData from "../FilterData/FilterData";





const LeftSidebar = () => {



    // state for hold catagories
    const [catagories,setCatagories] = useState([])

    //state for hold news data
    const [data,setData] = useState([])

    //useeffect fot load catagories data
    useEffect(()=>{
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCatagories(data))
    },[])


    //useeffect fot load all news data
    useEffect(()=>{
        fetch('/news.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])





    return (
        <div className="space-y-6 bg-base-100 shadow-sm p-5">
            <h2 className="text-xl font-semibold text-gray-700">All Category</h2>

            <h2 className="bg-gray-300 text-lg text-black p-3 rounded-lg text-center">National News</h2>

            {/* load catagories data from json */}
            <div className="space-y-5">
                {
                    catagories.map(cat => <Link to={"/"} key={cat.id} className=" block text-center text-gray-500">{cat.name}</Link>)
                }
            </div>

            {/* load sports category data filter from all news */}
            {
                    data.filter(filterData => filterData.category_id ==='4').map(sportsData=> <FilterData key={sportsData._id} filterData={sportsData}></FilterData>)
            }

        </div>
    );
};

export default LeftSidebar;