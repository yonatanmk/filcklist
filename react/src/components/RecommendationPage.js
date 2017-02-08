import React from 'react';

const RecommendationPage = ({userMovies, handleButtonClick}) => {
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
  return (
    <div className='content-box'>
      <button onClick={handleButtonClick}>GET RECOMMENDATION</button>
    </div>
  );
};

export default RecommendationPage;
