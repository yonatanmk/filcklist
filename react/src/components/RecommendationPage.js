import React from 'react';

const RecommendationPage = ({userMovies}) => {

  if (!userMovies) {
    return <div></div>;
  }
  else if (userMovies.length < 5) {
    return (
      <div className='darker-content-box not-found'>
        <h3>You Must Have At Least 5 Liked Movies On Your Profile Before You Can Receive Movie Recommendations</h3>
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
