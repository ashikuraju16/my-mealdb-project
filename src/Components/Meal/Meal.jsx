/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Meal = ({ meal }) => {
  const { strMeal, strMealThumb, strArea, strCategory } = meal;
  return (
    <div className="w-[90%] mx-auto  text-center my-8 space-y-4  p-6">
      <Link>
        <p className="group">
          <img
            className=" rounded-br-3xl  mb-12 rounded-tl-3xl transition-all duration-1000 group-hover:scale-110"
            src={strMealThumb}
            alt=""
          />
         
        </p>

        <h3 className="text-5xl mt-12 font-extrabold text-white">{strMeal}</h3>
      </Link>
      <p className="text-3xl">
        Category: {strCategory} <br />
        <p className="w-3/6 mx-auto flex mt-5 gap-x-5 "> 
          <Icon icon="zondicons:location-marina" />
          {strArea}
        </p>
      </p>
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
  }).isRequired,
};

export default Meal;
