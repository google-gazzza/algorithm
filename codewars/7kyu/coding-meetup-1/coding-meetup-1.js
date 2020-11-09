// coding-meetup-1
// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
// difficulty: 7kyu
// https://www.codewars.com/kata/582746fa14b3892727000c4f

const countDevelopers = (list) => list.filter((e) => e.continent === 'Europe' && e.language === 'JavaScript').length;


var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

var list2 = [
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
  { firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
];

console.log(countDevelopers(list1), 1);
console.log(countDevelopers(list2), 0);
