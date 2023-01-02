const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

//question 1 : make a new array with only the first and last names of the entrepeneurs:
  function getFullName(item) {
    return [item.first, item.last].join(" ");
  }

  console.log(entrepreneurs.map(getFullName));

//question 2: for each entrepreneurs, replace the birthdate by the age of the entrepeneur that they'll have today:
//question 3: replace first and last by firstname and lastname :

    let currentYear = new Date().getFullYear();
    let newEntrepreneur = entrepreneurs.map(item => ({
        firstName: item.first,
        lastName: item.last,
        age: currentYear - item.year
    }));

console.log(newEntrepreneur);


//question 4: filter the entrepreneurs born in the seventies :
console.log("Wich entrepreneurs were born in the seventies ? ")
let seventies = entrepreneurs.filter(element => {
    return element.year >= 1970 && element.year <=1980; 
})
    console.log(seventies);