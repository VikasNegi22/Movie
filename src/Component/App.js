import React from "react";
import movies from "../reducers";
import { data } from '../data'
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";


class App extends React.Component {
  componentDidMount() {
    const {store} =this.props;
    store.subscribe(()=>{
      console.log('updated');
      this.forceUpdate();
    })
    store.dispatch({
      type: 'ADD_MOVIES',
      movies: data
    })
    console.log('After State ',this.props.store.getState());
  }

  render() {
    const movies = this.props.store.getState();
    console.log('render');
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <button>Movies</button>
            <button>Favourites</button>
          </div>
          <div className="list">
            {
              movies.map((movie) => {
                return (
                  <MovieCard movie={movie}
                    key={movie.imdbID}
                  />
                )
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
