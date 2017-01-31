import * as api from '../api';
import setUser from './setUser';

let deleteUserMovie = (user, movie) => (dispatch) => {
  api.deleteUserMovie(user.id, movie.id)
  .then(body => {
    dispatch(setUser());
  })
  .catch(error => {
    console.error(`Error in fetch: ${error.message}`);
  });
};

export default deleteUserMovie;
