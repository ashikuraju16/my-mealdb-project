/* eslint-disable react/prop-types */
import PropTypes from "prop-types";


const Meal = ({ meal }) => {
  const { strMeal, strMealThumb, strArea, strCategory, strTags } = meal;
  return (
    <div className="w-[90%] mx-auto text-center mt-4 space-y-4 border-2 p-6 rounded-br-3xl rounded-tl-3xl">
      <img className="rounded-lg" src={strMealThumb} alt="" />
      <h3 className="text-5xl font-extrabold text-white">{strMeal}</h3>
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
