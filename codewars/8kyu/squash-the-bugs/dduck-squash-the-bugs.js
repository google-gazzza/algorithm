// https://www.codewars.com/kata/56f173a35b91399a05000cb7/train/javascript
const findLongest = (words) => words.split(' ').sort((a, b) => a.length - b.length).pop().length;

console.log(findLongest("The quick white fox jumped around the massive dog"), 7);
console.log(findLongest("Take me to tinseltown with you"), 10);
console.log(findLongest("Sausage chops"), 7);
console.log(findLongest("Wind your body and wiggle your belly"), 6);
console.log(findLongest("Lets all go on holiday"), 7);
