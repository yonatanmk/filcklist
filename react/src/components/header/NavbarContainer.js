import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Navbar from './Navbar';

const mapStateToProps = (state) => {
  let profileURL;
  // set profile url
  if (state.user && state.user.info.profile_photo.url) {
    profileURL = state.user.info.profile_photo.thumb.url;
  } else {
    profileURL = `http://www.planetvlog.com/wp-content/themes/betube/assets/images/watchmovies.png`;
  }
  // set userList for user search
  let userList;
  if (state.userQuery) {
    userList = state.users.filter((otherUser)=>{
      return otherUser.username.toLowerCase().search(state.userQuery.toLowerCase()) > -1 && otherUser.id !== state.user.info.id;
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

  return { profileURL, userList };
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;
