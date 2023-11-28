import { Outlet } from "react-router-dom";


const Main = () => {
 

    return (
        <div className="font-poppins container mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;