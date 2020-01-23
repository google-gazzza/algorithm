// https://www.codewars.com/kata/54ba84be607a92aa900000f1

const isIsogram = (str) => new Set(str.toUpperCase().split('')).size === str.replace(' ', '').length;

console.log(isIsogram('Dermatoglyphics'), true);
console.log(isIsogram('isogram'), true);
console.log(isIsogram('aba'), false, 'same chars may not be adjacent');
console.log(isIsogram('moOse'), false, 'same chars may not be same case');
console.log(isIsogram('isIsogram'), false);
console.log(isIsogram(''), true, 'an empty string is a valid isogram');
