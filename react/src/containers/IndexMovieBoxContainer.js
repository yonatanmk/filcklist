import React from 'react';
import { connect } from 'react-redux';
import IndexMovieBox from '../components/IndexMovieBox';
import { addMovie, setUserMovie } from '../actions';
import * as api from '../api';

const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.movies,
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
    }
  };
};

const IndexMovieBoxContainer = connect(mapStateToProps, mapDispatchToProps)(IndexMovieBox);


export default IndexMovieBoxContainer;
