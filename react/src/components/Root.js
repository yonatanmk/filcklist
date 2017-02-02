import React from 'react';
import Notifications from 'react-notify-toast';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import AppContainer from '../containers/AppContainer';
import UserPageContainer from '../containers/UserPageContainer';
import MovieIndex from './MovieIndex';
import MovieShowContainer from '../containers/MovieShowContainer';
import OtherUserPageContainer from '../containers/OtherUserPageContainer';


const Root = ({ store }) => (
  <div>
    <div className='main' style={{zIndex: '1006'}}>
      <Notifications/>
    </div>
    <Provider store={store}>
      <Router history={browserHistory} >
        <Redirect from="/" to="/movies" />
        <Route path="/" component={AppContainer} >
          <Route path="/user" component={UserPageContainer} />
          <Route path="/users/:id" component={OtherUserPageContainer} />
          <Route path="/movies" component={MovieIndex} />
          <Route path="/movies/:id" component={MovieShowContainer} />
        </Route>
      </Router>
    </Provider>
  </div>
);

export default Root;

// <Route path="/user" component={RecommendationPageContainer} />
// <Route path="/usersearch/:query" component={UserSearchPageContainer} />
