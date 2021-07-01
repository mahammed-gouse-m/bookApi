const express = require("express");

//Database
const database = require("./database");

//initialization
const book = express();
/* 
route         /
description   get all books
access        public
Parameter     none
Methods       get
*/
book.get("/", (req, res) => {
    return res.json({books: database.books});
});

/* 
route         /is
description   get Specific book based on isbn
access        public
Parameter     isbn
Methods       get
*/
book.get("/is/:isbn", (req, res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.ISBN ===req.params.isbn);

        if(getSpecificBook.length === 0) {
            return res.json({error: `No book found for the ISBN of ${req.params.isbn}`,
        });
        }
        return res.json({book: getSpecificBook});
});

/* 
route         /c
description   get specific books based on category
access        public
Parameter     category
Methods       get
*/
book.get("/c/:category", (req, res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.category.includes(req.params.category)
    );
    if(getSpecificBook.length === 0) {
        return res.json({error: `No book found for the category of ${req.params.category}`,
    });
    }
    return res.json({book: getSpecificBook});
});

/* 
route         /l
description   get list of books based on language
access        public
Parameter     Language
Methods       get
*/
book.get("/l/:language", (req, res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.language.includes(req.params.language)
    );
    if(getSpecificBook.length === 0) {
        return res.json({error: `No book found for the language of ${req.params.language}`,
    });
    }
    return res.json({book: getSpecificBook});
});

/* 
route         /author
description   get all authors
access        public
Parameter     none
Methods       get
*/
book.get("/author", (req, res) => {
    return res.json({authors:database.author});
});
 
/* 
route         /author/book
description   get list of authors based on books
access        public
Parameter     isbn
Methods       get
*/
book.get("/author/book/:isbn", (req, res) => {
    const getSpecificAuthor = database.author.filter((author) => 
    author.books.includes(req.params.isbn)
    );
    if(getSpecificAuthor.length === 0) {
        return res.json({
            error: `No author found for the book of ${req.params.isbn}`,
    });
    }
    return res.json({author: getSpecificAuthor});
});
/* 
route         /author/book
description   get Specific authors
access        public
Parameter     name
Methods       get
*/

book.get("/author/book/sp/:name", (req, res) => {
    const getSpecificAuthor = database.author.filter((author) => 
    author.name.includes(req.params.name)
    );
    if(getSpecificAuthor.length === 0) {
        return res.json({error: `No author found for the name of ${req.params.name}`,
    });
    }
    return res.json({author: getSpecificAuthor});
});

/* 
route         /publication
description   get all publication
access        public
Parameter     none
Methods       get
*/
book.get("/publication", (req, res) => {
    return res.json({publication: database.publications});
});

/* 
route         /publication/book
description   get list of publication based on books
access        public
Parameter     isbn
Methods       get
*/
book.get("/publication/book/:isbn", (req, res) => {
    const getSpecificPublication = database.publications.filter((publications) => 
    publications.books.includes(req.params.isbn)
    );
    if(getSpecificPublication.length === 0) {
        return res.json({
            error: `No publication found for the book of ${req.params.isbn}`,
    });
    }
    return res.json({author: getSpecificPublication});
});

/* 
route         /publication/book/pub
description   get Specific publication
access        public
Parameter     name
Methods       get
*/

book.get("/publication/book/pub/:name", (req, res) => {
    const getSpecificPublication = database.publications.filter((publications) => 
    publications.name.includes(req.params.name)
    );
    if(getSpecificPublication.length === 0) {
        return res.json({
            error: `No publication found for the name of ${req.params.name}`,
    });
    }
    return res.json({author: getSpecificPublication});
});


book.listen(3000, () => console.log("Server is running"));