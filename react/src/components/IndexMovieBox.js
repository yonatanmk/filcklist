import React from 'react';
import { Link } from 'react-router';
import * as api from '../api';
import { addUserMovie } from '../actions';

const IndexMovieBox = ({movie, movies, user, userMovies, page, handleButtonClick}) => {
  let className;
  if (page === "index") {
    className = "small-6 medium-4 large-2 columns index-box";
  }
  else if (page === "user") {
    className = "small-12 medium-8 large-4 columns index-box";
  }
  if (movie == movies[movies.length-1]) {
    className += " end";
  }
  let userMovie = userMovies.find((userMovie)=>{return userMovie.id == movie.id;});
  if (userMovie) {
    movie.status = userMovie.status;
  }
  let boxHeader = (
    <div className='not-seen-header movie-box-header'>
      <p>Not Seen</p>
    </div>
  );
  if (movie.status) {
    switch (movie.status) {
      case 'seen':
        className += " gray";
        boxHeader = (
          <div className='seen-header movie-box-header'>
            <p>Watched</p>
          </div>
        );
        break;
      case 'want':
        className += " blue";
        boxHeader = (
          <div className='want-header movie-box-header'>
            <p>Want To See</p>
          </div>
        );
        break;
      case 'like':
        className += " green";
        boxHeader = (
          <div className='like-header movie-box-header'>
            <p>Liked</p>
          </div>
        );
        break;
      case 'dislike':
        className += " red";
        boxHeader = (
          <div className='dislike-header movie-box-header'>
            <p>Disliked</p>
          </div>
        );
        break;
      default:
        className += " gray";
        boxHeader = (
          <div className='seen-header movie-box-header'>
            <p>Seen</p>
          </div>
        );
        break;
    }
  }



  let image_url;
  if (movie.poster_path) {
    image_url = `http://image.tmdb.org/t/p/w185/${movie.poster_path}`;
  } else {
    image_url = `http://www.planetvlog.com/wp-content/themes/betube/assets/images/watchmovies.png`;
  }

  let onButtonClick = (event) => {
    handleButtonClick(user, movie, event.target.value);
  };

  return (
    <div key={movie.id} className={className}>
      {boxHeader}
      <p>{movie.title}</p>
      <Link to={`/movies/${movie.id}`}><button>Show Movie</button></Link>
      <button onClick={onButtonClick} value='want'>Want to See</button>
      <button onClick={onButtonClick} value='add'>Already Seen</button>
      <button onClick={onButtonClick} value='like'>Like This Movie</button>
      <button onClick={onButtonClick} value='dislike'>Dislike This Movie</button>
      <div className='index-image'>
        <img src={image_url} />
      </div>
    </div>
  );
};

export default IndexMovieBox;
