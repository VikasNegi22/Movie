import { combineReducers } from 'redux';

import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from '../action'

const intialMovieState = {
    list: [],
    favourites: [],
    showFavourites: false
};
export function movies(state = intialMovieState, action) {
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
        default:
            return state;
    }
}

const initialSearchState = {
    result: {}
};
export function search(state = initialSearchState, action) {
    return {
        state
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
