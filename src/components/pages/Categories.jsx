import React from "react";

const Categories = () => {
    const recipeCategories=
    [{
        name:"Breakfast",
        image:"/public/assets/Pancakes.jpg",
        path:"/categories/breakfast"
    },
    {
        name:"Dinner",
        image:"/public/assets/Pancakes.jpg",
        path:"/categories/dinner"
    }
    ,{
        name:"Desserts",
        image:"/public/assets/Pancakes.jpg",
        path:"/categories/Desserts"
    },{
        name:"Vegetarian",
        image:"/public/assets/Pancakes.jpg",
        path:"/categories/Vegetarian"
    },
    {
        name:"Quick Meals",
        image:"/public/assets/Pancakes.jpg",
        path:"/categories/Quick Meals"
    }
      ,
      {
        name:"Healthy",
        image:"/public/assets/Pancakes.jpg",
        path:"/categories/Healthy"
    }
      
        


    ]
  return (
    <div className="Categories-container">
      <h1>Recipe Categories</h1>
      <div className="categories-grid">
        {recipeCategories.map((category,index)=>(
            <a href={category.path}
                key={index}
                className="category-card">
                    <div className="category-image"
                    >
                        <img src="category.image" alt={category.name}/>
                        <div className="overlay">

                        </div>
                    </div>
                    <h2>{category.name}</h2>

            </a>
        ))}

      </div>
      
    </div>
  );
};
export default Categories;
