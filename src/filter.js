const filterFavorites = document.querySelector("#filterFavorites");

const checkFavorite = (book) => {
  return book.favorite === true;
};

export const filterBooks = (arr) => {
  if (filterFavorites.checked) {
    return arr.filter(checkFavorite);
  } else return arr;
};
