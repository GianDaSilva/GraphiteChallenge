import React, { useState} from "react";
import { useDispatch} from "react-redux";
import { filterRecipes } from "../../actions/recipesAction";

export default function Filter() {

    const dispatch = useDispatch()
    const[searchkey , setsearchkey] = useState('')
    const[ingredient , setingredient] = useState('all')

    return (
        <div className='container'>
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="col-md-3 w-100">
                      <input
                      onChange={(e)=>{setsearchkey(e.target.value)}}
                      value={searchkey} type="text" className="form-control w-100" placeholder="Search recipes"/> {/*search box*/}
                    </div>
                    <div className="col-md-3 w-100">
                        <select className="form-control w-100 mt-2" value={ingredient} onChange={(e)=>setingredient(e.target.value)}> {/*filter dropdown*/}
                            <option value="all">All</option>
                            <option value="bacon">Bacon</option>
                            <option value="bread">Bread</option>
                            <option value="cheese">Cheese</option>
                            <option value="chocolate">Chocolate</option>
                            <option value="jelly">Jelly</option>
                            <option value="milk">Milk</option>
                            <option value="peanut butter">Peanut butter</option>
                            <option value="pineapple">Pineapple</option>
                            <option value="pizza dough">Pizza dough</option>
                            <option value="sugar">Sugar</option>
                            <option value="tomato souce">Tomato souce</option>                    
                        </select>
                    </div>
                    <div className="col-md-3 w-100">
                       <button className='btn w-100 mt-2' onClick={()=>{dispatch(filterRecipes(searchkey , ingredient))}}>SEARCH</button>
                    </div>

            </div>
        </div>
    )
}
