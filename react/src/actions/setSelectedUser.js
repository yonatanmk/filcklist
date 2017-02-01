import * as api from '../api';
import { setSelectedUserAction } from './index';

let setSelectedUser = (id) => (dispatch) => {
  api.fetchUser(id)
  .then(user => {
    dispatch(setSelectedUserAction(user));
  })
  .catch(error => {
    console.error(`Error in fetch: ${error.message}`);
  });
};

export default setSelectedUser;
