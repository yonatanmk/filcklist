import React, { Component } from 'react';
import { Link } from 'react-router';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.setDropdownHover = this.setDropdownHover.bind(this);
    this.setDropdownClick = this.setDropdownClick.bind(this);
  }

  setDropdownHover () {
    if (window.innerWidth > 800) {
      this.props.setDropdown(this.props.id);
    }
  }

  setDropdownClick () {
    if (window.innerWidth <= 800) {
      this.props.setDropdown(this.props.id);
    }
  }

  render () {
    let items;
    let counter = 0;
    if (this.props.id == this.props.openDropdown) {
      items = this.props.items.map((item)=>{
        counter ++;
        let link;
        if (item.link == '/users/sign_out') {
          link = <a href="/users/sign_out" data-method="delete" data-close="user-search" >Sign Out</a>;
        }
        else if (item.type == 'href') {
          link = <a href={item.link}>{item.text}</a>;
        } else if (item.type == 'router') {
          link = <Link to={item.link}>{item.text}</Link >;
        }

        return (
          <li key={counter}>
            {link}
          </li>
        );
      });
    }

    return (
      <div onMouseLeave={()=>this.props.setDropdown(null)}>
        <a href="#!" onMouseEnter={this.setDropdownHover} onClick={this.setDropdownClick}>
          {this.props.label + ' ▾'}
        </a>
        <ul className="nav-dropdown">
          {items}
        </ul>
      </div>
    );
  }
}

export default Dropdown;
