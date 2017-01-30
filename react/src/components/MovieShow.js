import React, { Component } from 'react';
import { addMovie, setSelectedMovie, setSelectedMovieAction } from '../actions';
import * as api from '../api';

class MovieShow extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.movies.length > 0) {
      let movie = this.props.movies.find((movie)=>{return movie.id == this.props.params.id;});
      this.props.dispatch(setSelectedMovieAction(movie));
      api.addMovie(movie)
      .catch(error => {
        console.error(`Error in fetch: ${error.message}`);
      });
    }
    else {
      this.props.dispatch(setSelectedMovie(this.props.params.id));
    }
  }

  render() {
    if (this.props.selectedMovie){
      let movie = this.props.selectedMovie;
      return(
        <div>
          <h1>{movie.title}</h1>
          <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
          <p>{movie.overview}</p>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default MovieShow;
