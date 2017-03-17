import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import IndexMovieBox from '../components/IndexMovieBox';
import { setUserMovie, deleteUserMovie, showMovie, setLoadingAction, removeLoadingAction } from '../actions';
import * as api from '../api';

const mapStateToProps = (state, ownProps) => {
  return {
    movies: ownProps.movies,
    movie: ownProps.movie,
    user: state.user.info,
    userMovies: state.user.movies,
    page: ownProps.page,
    loading: state.loading,
    end: ownProps.end,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleButtonClick: (user, movie, status) => {
      dispatch(setLoadingAction(movie.id));
      api.addMovie(movie)
      .then(() => {
        dispatch(setUserMovie(user, movie, status));
      })
      .then(() => {
        dispatch(removeLoadingAction(movie.id));
      })
      .catch(error => {
        dispatch(removeLoadingAction(movie.id));
        console.error(`Error in fetch: ${error.message}`);
      });
    },
    handleShowButtonClick: (movie) => {
      dispatch(setLoadingAction(movie.id));
      api.addMovie(movie)
      .then(() => {
        dispatch(showMovie(movie.id));
      })
      .then(()=>{browserHistory.push(`/movies/${movie.id}`);})
      .then(() => {
        dispatch(removeLoadingAction(movie.id));
      })
      .catch(error => {
        dispatch(removeLoadingAction(movie.id));
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
