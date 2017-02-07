import React from 'react';
import { connect } from 'react-redux';
import RecommendationPage from '../components/RecommendationPage';

const mapStateToProps = (state) => {
  let userMovies;
  if (state.user) {
    userMovies = state.user.movies;
  }
  return {
    userMovies
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

const RecommendationPageContainer = connect(mapStateToProps)(RecommendationPage);

export default RecommendationPageContainer;
