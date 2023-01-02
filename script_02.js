const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  //Question 1: Give me all the titles of book: 
const titles = books.map(books => books.title);
 console.log(titles);

 //question 2 : Have the books been rented at least one time?
const hasBeenRented = books.some(books => books.rented > 0);

console.log(hasBeenRented);

//Question 3 : Which book has been rented the most? 
const mostRentedBook = books.reduce((mostRented, book) => {
    if (book.rented > mostRented.rented) {
        return book;
    }
    else{
    return mostRented;
    }
});

console.log(mostRentedBook);

//Question 4: And Which one is the least rented? 
const leastRentedBook = books.reduce((leastRented, book) =>{
    if (book.rented < leastRented.rented) {
        return book;
    }
    else {
        return leastRented;
    }
});       
console.log(leastRentedBook);     

//Question 5 : Delete the book with the id 133712 :

const firstBook = books.shift();

console.log(books);