import * as api from '../api';
import { setUserAction } from './index';

let setUser = () => (dispatch) => {
  api.setUser()
  .then(user => {
    dispatch(setUserAction(user));
  })
  .catch(error => {
    console.error(`Error in fetch: ${error.message}`);
  });
};

export default setUser;
