const updateMovieObjectList = (movie, movieListObj, setMovieListObj) => {
  const updatedMovieList = [...movieListObj.list, movie];
  updateMovieListObj({ list: updatedMovieList }, setMovieListObj);
};

const updateMovieListObj = (newData, setMovieListObj) => {
  setMovieListObj((prev) => ({
    ...prev,
    ...newData,
  }));
};

export { updateMovieObjectList, updateMovieListObj };
