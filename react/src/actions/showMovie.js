import * as api from '../api';
import { setSelectedMovieAction } from './index';
import { browserHistory } from 'react-router';

let showMovie = (id) => (dispatch) => {
  api.fetchMovie(id)
  .then(movie => {
    dispatch(setSelectedMovieAction(movie));
    browserHistory.push(`/movies/${movie.id}`);
  })
  .catch(error => {
    console.error(`Error in fetch: ${error.message}`);
  });
};

export default showMovie;
