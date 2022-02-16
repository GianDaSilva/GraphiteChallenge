import {combineReducers} from 'redux'
import {createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllRecipesReducer } from './reducer/recipeReducer'

const finalReducer = combineReducers({
    getAllRecipesReducer : getAllRecipesReducer,
})

const initialState = {}
const composedEnhancers = composeWithDevTools({})
const store = createStore(finalReducer , initialState , composedEnhancers(applyMiddleware(thunk)))

export default store;