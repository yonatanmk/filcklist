import React from 'react';
import { connect } from 'react-redux';
import UserPage from '../components/UserPage';

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

const UserPageContainer = connect(mapStateToProps, null)(UserPage);


export default UserPageContainer;
