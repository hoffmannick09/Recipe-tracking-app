import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const changeHandler = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  const submitHandler = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData({ ...initialFormData });
  };

  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <div>
            <tr>
              <td>
                <input
                  name="name"
                  id="cuisine"
                  type="text"
                  required={true}
                  value={formData.name}
                  placeholder="Name"
                  onChange={changeHandler}
                />
              </td>
              <td>
                <input
                  name="cuisine"
                  id="cuisine"
                  type="text"
                  required={true}
                  value={formData.cuisine}
                  placeholder="Cuisine"
                  onChange={changeHandler}
                />
              </td>
              <td>
                <input
                  name="photo"
                  id="photo"
                  //type="url"
                  required={true}
                  value={formData.photo}
                  placeholder="Url"
                  onChange={changeHandler}
                />
              </td>
              <td>
                <textarea
                  name="ingredients"
                  id="ingredients"
                  type="text"
                  required={true}
                  value={formData.ingredients}
                  placeholder="Ingredients"
                  onChange={changeHandler}
                />
              </td>
              <td>
                <textarea
                  name="preparation"
                  id="preparation"
                  type="text"
                  required={true}
                  value={formData.preparation}
                  placeholder="Preparation"
                  onChange={changeHandler}
                />
              </td>
              <td>
              <button type="submit">Create</button>
              </td>
            </tr>
          </div>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
