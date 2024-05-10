import { Link } from "react-router-dom";

const Home = () => {
  return <div className="w-5/6 mx-auto text-center my-14">
    
    <p className="text-3xl w-4/6 my-12 mx-auto">
    Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
We also offer a <Link to="/recipe" className="text-blue-600">free recipe API</Link> for anyone wanting to use it, with additional features for subscribers.
    </p>
  </div>;
};

export default Home;
