export const setUser = () => {
  return fetch(`/api/v1/users`, {
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
