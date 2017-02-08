import * as api from '../api';
import { setRecAction } from './index';

let fetchRec = () => (dispatch) => {
  api.fetchRec()
  .then(rec => {
    dispatch(setRecAction(rec));
  })
  .catch(error => {
    console.error(`Error in fetch: ${error.message}`);
  });
};

export default fetchRec;
