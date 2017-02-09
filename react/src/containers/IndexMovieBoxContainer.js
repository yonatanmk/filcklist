import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import IndexMovieBox from '../components/IndexMovieBox';
import { setUserMovie, deleteUserMovie, showMovie } from '../actions';
import * as api from '../api';

const mapStateToProps = (state, ownProps) => {
  return {
    movies: ownProps.movies,
    movie: ownProps.movie,
    user: state.user.info,
    userMovies: state.user.movies,
    page: ownProps.page
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleButtonClick: (user, movie, status) => {
      api.addMovie(movie)
      .then(() => {
        dispatch(setUserMovie(user, movie, status));
      })
      .catch(error => {
        console.error(`Error in fetch: ${error.message}`);
      });
    },
    handleShowButtonClick: (movie) => {
      api.addMovie(movie)
      .then(() => {
        dispatch(showMovie(movie.id));
      })
      .then(()=>{browserHistory.push(`/movies/${movie.id}`);})
      .catch(error => {
        console.error(`Error in fetch: ${error.message}`);
      });
    },
    handleDeleteButtonClick: (user, movie) => {
      dispatch(deleteUserMovie(user, movie));
    }
  };
};

const IndexMovieBoxContainer = connect(mapStateToProps, mapDispatchToProps)(IndexMovieBox);

export default IndexMovieBoxContainer;
