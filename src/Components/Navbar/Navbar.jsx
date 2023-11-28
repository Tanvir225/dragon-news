import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/user.png"
import "./navbar.css"
import Context from "../../Context/Context";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
    //links dynamic
    const navLinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/career"}>Career</NavLink></li>

    </>

    //get context
    const { user, logOut } = Context(AuthContext)

    //handle Logout
    const handleLogOut = () => {
        logOut()
    }









    return (
        <div className="navbar bg-transparent">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <>
                            <div className="avatar  mr-5">
                                <div className="rounded-full w-10">
                                    <img src={user ? user.photoURL : profile} alt={` image`} />
                                </div>
                            </div>
                            <Link onClick={handleLogOut} className="btn btn-outline btn-secondary w-[150px]">Log out</Link>
                        </> :
                        <>
                            <div className="avatar w-10 mr-5">
                                <img src={profile} alt={` image`} />
                            </div>
                            <Link to={"/login"} className="btn btn-outline btn-secondary w-[150px]">Login</Link>
                        </>
                }

            </div>
        </div>
    );
};



export default Navbar;