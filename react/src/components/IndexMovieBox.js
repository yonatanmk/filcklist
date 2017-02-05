import React from 'react';
import { Link } from 'react-router';
import * as api from '../api';
import { addUserMovie } from '../actions';

const IndexMovieBox = ({movie, movies, user, userMovies, page, handleButtonClick, handleDeleteButtonClick}) => {
  let className, innerClassName;
  let wantMovies = [];
  let notWantMovies = [];
  if (page === "index") {
    className = "small-12 medium-6 large-3 columns index-box";
  }
  else if (page === "user" || page === "other") {
    className = "small-12 medium-12 large-6 columns index-box";
  }
  if (page == 'user') {
    wantMovies = userMovies.filter((movie)=>{return movie.status === 'want';});
    notWantMovies = userMovies.filter((movie)=>{return movie.status !== 'want';});
  }
  else if (page == 'other') {
    wantMovies = movies.filter((movie)=>{return movie.status === 'want';});
    notWantMovies = movies.filter((movie)=>{return movie.status !== 'want';});
  }
  if (
    movie == movies[movies.length-1] ||
    movie == wantMovies[wantMovies.length-1] ||
    movie == notWantMovies[notWantMovies.length-1]
  ) {
    className += " end";
  }
  let userMovie = userMovies.find((userMovie)=>{return userMovie.id == movie.id;});
  if (userMovie && (page === 'user' || page == 'index')) {
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
  if (movie.poster_path) {
    image_url = `http://image.tmdb.org/t/p/w185/${movie.poster_path}`;
  } else {
    image_url = `http://www.planetvlog.com/wp-content/themes/betube/assets/images/watchmovies.png`;
  }

  let onWantButtonClick = (event) => {
    handleButtonClick(user, movie, 'want');
  };

  let onAddButtonClick = (event) => {
    handleButtonClick(user, movie, 'add');
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
    buttonPad = <Link to={`/movies/${movie.id}`}><button className='showButton button-stretch'>Show Movie</button></Link>;
  } else {
    buttonPad = (
      <div>
        <Link to={`/movies/${movie.id}`}><button className='showButton button-stretch'>Show Movie</button></Link>
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
