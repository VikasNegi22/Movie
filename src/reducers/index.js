import { ADD_MOVIES, ADD_FAVOURITE,REMOVE_FROM_FAVOURITES,SET_SHOW_FAVOURITES } from '../action'

const intialState = {
    list: [],
    favourites: [],
    showFavourites:false
};
export default function movies(state = intialState, action) {
    // if (action.type === ADD_MOVIES) {
    //     return {
    //         ...state, //spread oprtator
    //         list: action.movies
    //     };
    // }
    // return state;

    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state, //spread oprtator
                list: action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state, //spread oprtator
                favourites:[action.movie, ...state.favourites]
            }  
        case REMOVE_FROM_FAVOURITES:
              const index=state.favourites.indexOf(action.movie)
              state.favourites.splice(index,1)           
            return{
                ...state,
                favourites:[...state.favourites]
            }
         case SET_SHOW_FAVOURITES:
             console.log('action.val ',action.val)
             return{
                 ...state,
                 showFavourites:action.val
             }   
        default:
              return state;  
    }
}