import * as api from '../api';
import setUser from './setUser';

let setUserMovie = (user, movie, status) => (dispatch) => {
  let userId = user.id;
  if (!userId) {
    userId = user.info.id;
  }
  api.addUserMovie(userId, movie.id, status)
  .then(body => {
    dispatch(setUser());
  })
  .catch(error => {
    console.error(`Error in fetch: ${error.message}`);
  });
};

export default setUserMovie;
