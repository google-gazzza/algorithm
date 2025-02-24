// evil-or-odious
// Evil or Odious
// difficulty: 8kyu
// https://www.codewars.com/kata/56fcfad9c7e1fa2472000034

const evil = (n) => n.toString(2).match(/1/g).length % 2 === 1 ? "It's Odious!" : "It's Evil!";



console.log(evil(1), "It's Odious!");
console.log(evil(2), "It's Odious!");
console.log(evil(3), "It's Evil!");
