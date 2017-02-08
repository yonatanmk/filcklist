import React from 'react';
import { connect } from 'react-redux';
import RecommendationPage from '../components/RecommendationPage';
import { fetchRec } from '../actions';

const mapStateToProps = (state) => {
  let userMovies;
  if (state.user) {
    userMovies = state.user.movies;
  }
  return {
    userMovies
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleButtonClick: () => {
      dispatch(fetchRec());
    }
  };
};

const RecommendationPageContainer = connect(mapStateToProps, mapDispatchToProps)(RecommendationPage);

export default RecommendationPageContainer;
