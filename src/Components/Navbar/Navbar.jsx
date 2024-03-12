import { RiShoppingBag3Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { PiShoppingCartBold } from "react-icons/pi";
import { RiMenuLine } from "react-icons/ri";
const Navbar = () => {
    const manu = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-green-500 border-b-2 border-green-500 pb-1" : "hover:text-green-500 hover:border-b-2 hover:border-green-500 hover:pb-1"
            }
        >
            Home
        </NavLink></li>
        <li className=" group"><NavLink
            to="/Category"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 border-b-2 border-green-500 pb-1" : "hover:text-green-500 hover:border-b-2 hover:border-green-500 hover:pb-1"
            }
        >
            Category
        </NavLink> <div className=" absolute  hidden group-hover:block bg-fuchsia-400 p-5 "> sakjdhfslk</div></li>
        <li><NavLink
            to="/messages"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 border-b-2 border-green-500 pb-1" : "hover:text-green-500 hover:border-b-2 hover:border-green-500 hover:pb-1"
            }
        >
            Shop
        </NavLink></li>
        <li><NavLink
            to="/Blog"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 border-b-2 border-green-500 pb-1" : "hover:text-green-500 hover:border-b-2 hover:border-green-500 hover:pb-1"
            }
        >
            Blog
        </NavLink></li>
        <li><NavLink
            to="/messages"
            className={({ isActive, isPending }) =>
                isPending ? "text-green-500 border-b-2 border-green-500 pb-1" : isActive ? "active" : "hover:text-green-500 hover:border-b-2 hover:border-green-500 hover:pb-1"
            }
        >
            Contact
        </NavLink></li>
    </>
    return (
        <nav className=" shadow-xl p-5 flex justify-between items-center">
            <div className=" flex items-center gap-2">
                <p className=" text-4xl text-green-500"><RiShoppingBag3Fill /></p>
                <h2 className=" text-3xl font-bold">Seven <span className=" text-green-500">Shop</span> </h2>
            </div>
            <div>
                <ul className=" flex items-center gap-7 text-xl font-semibold">
                    {manu}
                </ul>
            </div>
            <div className=" flex items-center gap-3">
                <div className=" flex items-center border gap-2 p-2 w-72 rounded-lg">
                    <input type="search" name="" className="  border-none outline-none w-full" placeholder="Search now" id="" />
                    <button className="text-2xl"><IoSearch /></button>
                </div>
                <div className=" text-2xl font-bold flex items-center gap-3">
                    <p><PiShoppingCartBold /></p>
                    <p><FaUser /></p>
                    <p><RiMenuLine /></p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;