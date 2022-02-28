import React from "react";


// const newItem = {
//   id: uuid(), 
//   name: itemName,
//   category: itemCategory,
// };
function ItemForm({onItemFormSubmit}) {
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit }>
      <label>
        Name:
        <input type="text" name="name" id = 'name'/>
      </label>

      <label>
        Category:
        <select name="category" id = 'category'>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
