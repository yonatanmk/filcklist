import React from 'react';
import MovieShowContainer from '../containers/MovieShowContainer';
import IndexMovieBoxContainer from '../containers/IndexMovieBoxContainer';

const RecommendationPage = ({userMovies, rec, handleButtonClick}) => {
  if (!userMovies) {
    return <div></div>;
  }
  //
  // userMovies = userMovies.filter((movie)=>{
  //   return movie.status == 'like';
  // });
  //
  // if (userMovies.length < 5) {
  //   return (
  //     <div className='darker-content-box not-found'>
  //       <h3>You Must Have At Least 5 Liked Movies On Your Profile Before You Can Receive Movie Recommendations</h3>
  //     </div>
  //   );
  // }
  let show;
  if (rec) {
    if (rec == 'not found') {
      show = (
        <div className='user-header-label rec-error raleway'>
          <h3 className='raleway'>We're Sorry. We Could Not Find A Movie At This Time</h3>
        </div>);
    } else {
      show = <IndexMovieBoxContainer
        movie={rec}
        movies={[rec]}
        page='rec'
      />;
    }
  }

  return (
    <div>
      <div className='content-box raleway'>
        <div className='user-header-label rec-label raleway'>
          <h1 className='raleway'>Get Movie Recommendation</h1>
        </div>
        <div className='small-3 small-centered columns'>
          <button className='raleway rec-button' onClick={handleButtonClick}>GET RECOMMENDATION</button>
        </div>
      </div>
      <div className='row'>
        <div className='small-12 medium-12 large-6 small-centered medium-centered large-centered columns'>
          {show}
        </div>
      </div>
    </div>
  );
};

export default RecommendationPage;
