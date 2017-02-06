import React from 'react';
import { Link } from 'react-router';
import IndexMovieBoxContainer from '../containers/IndexMovieBoxContainer';
import { setSelectedUser } from '../actions';

const OtherUserPage = ({dispatch, handleProfileButtonClick, params, selectedUser, profileStatus, user}) => {
  let handleClick = (event) => {
    handleProfileButtonClick(event.target.value);
  };

  let username, movies;
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

  return (
    <div>
      <div className='content-box user-header'>
        <h1>{username}{"\'"}s Movies</h1>
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
