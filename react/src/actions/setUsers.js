import * as api from '../api';
import { setUsersAction } from './index';

let setUsers = () => (dispatch) => {
  api.setUsers()
  .then(users => {
    dispatch(setUsersAction(users));
  })
  .catch(error => {
    console.error(`Error in fetch: ${error.message}`);
  });
};

export default setUsers;
