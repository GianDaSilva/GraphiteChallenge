import axios from "axios";

export const getAllRecipes = ()=> async dispatch=>{ //get all the recipes
    dispatch({type: 'GET_RECIPES_REQUEST'})
    try {
        const response = await axios.get('/api/recipes/getallrecipes')
        dispatch({type: 'GET_RECIPES_SUCCESS' , payload : response.data})
    } catch (error) {
        dispatch({type: 'GET_RECIPES_FAILED' , payload : error})
    }
}

export const filterRecipes=(searchkey , ingredient)=>async dispatch=>{ //filter the recipes
    dispatch({type:'GET_RECIPES_REQUEST'})
    try {
        var filteredRecipes ;
        const response = await axios.get('/api/recipes/getallrecipes')
        filteredRecipes = response.data.filter(recipe=>recipe.name.toLowerCase().includes(searchkey)) //filter the recipes by name
        if(ingredient!=='all')
        {
            filteredRecipes = filteredRecipes.filter(recipe=>recipe.ingredients.toLowerCase().includes(ingredient)) //filter the recipes by name and ingredients
        }
        dispatch({type:'GET_RECIPES_SUCCESS' , payload : filteredRecipes})
        
    } catch (error) {
        dispatch({type:'GET_RECIPES_FAILED' , payload : error})
    }
}