import * as api from '../api';
import { setMoviesAction } from './index';

let setMovieData = (query) => (dispatch) => {
  api.fetchMovies(query)
  .then(movies => {
    dispatch(setMoviesAction(movies));
  })
  .catch(error => {
    console.error(`Error in fetch: ${error.message}`);
  });
};

export default setMovieData;
