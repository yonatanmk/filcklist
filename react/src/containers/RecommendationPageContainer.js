import React from 'react';
import { connect } from 'react-redux';
import RecommendationPage from '../components/RecommendationPage';

const mapStateToProps = (state) => {
  return {
    userMovies: state.user.movies
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
