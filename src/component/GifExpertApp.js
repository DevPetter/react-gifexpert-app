import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
  //Creación de una arreglo
  // const categories = ['One punch', 'Samurai', 'Goku'];

  const [categories, setCategories] = useState(["Universo"]);

  return (
    <>
      <h2 className=" animate__animated animate__pulse">GIF EXPERT APP</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid
              key={category} 
              category={category} />
        ))}
      </ol>
    </>
  );
};
