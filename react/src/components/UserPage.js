import React from 'react';
import { Link } from 'react-router';
import IndexMovieBoxContainer from '../containers/IndexMovieBoxContainer';

const UserPage = ({user, profileStatus, handleProfileButtonClick}) => {
  let handleClick = (event) => {
    handleProfileButtonClick(event.target.value);
  };

  let movies;
  if (user) {
    if (profileStatus === 'seen') {
      let seenMovies = user.movies.filter((movie)=>{return movie.status === 'seen';});
      let likedMovies = user.movies.filter((movie)=>{return movie.status === 'like';});
      let dislikedMovies = user.movies.filter((movie)=>{return movie.status === 'dislike';});
      movies = seenMovies.concat(likedMovies).concat(dislikedMovies);
    }
    else {
      movies = user.movies.filter((movie)=>{return movie.status === profileStatus;});
    }
    movies = movies.map((movie) => {
      return (
        <IndexMovieBoxContainer
          key={movie.id}
          movie={movie}
          movies={movies}
          page="user"
        />
      );
    });
  }


  return (
    <div>
      <div className='content-box user-header'>
        <h1>Your Movies</h1>
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

export default UserPage;
