import React from 'react';
import { connect } from 'react-redux';
import MovieList from '../components/MovieList';

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    firstSearch: state.firstSearch
  };
};

const MovieListContainer = connect(mapStateToProps, null)(MovieList);


export default MovieListContainer;
