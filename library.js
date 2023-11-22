class Book {
  constructor (title, author, available = true) {
    this.title = title; 
    this.author = author; 
    this.available = available; 
  }
}

const library = {
  books: [], 

  addBook: function(title, author) {
    const book = new Book(title, author); 
    this.books.push(book.title); 
    console.log(`Added "${book.title}" by ${book.author} to the library! There are ${this.books.length} books in the library database.`); 
  },

  checkOutBook: function(title, author, available) {
    try {
      let found = false; 
    for (let book of this.books) {
      if (book.title === title && book.available) {
        found = true; 
        book.available = false;
        console.log(`Checked out: ${book.title}`);
        break;
      }
    }
    if (!found) throw new Error(`The book: "${title}" was not found or already checked out.`);
    } catch(error){
      console.log(error.message);
    }
  }, 

  getAvailableBooks: function() {
    let bookList = []
    for (let book of this.books) {
      if (book.available) {
        bookList.push(book.title); 
      }
    }
    console.log(`${bookList.length} titles: ${bookList.join(", ")}`); 
  }
}

const newBooks = `[

]`; 

function receiveBooks(bookData) {
  console.log(`Adding new books to our shelves.`); 
  const booksToAdd = JSON.parse(bookData); 
  for (let book of booksToAdd) {
    library.addBook(book.title, book.author); 
  }
}
