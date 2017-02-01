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

let firstSearch = (state = true, action ) => {
  switch (action.type) {
    case 'FIRST SEARCH':
      return false;
    default:
      return state;
  }
};

const appReducer = combineReducers({user, users, userQuery, movies, selectedMovie, firstSearch});

export default appReducer;
