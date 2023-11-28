import { Toaster } from 'react-hot-toast';
import { Outlet } from "react-router-dom";


const Main = () => {


    return (
        <div>
            <div className="font-poppins container mx-auto">
                <Outlet></Outlet>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;