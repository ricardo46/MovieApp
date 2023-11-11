const getUpdatedMovieListsIds = (movieLists, newListId) => {
  return [...movieListsIds(movieLists), { movielist_id: newListId }];
};

const movieListsIds = (movieLists) =>
  movieLists.map((list) => ({ movielist_id: list.movielist_id }));

const getNewListObject = (id, listName) => {
  return {
    movielist_id: id,
    id: id,
    name: listName,
    list: [],
  };
};

const listIsEmpty = (list) => {
  return list.length == 0;
};

export { getUpdatedMovieListsIds, getNewListObject, listIsEmpty };
