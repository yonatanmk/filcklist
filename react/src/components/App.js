import React, { Component } from 'react';
import { Link } from 'react-router';
import { setUser, setUsers, setUserQueryAction } from '../actions';
import {notify} from 'react-notify-toast';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleUserSearchChange = this.handleUserSearchChange.bind(this);
  }

  componentDidMount() {
    // notify.show('You have signed in', 'success', 2000);
    if (!this.props.user) {
      this.props.dispatch(setUser());
    }
    if (this.props.users.length == 0) {
      this.props.dispatch(setUsers());
    }
  }

  handleUserSearchChange (event) {
    let body = event.target.value;
    if (body === "") {body = null;}
    this.props.dispatch(setUserQueryAction(body));
  }

  handleSearchButtonClick () {
    // notify.show('You have signed in', 'success', 20000);
  }

  render() {
    let userList;
    if (this.props.userQuery) {
      userList = this.props.users.filter((otherUser)=>{
        return otherUser.username.toLowerCase().search(this.props.userQuery.toLowerCase()) > -1 && otherUser.id !== this.props.user.info.id;
      }, this)
      .map((user)=>{
        return (
          <div key={user.id}>
            <Link to={`/users/${user.id}`} data-close="exampleModal1"><p>{user.username}</p></Link >
          </div>
        );
      });
    }

    return (
      <div>
        <div className="top-bar small-12 columns">
          <div className="top-bar-left">
            <ul className="menu" >
              <li className="menu-text"><h1><a href="/">fLICKlIST</a></h1></li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="dropdown menu" data-dropdown-menu>
              <li><a data-open="exampleModal1" onClick={this.handleSearchButtonClick}>Users</a></li>
              <li>
                <a href="#" className='account-menu-button'>Account</a>
                <ul className="menu vertical account-dropdown">
                  <li><Link to={`/user`}>Your Movies</Link ></li>
                  <li><a href="/users/edit">Settings</a></li>
                  <li><a href="/users/sign_out" data-method="delete" >Sign Out</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="reveal" id="exampleModal1" data-reveal>
          <button className="close-button" data-close="exampleModal1">
            <span aria-hidden="true">&times;</span>
          </button>
          <input className='user-search-bar'type="search" placeholder="Search" onChange={this.handleUserSearchChange}/>
          {userList}
        </div>
        <div className='top-bar-spacer'></div>
        {this.props.children}
      </div>
    );
  }
}


// const App = ({user, users, children, dispatch}) => {
//
//
//   let checkCurrentUser = (otherUser) => {
//     return otherUser.id === user.id;
//   };
//
//   let userList = users.map((otherUser)=>{
//     return (
//       <div key={otherUser.id}>
//         <p>{otherUser.username}</p>
//       </div>
//     );
//   });
//
//
//
//
// };

export default App;
