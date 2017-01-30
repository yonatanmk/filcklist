import React from 'react';
import { Link } from 'react-router';
import IndexMovieBoxContainer from '../containers/IndexMovieBoxContainer';

const UserPage = ({user}) => {
  let wantMovies, seenMovies;
  if (user) {
    wantMovies = user.movies.filter((movie)=>{return movie.status === 'want';})
    .map((movie) => {
      return (
        <IndexMovieBoxContainer
          key={movie.id}
          movie={movie}
          movies={user.movies}
          page="user"
        />
      );
    });
    seenMovies = user.movies.filter((movie)=>{return movie.status !== 'want';})
    .map((movie) => {
      return (
        <IndexMovieBoxContainer
          key={movie.id}
          movie={movie}
          movies={user.movies}
          page="user"
        />
      );
    });
  }
  return (
    <div>
      <h1>Your Movies</h1>
      <div className='small-6 columns'>
        <h3>Plan to Watch</h3>
        {wantMovies}
      </div>
      <div className='small-6 columns'>
        <h3>Seen Movies</h3>
        {seenMovies}
      </div>
    </div>
  );
};

export default UserPage;
