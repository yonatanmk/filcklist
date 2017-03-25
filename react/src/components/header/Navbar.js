import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Dropdown from './Dropdown';
import { setUserQueryAction } from '../../actions';

class Navbar extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      openDropdown: null,
      mobileIcon: null,
      mobileDisplay: 'inactive'
    };

    this.setDropdown = this.setDropdown.bind(this);
    this.setMobileIcon = this.setMobileIcon.bind(this);
    this.handleUserSearchChange = this.handleUserSearchChange.bind(this);
  }

  setDropdown (target) {
    if (this.state.currentDropdown == target) {
      this.setState({ currentDropdown: null });
    } else {
      this.setState({ currentDropdown: target });
    }
  }

  setMobileIcon () {
    if (this.state.mobileIcon) {
      this.setState({ mobileIcon: null, mobileDisplay: 'inactive' });
    } else {
      this.setState({ mobileIcon: 'active', mobileDisplay: null });
    }
  }

  handleProfileClick () {
    browserHistory.push(`/user`);
  }

  handleUserSearchChange (event) {
    let body = event.target.value;
    if (body === "") {body = null;}
    this.props.dispatch(setUserQueryAction(body));
  }

  render () {

    let accountDropdown = [
      { text: 'Your Movies', link: '/user', type: 'router' },
      { text: 'Movie Recommendations', link: '/recommendation', type: 'router'  },
      { text: 'Settings', link: '/users/edit', type: 'href' },
      { text: 'Sign Out', link: '/users/sign_out', type: 'href' },
    ];

    let profilePhoto;
    if (window.innerWidth > 800) {
      profilePhoto = <img className='profile-photo hover-hand pad-left' onClick={this.handleProfileClick} src={this.props.profileURL} />;
    }

    return (
      <div>
        <nav>
          <div className="nav-mobile">
            <a className={this.state.mobileIcon} onClick={this.setMobileIcon} id="nav-toggle" href="#!">
              <span></span>
            </a>
          </div>
          <ul className={`nav-list ${this.state.mobileDisplay}`}>
            <li>
              <a data-open="user-search">Users</a>
            </li>
            <li>
              <Dropdown
                id = { 1 }
                label = 'Account'
                items = { accountDropdown }
                setDropdown = { this.setDropdown }
                openDropdown = { this.state.currentDropdown }
              />
            </li>
            <li>
              {profilePhoto}
            </li>
          </ul>
        </nav>
        <div className="reveal user-search-box" id="user-search" data-reveal>
          <button className="close-button" data-close="user-search">
            <span aria-hidden="true">&times;</span>
          </button>
          <h2>Search Users</h2>
          <input className='user-search-bar'type="search" placeholder="Search" onChange={this.handleUserSearchChange}/>
          <div className='user-list'>
            {this.props.userList}
          </div>
        </div>
      </div>

    );
  }

}

export default Navbar;
