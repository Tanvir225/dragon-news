import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";



const BreakingNews = () => {
    return (
        <div className="bg-blue-50 flex gap-6 mt-5">
            <button className="btn bg-pink-700 text-white hover:bg-pink-500">Breaking News</button>
            <Marquee className="space-x-5" pauseOnHover speed={80} >
                <Link to={"/"}>Match Highlights: Germany vs Spain — as it happened !</Link>   
                <Link to={"/"}>Match Highlights: Germany vs Spain — as it happened !</Link>   
                <Link to={"/"}>Match Highlights: Germany vs Spain — as it happened !</Link>   
            </Marquee>
        </div>
    );
};

export default BreakingNews;