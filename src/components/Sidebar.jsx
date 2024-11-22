/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
const Sidebar = ({
  recipeQueue,
  handleRemove,
  preparedRecipe,
  calculateTimeAndCalories,
  totalTime,
  totalCalories,
}) => {
  return (
    <div className="md:w-1/3 border-2 text-gray-600 rounded-2xl">
      <div className="overflow-x-auto">
        <h2>Recipe Name : {recipeQueue.length}</h2>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <button
                  className="btn btn-accent"
                  onClick={() => {
                    handleRemove(recipe.recipe_id);
                    calculateTimeAndCalories(
                      recipe.preparing_time,
                      recipe.calories
                    );
                  }}
                >
                  Cook
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto">
        <h2>Cooking : {preparedRecipe.length}</h2>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {preparedRecipe.map((recipe, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
              </tr>
            ))}
            <tr>
              <th></th>
              <td></td>
              <td>Time : {totalTime}</td>
              <td>Calorie : {totalCalories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  recipeQueue: PropTypes
    .arrayOf
    // PropTypes.shape({
    //   recipe_name: PropTypes.string.isRequired,
    // })
    ().isRequired,
};

export default Sidebar;
