import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../actions/recipesAction"
import Filter from '../../Components/Filter';
import Recipes from '../../Components/Recipes/index'

export default function Home() {
  const dispatch = useDispatch();
  const recipesstate = useSelector((state) => state.getAllRecipesReducer);
  const { recipes, error, loading } = recipesstate; //show data, loading message or error message

  useEffect(() => {
    dispatch(getAllRecipes()); //get all recipes from the database
  }, []);

  return (
    <div>
      <Filter /> 
        <div className="row justify-content-center">
          {loading ? (
            <h1>Loading</h1>
          ) : error ? (
            <h1>Something went wrong</h1>
          ) : (
            recipes.map((recipe) => {
              return (
                <div className="col-md-3 m-3" key={recipe._id}>
                  <div>
                    <Recipes recipe={recipe} />
                  </div>
                </div>
              );
            })
          )}
        </div>
    </div>
  );
}
