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
    show = <IndexMovieBoxContainer
      movie={rec}
      movies={[rec]}
      page='rec'
    />;
  }

  return (
    <div>
      <div className='content-box'>
        <button onClick={handleButtonClick}>GET RECOMMENDATION</button>
      </div>
      <div>
        {show}
      </div>
    </div>
  );
};

export default RecommendationPage;
