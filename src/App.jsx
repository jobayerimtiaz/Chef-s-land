import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Items from "./components/Items";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleRecipeQueue = (item) => {
    const isExist = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === item.recipe_id
    );
    if (!isExist) {
      setRecipeQueue([...recipeQueue, item]);
    } else {
      alert("Recipe exists");
    }
  };

  const handleRemove = (id) => {
    const deletedRecipe = recipeQueue.find((recipe) => recipe.recipe_id === id);
    const updatedQueue = recipeQueue.filter(
      (recipe) => recipe.recipe_id !== id
    );
    setRecipeQueue(updatedQueue);
    setPreparedRecipe([...preparedRecipe, deletedRecipe]);
  };

  const calculateTimeAndCalories = (time, calorie) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calorie);
  };

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Recipes></Recipes>
      <section className="flex flex-col md:flex-row gap-6">
        <Items handleRecipeQueue={handleRecipeQueue}></Items>
        <Sidebar
          recipeQueue={recipeQueue}
          handleRemove={handleRemove}
          preparedRecipe={preparedRecipe}
          calculateTimeAndCalories={calculateTimeAndCalories}
          totalTime={totalTime}
          totalCalories={totalCalories}
        ></Sidebar>
      </section>
    </>
  );
}

export default App;
