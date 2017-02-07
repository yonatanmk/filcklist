import React from 'react';

const RecommendationPage = ({userMovies}) => {

  if (userMovies && userMovies.length == 0) {
    return (
      <div className='darker-content-box not-found'>
        <h3>You Must Have Liked Movies On Your Profile Before You Can Receive Movie Recommendations</h3>
      </div>
    );
  }
  return (
    <div className='content-box'>
      <h3>You Can Receive Suggestions</h3>
    </div>
  );
};

export default RecommendationPage;
