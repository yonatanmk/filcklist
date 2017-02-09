import * as api from '../api';
import setUser from './setUser';
import {notify} from 'react-notify-toast';

let deleteUserMovie = (user, movie) => (dispatch) => {
  let userId = user.id;
  if (!userId) {
    userId = user.info.id;
  }
  api.deleteUserMovie(userId, movie.id)
  .then(body => {
    dispatch(setUser());
    notify.show(`${movie.title} Has Been Removed.`, 'success', 3000);
  })
  .catch(error => {
    console.error(`Error in fetch: ${error.message}`);
  });
};

export default deleteUserMovie;
