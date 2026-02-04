import "./style.css";
import { db } from "./firebase.js";
import { ref, push, set, onValue } from "firebase/database";
import { Book } from "./Book.js";
import { renderBook } from "./renderBook.js";
import { filterBooks } from "./filter.js";
import { sortBooks } from "./sort.js";

const booksRef = ref(db, "main/books");
const bookList = document.querySelector("#bookList");
const bookForm = document.querySelector("#bookForm");
const filterFavorites = document.querySelector("#filterFavorites");
const sortSelect = document.querySelector("#sortSelect");

let booksArray = [];

onValue(booksRef, (snapshot) => {
  const books = snapshot.val();
  booksArray = [];
  for (const key in books) {
    const book = new Book(
      key,
      books[key].title,
      books[key].author,
      books[key].favorite,
    );
    booksArray.push(book);
  }
  const filteredArray = filterBooks(booksArray);
  const sortedArray = sortBooks(filteredArray);
  reRenderBooks(sortedArray);
});

const reRenderBooks = (books) => {
  //books ska vara array
  bookList.innerHTML = "";
  books.map((book) => {
    renderBook(book, bookList);
  });
};

const createBook = (event) => {
  event.preventDefault();
  const title = event.target[0].value;
  const author = event.target[1].value;

  const newBookRef = push(booksRef);

  set(newBookRef, {
    title: title,
    author: author,
    favorite: false,
  })
    .then(() => console.log(title))
    .catch((error) => console.error(error));

  bookForm.reset();
};

bookForm.addEventListener("submit", createBook);

filterFavorites.addEventListener("change", () => {
  const filteredArray = filterBooks(booksArray);
  const sortedArray = sortBooks(filteredArray);
  reRenderBooks(sortedArray);
});

sortSelect.addEventListener("change", () => {
  const sortedArray = sortBooks(booksArray);
  const filteredArray = filterBooks(sortedArray);
  reRenderBooks(filteredArray);
});
