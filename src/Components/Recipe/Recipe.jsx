const Recipe = () => {
  return (
    
    <div className=" text-center my-8 space-y-10 text-3xl text-white">
        <h1 className="text-5xl font-bold"> API Methods using the developer test key '1' as the API key</h1>
      <h6>
        Search meal by name <br />{" "}
        <p className=" text-cyan-400">www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata</p>
      </h6>
      <h6>
        List all meals by first letter <br />{" "}
        <p className=" text-cyan-400">www.themealdb.com/api/json/v1/1/search.php?f=a</p>
      </h6>
      <h6>
        Lookup full meal details by id <br />{" "}
        <p className=" text-cyan-400">www.themealdb.com/api/json/v1/1/lookup.php?i=52772</p>
      </h6>
      <h6>
        Lookup a single random meal <br />{" "}
        <p className=" text-cyan-400">www.themealdb.com/api/json/v1/1/random.php</p>
      </h6>
      <h6>
        List all meal categories <br />{" "}
        <p className=" text-cyan-400">www.themealdb.com/api/json/v1/1/categories.php</p>
      </h6>
      <h6>
        List all Categories, Area, Ingredients <br />{" "}
        <p className=" text-cyan-400">
          www.themealdb.com/api/json/v1/1/list.php?c=list <br />
          <span>
            www.themealdb.com/api/json/v1/1/list.php?a=list
          </span> <br />{" "}
          <span>www.themealdb.com/api/json/v1/1/list.php?i=list</span>
        </p>
      </h6>
      <h6>
        Filter by main ingredient <br />{" "}
       <p className=" text-cyan-400">  www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast</p>
      </h6>
      <h6>
        Filter by Category
        <br /> <p className=" text-cyan-400">www.themealdb.com/api/json/v1/1/filter.php?c=Seafood</p>
      </h6>
      <h6>
        Filter by Area
        <br /> <p className=" text-cyan-400">www.themealdb.com/api/json/v1/1/filter.php?a=Canadian</p>
      </h6>
    </div>
  );
};

export default Recipe;
