// https://www.codewars.com/kata/580a094553bd9ec5d800007d

const overThan1000Message = 'It\'s hotter than the sun!!';
const belowThan1000Message = 'Help yourself to a honeycomb Yorkie for the glovebox.';

const apple = (x) => (x ** 2 > 1000 ? overThan1000Message : belowThan1000Message);

console.log(apple('50') === 'It\'s hotter than the sun!!');
console.log(apple(4) === 'Help yourself to a honeycomb Yorkie for the glovebox.');
