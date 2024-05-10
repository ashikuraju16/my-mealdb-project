import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <ul className="text-xl  text-center space-x-20 font-extrabold ">
            <NavLink to="/items">Items</NavLink>

            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/about">About Us</NavLink>
          </ul>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4  text-center space-x-20 text-6xl  justify-between">
            <a href=" https://www.facebook.com/ashikuraju16">
              <Icon className="mb-12 transition-all duration-1000 hover:scale-150" icon="logos:facebook" />
            </a>
            <a href="https://github.com/ashikuraju16">
              <Icon className="mb-12 transition-all duration-1000 hover:scale-150" icon="mdi:github" />
            </a>
            <a href="https://www.fiverr.com/ashik_raju?up_rollout=true">
              <Icon
                className="bg-green-500 text-white p-2 rounded-full mb-12 transition-all duration-1000 hover:scale-150"
                icon="jam:fiverr"
              />
            </a>
          </div>
        </nav>
        <aside>
          <p className=" text-white font-bold hover:bg-fuchsia-700 p-4 rounded-tr-full rounded-bl-full mb-12 transition-all duration-1000 hover:scale-125"><a href=" https://www.fiverr.com/ashik_raju?up_rollout=true">AshikuR Rahman</a></p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
