import React from 'react';
import { Link } from 'react-router';
import IndexMovieBoxContainer from '../containers/IndexMovieBoxContainer';
import { setSelectedUser } from '../actions';

const OtherUserPage = ({dispatch, handleProfileButtonClick, params, selectedUser, profileStatus, user}) => {
  let handleClick = (event) => {
    handleProfileButtonClick(event.target.value);
  };

  let username, movies, profileURL;
  debugger;
  if (selectedUser === null || parseInt(params.id) !== selectedUser.info.id) {
    dispatch(setSelectedUser(params.id));
  }
  if (selectedUser && user) {
    username = selectedUser.info.username;
    username = username.charAt(0).toUpperCase() + username.slice(1);
    if (profileStatus === 'seen') {
      let seenMovies = selectedUser.movies.filter((movie)=>{return movie.status === 'seen';});
      let likedMovies = selectedUser.movies.filter((movie)=>{return movie.status === 'like';});
      let dislikedMovies = selectedUser.movies.filter((movie)=>{return movie.status === 'dislike';});
      movies = seenMovies.concat(likedMovies).concat(dislikedMovies);
    }
    else {
      movies = selectedUser.movies.filter((movie)=>{return movie.status === profileStatus;});
    }
    movies = movies.map((movie) => {
      return (
        <IndexMovieBoxContainer
          key={movie.id}
          movie={movie}
          movies={movies}
          page="other"
        />
      );
    });
  }

  if (selectedUser && selectedUser.info.profile_photo.profile.url) {
    profileURL = selectedUser.info.profile_photo.profile.url;
  } else {
    profileURL = `http://www.planetvlog.com/wp-content/themes/betube/assets/images/watchmovies.png`;
  }

  return (
    <div>
      <div className='content-box user-header'>
        <div className='user-header-label'>
          <img className='profile-page-image inline' src={profileURL} />
          <h1 className='inline'>{username}{"\'"}s Movies</h1>
        </div>
        <button className='user-button' onClick={handleClick} value='want'>
          Plan to Watch
        </button>
        <button className='user-button' onClick={handleClick} value='like'>
          Liked Movies
        </button>
        <button className='user-button' onClick={handleClick} value='dislike'>
          Disliked Movies
        </button>
        <button className='user-button' onClick={handleClick} value='seen'>
          All Seen Movies
        </button>
      </div>
      <div className='small-12 columns'>
        {movies}
      </div>
    </div>
  );
};

export default OtherUserPage;
