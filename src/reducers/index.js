import { combineReducers } from 'redux';

import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES, ADD_SEARCH_RESULT,ADD_SEARCH_MOVIE_TO_LIST } from '../action'

const intialMovieState = {
    list: [],
    favourites: [],
    showFavourites: false,
};

export function movies(state = intialMovieState, action) {
    // console.log('MOVIES REDUCER');
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
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const index = state.favourites.indexOf(action.movie)
            state.favourites.splice(index, 1)
            return {
                ...state,
                favourites: [...state.favourites]
            }
        case SET_SHOW_FAVOURITES:
            console.log('action.val ', action.val)
            return {
                ...state,
                showFavourites: action.val
            }
          case ADD_SEARCH_MOVIE_TO_LIST:
              return{
                  ...state,
                  list:[action.movie,...state.list]
              }  
        default:
            return state;
    }
}

const initialSearchState = {
    result: {},
    showSearchResults: false,
};
export function search(state = initialSearchState, action) {

    switch (action.type) {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie,
                showSearchResults: true
            }
            case ADD_SEARCH_MOVIE_TO_LIST:
                return{
                    ...state,
                    showSearchResults:false
                }     
        default:
            return state;
    }
}
// const initialRootState = {
//     movies: intialMovieState,
//     search: initialSearchState
// }
// export default function rootReducer(state = initialRootState, action) {
//     return{
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }

export default combineReducers({
    // movies:movies,
    // search:search
    movies,
    search
})
