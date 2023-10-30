import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";


export default function GifExpertApp() {
  const [categories, setCategories] = useState(["One Piece"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory,...categories ]);
  };
  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GiftGrid key={category} category={category} />
      ))}
      
    </>
  );
}
