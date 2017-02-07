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

  render() {
    let userList, profileURL;
    if (this.props.userQuery) {
      userList = this.props.users.filter((otherUser)=>{
        return otherUser.username.toLowerCase().search(this.props.userQuery.toLowerCase()) > -1 && otherUser.id !== this.props.user.info.id;
      }, this);
      userList = userList.map((user)=>{
        let otherProfileURL;
        let className = 'small-4 columns user-box';
        if (user == userList[userList.length-1]) {
          className += ' end';
        }
        if (user.profile_photo.url) {
          otherProfileURL = user.profile_photo.thumb.url;
        } else {
          otherProfileURL = `http://www.planetvlog.com/wp-content/themes/betube/assets/images/watchmovies.png`;
        }
        return (
          <div key={user.id} className={className}>
            <div className='center'>
              <Link to={`/users/${user.id}`} data-close="user-search">
                <div>
                  <img className='profile-photo center' src={otherProfileURL} />
                  <p>{user.username}</p>
                </div>
              </Link >
            </div>
          </div>
        );
      });
    }

    if (this.props.user && this.props.user.info.profile_photo.url) {
      profileURL = this.props.user.info.profile_photo.thumb.url;
    } else {
      profileURL = `http://www.planetvlog.com/wp-content/themes/betube/assets/images/watchmovies.png`;
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
              <li><a data-open="user-search" onClick={this.handleSearchButtonClick}>Users</a></li>
              <li>
                <a href="#" className='account-menu-button'>Account</a>
                <ul className="menu vertical account-dropdown">
                  <li><Link to={`/user`}>Your Movies</Link ></li>
                  <li><a href="/users/edit">Settings</a></li>
                  <li><a href="/users/sign_out" data-method="delete" >Sign Out</a></li>
                </ul>
              </li>
              <li><img className='profile-photo' src={profileURL} /></li>
            </ul>
          </div>
        </div>
        <div className="reveal" id="user-search" data-reveal>
          <button className="close-button" data-close="user-search">
            <span aria-hidden="true">&times;</span>
          </button>
          <input className='user-search-bar'type="search" placeholder="Search" onChange={this.handleUserSearchChange}/>
          <div className='user-list'>
            {userList}
          </div>
        </div>
        <div className='top-bar-spacer'></div>
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default App;
