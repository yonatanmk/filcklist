import * as api from '../api';
import { browserHistory } from 'react-router';
import {notify} from 'react-notify-toast';
import { setRecAction } from './index';

let setRec = (id) => (dispatch) => {
  api.fetchMovie(id)
  .then(movie => {
    dispatch(setRecAction(movie));
  })
  .catch(error => {
    notify.show("We're Sorry. The Movie Could Not Be Found.", 'error', 2000);
    console.error(`Error in fetch: ${error.message}`);
  });
};

export default setRec;
