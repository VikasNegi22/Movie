export default function movies (state=[8],action){
    if(action.type ==='ADD_MOVIES'){
        return action.movies;
    }
    return state;
}