// disemvowel-trolls
// Disemvowel Trolls
// difficulty: 7kyu
// https://www.codewars.com/kata/52fba66badcd10859f00097e/
const disemvowel = (str) => str.replace(/[aeiou]/gi, '');


console.log(disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!");
