import { combineReducers } from 'redux';

let user = (state = null, action ) => {
  switch (action.type) {
    case 'SET USER':
      return action.user;
    default:
      return state;
  }
};

let users = (state = [], action ) => {
  switch (action.type) {
    case 'SET USERS':
      return action.users;
    default:
      return state;
  }
};

let selectedUser = (state = null, action ) => {
  switch (action.type) {
    case 'SET SELECTED USER':
      return action.user;
    default:
      return state;
  }
};

let userQuery = (state = null, action ) => {
  switch (action.type) {
    case 'SET USER QUERY':
      return action.body;
    default:
      return state;
  }
};

let movies = (state = [], action ) => {
  switch (action.type) {
    case 'SET MOVIES':
      return action.movies;
    default:
      return state;
  }
};

let selectedMovie = (state = null, action ) => {
  switch (action.type) {
    case 'SET SELECTED MOVIE':
      return action.movie;
    default:
      return state;
  }
};

let rec = (state = null, action ) => {
  switch (action.type) {
    case 'SET REC':
      return action.movie;
    default:
      return state;
  }
};

let firstSearch = (state = true, action ) => {
  switch (action.type) {
    case 'FIRST SEARCH':
      return false;
    default:
      return state;
  }
};

let profileStatus = (state = 'want', action ) => {
  switch (action.type) {
    case 'SET PROFILE STATUS':
      return action.status;
    default:
      return state;
  }
};

let loading = (state = null, action ) => {
  switch (action.type) {
    case 'SET LOADING':
      return action.id;
    default:
      return state;
  }
};

const appReducer = combineReducers({user, users, userQuery, selectedUser, movies, selectedMovie, rec, profileStatus, firstSearch, loading});

export default appReducer;
