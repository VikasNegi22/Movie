import React from "react";
// import movies from "../reducers";
import { data } from '../data'
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import { addMovies, setShowFavourites } from '../action';
import { StoreContext } from '../index';

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log('updated');
      this.forceUpdate();
    })
    store.dispatch(addMovies(data));
  }
  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();

    const { favourites } = movies;

    const index = favourites.indexOf(movie);
    if (index !== -1)
      // Found Movie
      return true;
    return false;
  }

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  }

  render() {
    const { movies, search } = this.props.store.getState(); //{movies:{},search:{}}
    const { list, favourites, showFavourites } = movies;
    console.log('renderApp');
    console.log('STATE', this.props.store.getState())
    const displayMovies = showFavourites ? favourites : list

    return (
      <div className="App">
        <Navbar
          search={search}
        />
        <div className="main">
          <div className="tabs">
            <button className={`${showFavourites ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</button>
            <button className={`${showFavourites ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}>Favourites</button>
          </div>
          <div className="list">
            {
              displayMovies.map((movie) => {
                return (
                  <MovieCard movie={movie}
                    key={movie.imdbID}
                    dispatch={this.props.store.dispatch}
                    isfavourite={this.isMovieFavourite(movie)}
                    favourites={favourites}
                  />
                )
              })}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No movies to display...!</div> : null}
        </div>
      </div>
    );
  }
}

class AppWrapper extends React.Component {
  render() {
    console.log('renderAppWrapper');
    return (
      <StoreContext.Consumer >
        {(store) => <App store={store} />}
      </StoreContext.Consumer>
    )
  }
}

export default AppWrapper;
// export default App;
