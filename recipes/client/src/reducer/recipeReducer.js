export const getAllRecipesReducer=(state={recipes : [] } , action)=>{

    switch(action.type)
    {
        case 'GET_RECIPES_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'GET_RECIPES_SUCCESS' : return{
            loading : false ,
            recipes : action.payload
        }
        case 'GET_RECIPES_FAILED' : return{
            error : action.payload ,
            loading : false
        }
        default : return state
    }

}