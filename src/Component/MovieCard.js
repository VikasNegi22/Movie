import React from "react";
import { addFavourite,removeFromFavourites } from "../action";

class MovieCard extends React.Component {

    handleFavouriteClick = () => {
        const { movie } = this.props
        this.props.dispatch(addFavourite(movie));
    }

    handleUnFavouriteClick=()=>{
        const {movie} = this.props
        this.props.dispatch(removeFromFavourites(movie));
    }

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
                        {
                            this.props.isfavourite
                                ? <button className="UnFavourite"  onClick={this.handleUnFavouriteClick}>UnFavourite</button>
                                : <button className="Favourite" onClick={this.handleFavouriteClick}>Favourite</button>
                        }
                    </div>
                </div>
            </div>
        )
    }


}

export default MovieCard;