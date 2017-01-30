import * as api from '../api';
import { setSelectedMovieAction } from './index';

let setSelectedMovie = (id) => (dispatch) => {
  api.fetchMovie(id)
  .then(movie => {
    dispatch(setSelectedMovieAction(movie));
  })
  .catch(error => {
    console.error(`Error in fetch: ${error.message}`);
  });
};

export default setSelectedMovie;
