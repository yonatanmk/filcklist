export {default as setMovieData} from './setMovieData';
export {default as setSelectedMovie} from './setSelectedMovie';
export {default as showMovie} from './showMovie';
export {default as setUser} from './setUser';
export {default as setUsers} from './setUsers';
export {default as setSelectedUser} from './setSelectedUser';
export {default as setUserMovie} from './setUserMovie';
export {default as deleteUserMovie} from './deleteUserMovie';
export {default as fetchRec} from './fetchRec';
export {default as setRec} from './setRec';

export const setMoviesAction = (movies) => {
  return {
    type: 'SET MOVIES',
    movies
  };
};

export const setSelectedMovieAction = (movie) => {
  return {
    type: 'SET SELECTED MOVIE',
    movie
  };
};

export const logFirstSearchAction = () => {
  return {
    type: 'FIRST SEARCH'
  };
};

export const setUserAction = (user) => {
  return {
    type: 'SET USER',
    user
  };
};

export const setUsersAction = (users) => {
  return {
    type: 'SET USERS',
    users
  };
};

export const setUserQueryAction = (body) => {
  return {
    type: 'SET USER QUERY',
    body
  };
};

export const setSelectedUserAction = (user) => {
  return {
    type: 'SET SELECTED USER',
    user
  };
};

export const setProfileStatusAction = (status) => {
  return {
    type: 'SET PROFILE STATUS',
    status
  };
};

export const setRecAction = (movie) => {
  return {
    type: 'SET REC',
    movie
  };
};

export const setLoadingAction = (id) => {
  console.log(id);
  return {
    type: 'SET LOADING',
    id
  };
};
