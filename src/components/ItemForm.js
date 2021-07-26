import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newName, setNewName] = useState("");
  const [newCategory, setNewCategory] = useState("Produce")
  function handleSubmit(event){
    event.preventDefault(); 
    const newObject = {
      id:uuid(),
      name: newName,
      category: newCategory
    }
    onItemFormSubmit(newObject)
  }
  function handleChange(event){
    if(event.target.name === "name"){
      setNewName(event.target.value)
    }
    else{
      setNewCategory(event.target.value)
    }
  }
  return (
    <form className="NewItem" onSubmit = {handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value = {newName} onChange = {handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" value = {newCategory} onChange = {handleChange}>
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
