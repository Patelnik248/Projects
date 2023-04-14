const books = [
    {
        title:"To Kill a Mockingbird",
        author:"Harper Lee",
        year:1960
    },
    {
        title:"All the Light We Cannot See",
        author:"Anthony Doerr",
        year:2014
    },
    {
        title:"Wuthering Heights",
        author:" Emily Bronte",
        year:1847
    },
    {
        title:"Gone Girl",
        author:"Gillian Flynn",
        year:2012
    },
    {
        title:"The Fault in Our Stars",
        author:"John Green",
        year:2012
    }
];

const filterdBooks = books.filter(book=>book.year>=2010).map(book=>{
    return{
        title:book.title,
        author:book.author.toUpperCase(),
        year:book.year
    };
});

console.log(filterdBooks);