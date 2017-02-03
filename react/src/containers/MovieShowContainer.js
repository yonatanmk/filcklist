import React from 'react';
import { connect } from 'react-redux';
import MovieShow from '../components/MovieShow';

const mapStateToProps = (state) => {
  let userMovies = [];
  if (state.user) {
    userMovies = state.user.movies;
  }
  return {
    movies: state.movies,
    selectedMovie: state.selectedMovie,
    userMovies: userMovies
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleMovieClick: (movie) => {
//       dispatch(addMovie(movie));
//       dispatch(setCurrentMovie(movie));
//     }
//   };
// };

const MovieShowContainer = connect(mapStateToProps)(MovieShow);


export default MovieShowContainer;
