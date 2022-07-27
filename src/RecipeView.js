import React from "react"

export default function RecipeView({recipe, deleteRecipe}) {
    return (
    
        <tr>
            <td>
                <p>{recipe.name}</p>
            </td>
            <td>
                <p>{recipe.cuisine}</p>
            </td>
            <td>
                <img alt={recipe.name} src={recipe.photo}/>
            </td>
            <td>
                {recipe.ingredients}
            </td>
            <td>
                {recipe.preparation}
            </td>
            <td>
            <button name="delete" onClick={deleteRecipe}>Delete</button>  
            </td> 
        </tr>
            
    );
};