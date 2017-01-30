import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import AppContainer from '../containers/AppContainer';
import UserPageContainer from '../containers/UserPageContainer';
import MovieIndex from './MovieIndex';
import MovieShowContainer from '../containers/MovieShowContainer';
import RecommendationPageContainer from '../containers/RecommendationPageContainer';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Redirect from="/" to="/movies" />
      <Route path="/" component={AppContainer} >
        <Route path="/user" component={UserPageContainer} />
        <Route path="/user" component={RecommendationPageContainer} />
        <Route path="/movies" component={MovieIndex} />
        <Route path="/movies/:id" component={MovieShowContainer} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
