import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Dropdown from './Dropdown';

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

  render () {

    let accountDropdown = [
      { text: 'Your Movies', link: '/user', type: 'router' },
      { text: 'Movie Recommendations', link: '/recommendation', type: 'router'  },
      { text: 'Settings', link: '/users/edit', type: 'href' },
      { text: 'Sign Out', link: '/users/sign_out', type: 'href' },
    ];

    let profilePhoto;
    if (window.innerWidth > 800) {
      profilePhoto = <img className='profile-photo hover-hand' onClick={this.handleProfileClick} src={this.props.profileURL} />;
    }

    return (
      <nav>
        <div className="nav-mobile">
          <a className={this.state.mobileIcon} onClick={this.setMobileIcon} id="nav-toggle" href="#!">
            <span></span>
          </a>
        </div>
        <ul className={`nav-list ${this.state.mobileDisplay}`}>
          <li>
            <a href="#!">Users</a>
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
    );
  }

}

export default Navbar;
