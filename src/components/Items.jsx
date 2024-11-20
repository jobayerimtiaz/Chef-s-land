import { useEffect } from "react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Items = ({ handleRecipeQueue }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((item) => (
          <div key={item.recipe_id} className="card bg-base-100 shadow-xl">
            <figure className="h-52">
              <img className="w-full" src={item.recipe_image} />
            </figure>
            <div className="card-body text-left">
              <h3 className="card-title">{item.recipe_name}</h3>
              <p>{item.short_description}</p>
              <h3 className="card-title">
                Ingredients: {item.ingredients.length}
              </h3>
              <ul>
                {item.ingredients.map((ingredient, idx) => (
                  <li className="list-disc" key={idx}>
                    {ingredient}
                  </li>
                ))}
              </ul>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleRecipeQueue(item)}
                  className="btn btn-primary"
                >
                  Want to cook
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
