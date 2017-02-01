import React from 'react';
import { connect } from 'react-redux';
import OtherUserPage from '../components/OtherUserPage';

const mapStateToProps = (state) => {
  return {
    selectedUser: state.selectedUser,
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

const OtherUserPageContainer = connect(mapStateToProps, null)(OtherUserPage);


export default OtherUserPageContainer;
