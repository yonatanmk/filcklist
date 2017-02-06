import React from 'react';
import { connect } from 'react-redux';
import OtherUserPage from '../components/OtherUserPage';
import { setProfileStatusAction } from '../actions';

const mapStateToProps = (state) => {
  return {
    selectedUser: state.selectedUser,
    user: state.user,
    profileStatus: state.profileStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    handleProfileButtonClick: (status) => {
      dispatch(setProfileStatusAction(status));
    }
  };
};

const OtherUserPageContainer = connect(mapStateToProps, mapDispatchToProps)(OtherUserPage);


export default OtherUserPageContainer;
