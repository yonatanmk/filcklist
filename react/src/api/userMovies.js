export const addUserMovie = (user_id, movie_id, status) => {
  let data = {
    user_movie: {
      user_id,
      movie_id,
      status
    }
  };
  let body = JSON.stringify(data);
  return fetch(`/api/v1/user_movies`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body
  })
    .then(response => {
      if (response.ok) {
        return response;
      }
      else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json());
};

export const deleteUserMovie = (user_id, movie_id) => {
  let data = {
    user_movie: {
      user_id,
      movie_id
    }
  };
  let body = JSON.stringify(data);
  return fetch(`/api/v1/user_movies/1`, {
    method: "DELETE",
    headers: { 'Content-Type': 'application/json' },
    body
  })
    .then(response => {
      if (response.ok) {
        return response;
      }
      else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json());
};
