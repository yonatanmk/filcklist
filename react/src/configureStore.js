import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import { setMovieData } from './actions';
import appReducer from './reducers';

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  let store = createStore(appReducer, {}, composeEnhancers(applyMiddleware(thunk)));
  setMovieData(store.dispatch);

  return store;
};

export default configureStore;
