import React from 'react';
import { connect } from 'react-redux';
import MovieShow from '../components/MovieShow';
import { setUserMovie, deleteUserMovie, showMovie } from '../actions';

const mapStateToProps = (state, ownProps) => {
  let selectedMovie;
  let userMovies = [];
  if (state.user) {
    userMovies = state.user.movies;
  }
  if (ownProps.rec) {
    selectedMovie = ownProps.rec;
  } else {
    selectedMovie = state.selectedMovie;
  }
  return {
    user: state.user,
    movies: state.movies,
    selectedMovie,
    userMovies: userMovies
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    handleButtonClick: (user, movie, status) => {
      dispatch(setUserMovie(user, movie, status));
    },
    handleDeleteButtonClick: (user, movie) => {
      dispatch(deleteUserMovie(user, movie));
    }
  };
};

const MovieShowContainer = connect(mapStateToProps, mapDispatchToProps)(MovieShow);

export default MovieShowContainer;
