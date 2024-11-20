const Sidebar = ({ recipeQueue }) => {
  return (
    <div className="md:w-1/3 border-2 text-gray-300 rounded-2xl">
      <h2>Name: {recipeQueue.length}</h2>
      {recipeQueue.map((food, idx) => {
        <p key={idx}>{food.recipe_name}</p>;
      })}
    </div>
  );
};

export default Sidebar;

// {
//   /* <div className="overflow-x-auto">
//   <table className="table">
//     <thead>
//       <tr>
//         <th></th>
//         <th>Name</th>
//         <th>Time</th>
//         <th>Calories</th>
//       </tr>
//     </thead>
//     <tbody>
//       {recipeQueue.map((recipe, idx) => {
//         <tr key={idx}>
//           <th>{idx + 1}</th>
//           <td>{recipe.length}</td>
//           <td>{recipe.preparing_time}</td>
//           <td>{recipe.calories}</td>
//         </tr>;
//       })}
//     </tbody>
//   </table>
// </div>; */
// }
