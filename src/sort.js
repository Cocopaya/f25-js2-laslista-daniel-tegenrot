const sortSelect = document.querySelector("#sortSelect");

export const sortBooks = (booksArray) => {
  const value = sortSelect.selectedIndex;
  const arr = [...booksArray];
  if (value === 0) {
    arr.sort((a, b) => a.title.localeCompare(b.title, "sv"));
  } else if (value === 1) {
    arr.sort((a, b) => b.title.localeCompare(a.title, "sv"));
  } else if (value === 2) {
    arr.sort((a, b) => a.author.localeCompare(b.author, "sv"));
  } else if (value === 3) {
    arr.sort((a, b) => b.author.localeCompare(a.author, "sv"));
  } else if (value === 5) {
    arr.reverse();
  }
  return arr;
};
