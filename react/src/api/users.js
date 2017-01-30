export const setUser = () => {
  return fetch(`/movies.json`, {
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' }
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
