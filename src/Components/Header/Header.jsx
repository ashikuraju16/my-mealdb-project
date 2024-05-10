import { NavLink } from "react-router-dom";



const Header = () => {
    return (
        <div className="  bg-slate-900 p-12  ">
         
            <nav >
            <h1 className="text-5xl font-bold ">Welcome to <span className="text-cyan-400 text-7xl hover:text-blue-800">The MealDB</span></h1>
                <ul  className="text-3xl  text-end space-x-10 font-extrabold">
                    <NavLink   className={({ isActive, isPending }) =>
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