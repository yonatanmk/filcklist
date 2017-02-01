import React, { Component } from 'react';
import { Link } from 'react-router';
import { setUser, setUsers, setUserQueryAction } from '../actions';

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
    let userList = this.props.users.filter((otherUser)=>{
      return otherUser.username.search(this.props.userQuery) > -1 && otherUser.id !== this.props.user.info.id;
    }, this)
    .map((user)=>{
      return (
        <div key={user.id}>
          <Link to={`/users/${user.id}`} data-close="exampleModal1"><p>{user.username}</p></Link >
        </div>
      );
    });
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
              <li><a data-open="exampleModal1">Search Users</a></li>
              <li><Link to={`/user`}>Your Movies</Link ></li>
              <li><a href="/users/edit">Account Settings</a></li>
              <li><a href="/users/sign_out" data-method="delete" >Sign Out</a></li>
            </ul>
          </div>
        </div>
        <div className="reveal " id="exampleModal1" data-reveal>
          <button className="close-button" data-close="exampleModal1">
            <span aria-hidden="true">&times;</span>
          </button>
          <input className='user-search-bar'type="search" placeholder="Search" onChange={this.handleUserSearchChange}/>
          {userList}
        </div>
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
