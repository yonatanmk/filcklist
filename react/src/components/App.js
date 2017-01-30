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
            <h1><a href="/">MovieApp</a></h1>
          </li>
        </ul>
        <ul className="right">
          <li><Link to={`/user`}>Your Movies</Link ></li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default App;
