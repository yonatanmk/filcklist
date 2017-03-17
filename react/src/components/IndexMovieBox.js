import React from 'react';
import * as api from '../api';
import { addUserMovie } from '../actions';

const IndexMovieBox = ({movie, movies, user, userMovies, page, loading, handleShowButtonClick, handleButtonClick, handleDeleteButtonClick}) => {

  let className = "small-12 medium-6 large-3 columns index-box";
  if (page === 'rec') {
    className = "index-box";
  }
  let innerClassName;

  if (movie == movies[movies.length-1]) {
    className += " end";
  }

  let userMovie = userMovies.find((userMovie)=>{return userMovie.id == movie.id;});
  if (userMovie && (page === 'user' || page == 'index' || page == 'rec')) {
    movie.status = userMovie.status;
  }
  else if (page !== 'other') {
    movie.status = undefined;
  }

  let boxHeader = (
    <div className='not-seen-header movie-box-header'>
      <p>Not Seen</p>
    </div>
  );

  if (movie.status) {
    switch (movie.status) {
      case 'seen':
        innerClassName += " gray";
        boxHeader = (
          <div className='seen-header movie-box-header'>
            <p>Watched</p>
          </div>
        );
        break;
      case 'want':
        innerClassName += " blue";
        boxHeader = (
          <div className='want-header movie-box-header'>
            <p>Want To See</p>
          </div>
        );
        break;
      case 'like':
        innerClassName += " green";
        boxHeader = (
          <div className='like-header movie-box-header'>
            <p>Liked</p>
          </div>
        );
        break;
      case 'dislike':
        innerClassName += " red";
        boxHeader = (
          <div className='dislike-header movie-box-header'>
            <p>Disliked</p>
          </div>
        );
        break;
      default:
        innerClassName += " gray";
        boxHeader = (
          <div className='seen-header movie-box-header'>
            <p>Seen</p>
          </div>
        );
        break;
    }
  } else {
    innerClassName += " white";
  }

  let image_url;
  if (loading === movie.id) {
    image_url = `https://media3.giphy.com/media/y1ZBcOGOOtlpC/200_s.gif`;
  } else if (movie.poster_path) {
    image_url = `https://image.tmdb.org/t/p/w185/${movie.poster_path}`;
  } else {
    image_url = `http://www.planetvlog.com/wp-content/themes/betube/assets/images/watchmovies.png`;
  }

  let onShowButtonClick = (event) => {
    handleShowButtonClick(movie);
  };

  let onWantButtonClick = (event) => {
    handleButtonClick(user, movie, 'want');
  };

  let onAddButtonClick = (event) => {
    handleButtonClick(user, movie, 'seen');
  };

  let onLikeButtonClick = (event) => {
    handleButtonClick(user, movie, 'like');
  };

  let onDislikeButtonClick = (event) => {
    handleButtonClick(user, movie, 'dislike');
  };

  let onDeleteButtonClick = () => {
    handleDeleteButtonClick(user, movie);
  };

  let deleteButton;
  if (userMovie) {
    deleteButton = <button className='deleteButton button-stretch' onClick={onDeleteButtonClick}>Remove Movie</button>;
  }

  let buttonPad;
  if (page === 'other') {
    buttonPad = <button className='showButton button-stretch' onClick={onShowButtonClick}>Show Movie</button>;
  } else {
    buttonPad = (
      <div>
        <button className='showButton button-stretch' onClick={onShowButtonClick}>
          Show Movie
        </button>
        <button className='wantButton button-quarter-stretch' onClick={onWantButtonClick} value='want'>
          <i className="fa fa-heart" aria-hidden="true" value='add'></i>
        </button>
        <button className='addButton button-quarter-stretch' onClick={onAddButtonClick} value='add'>
          <i className="fa fa-plus" aria-hidden="true" value='add'></i>
        </button>
        <button className='likeButton button-quarter-stretch' onClick={onLikeButtonClick} value='like'>
          <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
        </button>
        <button className="dislikeButton button-quarter-stretch" onClick={onDislikeButtonClick} value='dislike'>
          <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
        </button><br></br>
        {deleteButton}
      </div>
    );
  }

  return (
    <div key={movie.id} className={className}>
      <div className={`inner-movie-box ${innerClassName}`}>
        {boxHeader}
        <div className='title-image'>
          <h4>{movie.title}</h4>
          <div className='index-image'>
            <img src={image_url} />
          </div>
        </div>
        {buttonPad}
      </div>
    </div>
  );
};

export default IndexMovieBox;
