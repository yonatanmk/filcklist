import React from 'react';
import { Link } from 'react-router';
import IndexMovieBoxContainer from '../containers/IndexMovieBoxContainer';
import { setSelectedUser } from '../actions';

const OtherUserPage = ({dispatch, params, selectedUser, user}) => {
  let wantMovies, seenMovies, username;
  if (selectedUser === null || parseInt(params.id) !== selectedUser.info.id) {
    dispatch(setSelectedUser(params.id));
  }
  if (selectedUser && user) {
    wantMovies = selectedUser.movies.filter((movie)=>{return movie.status === 'want';})
    .map((movie) => {
      return (
        <IndexMovieBoxContainer
          key={movie.id}
          movie={movie}
          movies={selectedUser.movies}
          page="other"
        />
      );
    });
    seenMovies = selectedUser.movies.filter((movie)=>{return movie.status !== 'want';})
    .map((movie) => {
      return (
        <IndexMovieBoxContainer
          key={movie.id}
          movie={movie}
          movies={selectedUser.movies}
          page="other"
        />
      );
    });
  username = selectedUser.info.username;
  }

  return (
    <div>
      <h1>{username}{"\'"}s Movies</h1>
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

export default OtherUserPage;
