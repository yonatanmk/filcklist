import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { setSelectedMovie } from '../actions';
import * as api from '../api';

import IndexMovieBoxContainer from '../containers/IndexMovieBoxContainer';

class MovieShow extends Component {
  constructor(props) {
    super(props);

    this.onWantButtonClick = this.onWantButtonClick.bind(this);
    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.onLikeButtonClick = this.onLikeButtonClick.bind(this);
    this.onDislikeButtonClick = this.onDislikeButtonClick.bind(this);
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(setSelectedMovie(this.props.params.id));
  }

  onWantButtonClick (event) {
    this.props.handleButtonClick(this.props.user, this.props.selectedMovie, 'want');
  }

  onAddButtonClick (event) {
    this.props.handleButtonClick(this.props.user, this.props.selectedMovie, 'seen');
  }

  onLikeButtonClick (event) {
    this.props.handleButtonClick(this.props.user, this.props.selectedMovie, 'like');
  }

  onDislikeButtonClick (event) {
    this.props.handleButtonClick(this.props.user, this.props.selectedMovie, 'dislike');
  }

  onDeleteButtonClick () {
    this.props.handleDeleteButtonClick(this.props.user, this.props.selectedMovie);
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
    else if (this.props.selectedMovie) {
      this.props.selectedMovie.status = null;
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
          className += " white";
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
      let image, cast, directors, castBox, directorBox;
      if (movie.poster_path) {
        image = <img className='show-page-img'src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />;
      }
      cast = this.props.selectedMovie.actors.map((actor)=>{
        let character = this.props.selectedMovie.movie_actors.find((movieActor)=>{return movieActor.actor_id === actor.id;}).character;
        let profileUrl;
        if (actor.profile_path) {
          profileUrl = `https://image.tmdb.org/t/p/w45/${actor.profile_path}`;
        } else {
          profileUrl = `http://www.planetvlog.com/wp-content/themes/betube/assets/images/watchmovies.png`;
        }

        return (
          <div key={actor.id} className='row cast-list-item'>
            <div className='small-2 columns'>
              <img className='actor-profile' src={profileUrl} />
            </div>
            <div className='small-10 columns'>
              <p><b>{actor.name}</b></p>
              <p>as {character}</p>
            </div>
          </div>
        );
      }, this);
      directors = this.props.selectedMovie.directors.map((director)=>{
        let profileUrl;
        if (director.profile_path) {
          profileUrl = `https://image.tmdb.org/t/p/w45/${director.profile_path}`;
        } else {
          profileUrl = `http://www.planetvlog.com/wp-content/themes/betube/assets/images/watchmovies.png`;
        }
        return (
          <div key={director.id} className='row cast-list-item'>
            <div className='small-2 columns'>
              <img className='actor-profile' src={profileUrl} />
            </div>
            <div className='small-10 columns'>
              <p><b>{director.name}</b></p>
            </div>
          </div>
        );
      }, this);

      if (cast.length > 0) {
        castBox = (
          <div className='staff-box'>
            <h4 className='show-label'>Cast</h4>
            {cast}
          </div>
        );
      }
      if (directors.length > 0) {
        directorBox = (
          <div className='staff-box'>
            <h4 className='show-label'>Director{directors.length > 1 ? 's' : ''}</h4>
            {directors}
          </div>
        );
      }

      let deleteButton;
      if (userMovie) {
        deleteButton = <button className='deleteButton button-stretch' onClick={this.onDeleteButtonClick}>Remove Movie</button>;
      }

      let buttonPad = (
        <div className='button-pad' >
          <button className='wantButton button-quarter-stretch' onClick={this.onWantButtonClick} value='want'>
            <i className="fa fa-heart" aria-hidden="true" value='add'></i>
          </button>
          <button className='addButton button-quarter-stretch' onClick={this.onAddButtonClick} value='add'>
            <i className="fa fa-plus" aria-hidden="true" value='add'></i>
          </button>
          <button className='likeButton button-quarter-stretch' onClick={this.onLikeButtonClick} value='like'>
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
          </button>
          <button className="dislikeButton button-quarter-stretch" onClick={this.onDislikeButtonClick} value='dislike'>
            <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
          </button><br></br>
          {deleteButton}
        </div>
      );

      let recs;
      if (movie) {
        debugger;
        recs = movie.recs.map((rec) => {
          return (
            <IndexMovieBoxContainer
              key={rec.id}
              movie={rec}
              movies={this.props.movies}
              page="index"
            />
          );
        });
      }

      return(
        <div className={className}>
          {boxHeader}
          <h1>{movie.title}</h1>
          <div className='row show-content'>
            <div className='small-6 columns movie-show-text'>
              <h4>Release Date: {movie.release_date}</h4>
              <p className='overview'>{movie.overview}</p>
              {directorBox}
              {castBox}
            </div>
            <div className='small-6 columns'>
              {image}
              {buttonPad}
            </div>
          </div>
          <div>
            <div className='index-list'>
              {recs}
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
