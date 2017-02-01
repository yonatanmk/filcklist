export {default as setMovieData} from './setMovieData';
export {default as setSelectedMovie} from './setSelectedMovie';
export {default as setUser} from './setUser';
export {default as setUsers} from './setUsers';
export {default as setUserMovie} from './setUserMovie';
export {default as deleteUserMovie} from './deleteUserMovie';

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
