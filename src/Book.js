import { db } from "./firebase";
import { ref, set, remove } from "firebase/database";

export class Book {
  constructor(id, title, author, favorite) {
    this.title = title;
    this.author = author;
    this.favorite = favorite;
    this.id = id;
  }

  markAsFavorite() {
    const bookRef = ref(db, "main/books/" + this.id);
    this.favorite = !this.favorite;
    set(bookRef, {
      title: this.title,
      author: this.author,
      favorite: this.favorite,
    });
  }

  remove() {
    remove(ref(db, "main/books/" + this.id));
  }
}
