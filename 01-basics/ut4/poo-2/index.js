const books = [
  {
    title: "La vida del lazarillo de Tormes",
    author: "Anonymus",
    published: "1554",
  },

  {
    title: "The NeverEnding Story",
    author: "Michael Ende",
    published: "1984",
  },

  {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    published: "1954",
  },

  {
    title: "Beowulf",
    author: "Anonymus",
    published: "900",
  }
];

export class Book{
#title;
#author;
published;
constructor(title, author, published){
    this.title= title;
    this.author = author;
    this.published = published;
}

get title(){
    return this.#title;
}

set title(title){
    this.#title = title;
}

get author(){
    return this.#author;
}

set author(author){
    this.#author = author;
}

get published(){
    return this.published;
}

set published(published){
    this.published = published;
}

}