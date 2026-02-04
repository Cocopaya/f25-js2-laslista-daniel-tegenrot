export const renderBook = (book, bookList) => {
  const liEl = document.createElement("li");
  const buttonsDiv = document.createElement("div");
  const favoriteButton = document.createElement("button");
  const removeButton = document.createElement("button");
  favoriteButton.innerText = "⭐";
  removeButton.innerText = "🗑️";
  favoriteButton.classList.toggle("favorite", book.favorite);
  buttonsDiv.classList.add("buttons-container");
  liEl.innerHTML = `<div>
      <p>Titel: <span>${book.title}</span></p>
      <p>Författare: <span>${book.author}</span></p>
      <div>
    `;
  buttonsDiv.appendChild(favoriteButton);
  buttonsDiv.appendChild(removeButton);
  liEl.appendChild(buttonsDiv);
  bookList.appendChild(liEl);

  favoriteButton.addEventListener("click", () => {
    book.markAsFavorite();
    favoriteButton.classList.toggle("favorite", book.favorite);
  });
  removeButton.addEventListener("click", () => {
    book.remove();
  });
};
