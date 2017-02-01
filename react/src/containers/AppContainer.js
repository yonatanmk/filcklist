import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    users: state.users,
    children: ownProps.children
  };
};

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
