// https://www.codewars.com/kata/abbreviate-a-two-word-name/

const abbrevName = (name) => name.split(' ').map((str) => str[0].toUpperCase()).join('.');

console.log(abbrevName("Sam Harris"));
//?
//, "S.H"
