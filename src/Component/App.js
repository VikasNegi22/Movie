import React from "react";
import { data } from '../data'
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";


function App() {
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
            data.map((movie) => {
                 return(
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

export default App;
