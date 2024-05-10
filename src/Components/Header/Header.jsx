import { NavLink } from "react-router-dom";



const Header = () => {
    return (
        <div className="  bg-slate-900 p-6">
            <nav>
                <ul className="text-3xl  text-center space-x-10 font-extrabold ">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/items">Items</NavLink>
     
                    <NavLink to="/contact">Contact Us</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;