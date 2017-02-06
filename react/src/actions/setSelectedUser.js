import * as api from '../api';
import { browserHistory } from 'react-router';
import {notify} from 'react-notify-toast';
import { setSelectedUserAction } from './index';

let setSelectedUser = (id) => (dispatch) => {
  api.fetchUser(id)
  .then(user => {
    dispatch(setSelectedUserAction(user));
  })
  .catch(error => {
    notify.show("We're Sorry. That User Could Not Be Found.", 'error', 2000);
    browserHistory.push(`/movies`);
    console.error(`Error in fetch: ${error.message}`);
  });
};

export default setSelectedUser;
