import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchChange] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // const searchedItems = items.filter((item) => {
  //   return item.name.indexOf(searchChange) !== -1; 
  // })

  function handleSearchChange(event){
    setSearchChange(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const [array, setArray] = useState(itemsToDisplay)


  function handleFormSubmit(newItem){
    //console.log(event.target[0].value)
    // setNewName(event.target[0].value)
    // setNewCategory(event.target[1].value);
    // const newItem = {
    //   id: uuid(), // the `uuid` library can be used to generate a unique id
    //   name: event.target[0].value,
    //   category: event.target[1].value,
    // }; 
    addElement(newItem)
  }
  // const newItem = {
  //   id: uuid(), // the `uuid` library can be used to generate a unique id
  //   name: newName,
  //   category: newCategory,
  // }; 

  //console.log(newName)
  function addElement(element){
    setArray([...array, element])
  }

  //console.log(array)
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {handleFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange = {handleSearchChange} search = {search}/>
      <ul className="Items">
        {array.filter((item) => {
        return item.name.indexOf(search) !== -1; 
        }).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        
      </ul>
    </div>
  );
}

export default ShoppingList;
