import React from 'react';
import { connect } from 'react-redux';
import UserPage from '../components/UserPage';
import { setProfileStatusAction } from '../actions';


const mapStateToProps = (state) => {
  return {
    user: state.user,
    profileStatus: state.profileStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleProfileButtonClick: (status) => {
      dispatch(setProfileStatusAction(status));
    }
  };
};

const UserPageContainer = connect(mapStateToProps, mapDispatchToProps)(UserPage);


export default UserPageContainer;
