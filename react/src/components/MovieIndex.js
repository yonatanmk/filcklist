import React from 'react';
import MovieListContainer from '../containers/MovieListContainer';
import SearchFormContainer from '../containers/SearchFormContainer';

const MovieIndex = () => {
  return (
    <div>
      <SearchFormContainer />
      <MovieListContainer />
    </div>
  );
};

export default MovieIndex;
