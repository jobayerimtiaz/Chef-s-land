import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Items from "./components/Items";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
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
  console.log(recipeQueue);

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Recipes></Recipes>
      <section className="flex flex-col md:flex-row gap-6">
        <Items handleRecipeQueue={handleRecipeQueue}></Items>
        <Sidebar recipeQueue={recipeQueue}></Sidebar>
      </section>
    </>
  );
}

export default App;
