import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { setUser, setUsers, setUserQueryAction } from '../actions';
import {notify} from 'react-notify-toast';
import Header from './header/Header';

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

  handleProfileClick () {
    browserHistory.push(`/user`);
  }

  render() {
    let userList, profileURL;
    if (this.props.userQuery) {
      userList = this.props.users.filter((otherUser)=>{
        return otherUser.username.toLowerCase().search(this.props.userQuery.toLowerCase()) > -1 && otherUser.id !== this.props.user.info.id;
      }, this);
      userList = userList.map((user)=>{
        let otherProfileURL;
        let className = 'small-3 columns user-box';
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
            <div>
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
        <Header />
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
