import React from 'react';
import { Link } from 'react-router';
import { setUser } from '../actions';


const App = ({user, children, dispatch}) => {
  if (!user) {
    dispatch(setUser());
  }
  return (
    <div>
      <nav className="top-bar" data-topbar role="navigation">
        <ul className="title-area small-3 columns" >
          <li className="name">
            <h1><a href="/">FlickList</a></h1>
          </li>
        </ul>
        <ul className="right">
          <li><Link to={`/user`}>Your Movies</Link ></li>
          <li><a href="/users/edit">Account Settings</a></li>
          <li><a href="/users/sign_out" data-method="delete" >Sign Out</a></li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default App;
