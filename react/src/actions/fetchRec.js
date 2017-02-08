import * as api from '../api';
import { setRec, setRecAction, setSelectedMovie } from './index';

let fetchRec = () => (dispatch) => {
  api.fetchRec()
  .then(rec => {
    api.addMovie(rec.rec)
    .then(() => {
      dispatch(setRecAction(rec.rec));
      // dispatch(setSelectedMovie(rec.rec.id));
    })
    .catch(error => {
      console.error(`Error in fetch: ${error.message}`);
    });
  })
  .catch(error => {
    console.error(`Error in fetch: ${error.message}`);
  });
};

export default fetchRec;
