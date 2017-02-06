import * as api from '../api';
import { browserHistory } from 'react-router';
import {notify} from 'react-notify-toast';
import { setSelectedMovieAction } from './index';

let setSelectedMovie = (id) => (dispatch) => {
  api.fetchMovie(id)
  .then(movie => {
    dispatch(setSelectedMovieAction(movie));
  })
  .catch(error => {
    notify.show("We're Sorry. The Movie Could Not Be Found.", 'error', 2000);
    browserHistory.push(`/movies`);
    console.error(`Error in fetch: ${error.message}`);
  });
};

export default setSelectedMovie;
