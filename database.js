const books = [ 
    {
    ISBN: "12345Book", 
    title: "programming language",
    pubDate: "2021-07-07",
    language: "en",
    numPage: 250,
    author: [1,2],
    publications:[1],
    category: ["javascript", "c programming", "python", "java"]
     },
];
const author = [
    {
        id: 1,
        name: "gouse",
        books:["12345Book"],
    },
    {
        id: 2,
        name: "azam",
        books:["12345Book"]
    },
];
const publications = [
    {
        id: 1,
        name: "writex",
        books: ["12345Book"],
    },
];

module.exports = {books, author, publications};