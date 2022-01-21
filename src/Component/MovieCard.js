import React from "react";

class MovieCard extends React.Component {
    render() {
        const { movie } = this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img src={movie.Poster} alt="movie-poster" />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                     <div className="Plot">{movie.Plot}</div>
                     <div className="footer">
                         <div className="imdbRating">{movie.imdbRating}</div>
                         <button>Favourite</button>
                     </div>
                </div>
            </div>
        )
    }


}

export default MovieCard;