const movieExistsInList = (movie, list) => {
  return list.reduce((res, mov) => {
    if (mov.id == movie.id) res = true;
    return res;
  }, false);
};

export { movieExistsInList };
