import React, { useState } from "react";
import ProtoTypes from "prop-types"

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState("");//String vacio

  //   Actualizar el valor del input
  const handleInputChange = (e) => {
    setinputValue(e.target.value);
    // console.log(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(setCategories);
    if(inputValue.trim().length>2){
        setCategories( () => [inputValue]);
        setinputValue('')
    }
  };

  return (
    <>
      <h2 className="animate__animated animate__bounce"  >ADD CATEGORY</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </>
  );
};

//Hacer que una función sea obligatoria
AddCategory.protoTypes ={
  setCategories : ProtoTypes.func.isRequired
}


