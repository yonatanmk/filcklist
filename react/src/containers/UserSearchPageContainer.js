import React from 'react';
import { connect } from 'react-redux';
import UserSearchPage from '../components/UserSearchPage';

const mapStateToProps = (state) => {
  return {
    user: state.user
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

const UserSearchPageContainer = connect(mapStateToProps, null)(UserSearchPage);


export default UserSearchPageContainer;
