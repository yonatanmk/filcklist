import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { setSelectedMovie } from '../actions';
import * as api from '../api';

class MovieShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(setSelectedMovie(this.props.params.id));
  }

  render() {
    let userMovie;
    let backId = "white-back";
    if (this.props.selectedMovie) {
      userMovie = this.props.userMovies.find((userMovie)=>{return userMovie.id == this.props.selectedMovie.id;});
    }
    if (userMovie && this.props.selectedMovie) {
      this.props.selectedMovie.status = userMovie.status;
    }
    let className = 'show-page';
    let boxHeader = (
      <div className='not-seen-header movie-box-header'>
        <p>Not Seen</p>
      </div>
    );

    if (this.props.selectedMovie && this.props.selectedMovie.status) {
      switch (this.props.selectedMovie.status) {
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
    } else {
      className += " white";
      backId = "black-back";
    }

    if (this.props.selectedMovie){
      let movie = this.props.selectedMovie;
      return(
        <div className={className}>
          {boxHeader}
          <h1>{movie.title}</h1>
          <div className='row'>
            <div className='small-6 columns movie-show-text'>
              <h5>Release Date: {movie.release_date}</h5>
              <p className='overview'>{movie.overview}</p>
            </div>
            <div className='small-6 columns'>
              <img src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
            </div>
          </div>
          <div className='back-button-box white-text'>
            <a id={backId} className='back-button' onClick={browserHistory.goBack}>Back</a>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default MovieShow;
