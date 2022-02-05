import React from "react";
import { connect } from "react-redux";
import { data as MoviesList  } from '../data'
import MovieCard from "./MovieCard";
// import Navbar from "./Navbar";
import { addMovies, setShowFavourites } from '../action';


class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(addMovies(MoviesList));
  }
  isMovieFavourite = (movie) => {
    const { movies } = this.props;

    const { favourites } = movies;

    const index = favourites.indexOf(movie);
    if (index !== -1)
      // Found Movie
      return true;
    return false;
  }

  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourites(val));
  }

  render() {
    const { movies, search } = this.props; //{movies:{},search:{}}
    const { list, favourites, showFavourites } = movies;
    console.log('renderApp');
    const displayMovies = showFavourites ? favourites : list

    return (
      <div className="App">
        <Navbar
          // search={search}
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
                    dispatch={this.props.dispatch}
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

// class AppWrapper extends React.Component {
//   render() {
//     console.log('renderAppWrapper');
//     return (
//       <StoreContext.Consumer >
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     )
//   }
// }

function mapStateToProps(state){
  return {
    movies:state.movies,
    search:state.search,
  };
}

const connectedAppComponent = connect(mapStateToProps)(App);

export default connectedAppComponent;

// export default AppWrapper;
// export default App;
