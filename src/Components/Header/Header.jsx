import { NavLink } from "react-router-dom";



const Header = () => {
    return (
        <div className="  bg-slate-900 p-6">
            <nav>
                <ul className="text-3xl  text-center space-x-10 font-extrabold ">
                    <NavLink  className={({ isActive, isPending }) =>
                      isActive
                        ? "underline bg-fuchsia-500 p-2 rounded-br-3xl rounded-tl-3xl text-white"
                        : isPending
                        ? "  opacity-25"
                        : ""
                    } to="/home">Home</NavLink>
                    <NavLink  className={({ isActive, isPending }) =>
                      isActive
                        ? "underline bg-fuchsia-500 p-2 rounded-br-3xl rounded-tl-3xl text-white"
                        : isPending
                        ? "  opacity-25"
                        : ""
                    } to="/items">Items</NavLink>
     
                    <NavLink  className={({ isActive, isPending }) =>
                      isActive
                        ? "bg-fuchsia-500 p-2 rounded-br-3xl rounded-tl-3xl text-white"
                        : isPending
                        ? "  opacity-25"
                        : ""
                    } to="/contact">Contact Us</NavLink>
                    <NavLink  className={({ isActive, isPending }) =>
                      isActive
                        ? "bg-fuchsia-500 p-2 rounded-br-3xl rounded-tl-3xl text-white"
                        : isPending
                        ? "  opacity-25"
                        : ""
                    } to="/about">About Us</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;