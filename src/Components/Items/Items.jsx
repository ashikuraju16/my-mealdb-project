import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";


const Items = () => {
  const {meals} = useLoaderData();
console.log(meals);
  return (
    <div>
      <h2 className="text-5xl font-bold w-5/6 mx-auto text-center my-4 text-white">items: {meals.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {
            meals.map(meal => <Meal key={meal.idMeal} meal={meal} />)
        }
      </div>
      <div>
        {
         


        }
      </div>
    </div>
    
  );
};

export default Items;
