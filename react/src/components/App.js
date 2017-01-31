import React from 'react';
import { Link } from 'react-router';
import { setUser } from '../actions';


const App = ({user, children, dispatch}) => {
  if (!user) {
    dispatch(setUser());
  }
  return (
    <div>
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text"><h1><a href="/">FlickList</a></h1></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><input type="search" placeholder="Search"/></li>
            <li><button type="button" className="button">Search</button></li>
            <li><Link to={`/user`}>Your Movies</Link ></li>
            <li><a href="/users/edit">Account Settings</a></li>
            <li><a href="/users/sign_out" data-method="delete" >Sign Out</a></li>
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
};

export default App;

// <nav className="top-bar" data-topbar role="navigation">
//   <ul className="title-area small-3 columns" >
//     <li className="name">
//       <h1><a href="/">FlickList</a></h1>
//     </li>
//   </ul>
//   <ul className="right">
//     <li><Link to={`/user`}>Your Movies</Link ></li>
//     <li><a href="/users/edit">Account Settings</a></li>
//     <li><a href="/users/sign_out" data-method="delete" >Sign Out</a></li>
//   </ul>
// </nav>

// <div className="top-bar">
//   <div className="top-bar-left">
//     <ul className="dropdown menu" data-dropdown-menu>
//       <li className="menu-text"><h1><a href="/">FlickList</a></h1></li>
//       <li>
//         <a href="#">One</a>
//         <ul className="menu vertical">
//           <li><a href="#">One</a></li>
//           <li><a href="#">Two</a></li>
//           <li><a href="#">Three</a></li>
//         </ul>
//       </li>
//       <li><a href="#">Two</a></li>
//       <li><a href="#">Three</a></li>
//     </ul>
//   </div>
//   <div className="top-bar-right">
//     <ul className="menu">
//       <li><input type="search" placeholder="Search"/></li>
//       <li><button type="button" className="button">Search</button></li>
//     </ul>
//   </div>
// </div>
