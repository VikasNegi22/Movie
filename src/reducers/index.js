import {ADD_MOVIES} from '../action'

const intialState= {
    list:[],
    favourites:[]
};
export default function movies (state=intialState,action){
    if(action.type ===ADD_MOVIES){
        return {
            ...state, //spread oprtator
            list:action.movies
        };
    }
    return state;
}