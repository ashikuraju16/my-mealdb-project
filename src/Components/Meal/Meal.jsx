/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
  const { strMeal, strMealThumb, strArea, strCategory } = meal;
  return (
    <div className="w-[90%] mx-auto text-center my-8 space-y-4 border-2 p-6 rounded-br-3xl rounded-tl-3xl">
      <Link>
        <img className="rounded-lg" src={strMealThumb} alt="" />
        <h3 className="text-5xl mt-4 font-extrabold text-white">{strMeal}</h3>
      </Link>
      <p className="text-3xl">
        Category: {strCategory} <br /> Area:{strArea}
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
