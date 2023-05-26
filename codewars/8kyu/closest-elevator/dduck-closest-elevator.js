// closest-elevator
// Closest elevator
// difficulty: 8kyu
// https://www.codewars.com/kata/5c374b346a5d0f77af500a5a
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/closest-elevator

const elevator = (left, right, call) => Math.abs(left - call) < Math.abs(right - call) ? 'left' : 'right';



console.log(elevator(0, 1, 0), 'left');
console.log(elevator(0, 1, 1), 'right');
console.log(elevator(0, 1, 2), 'right');
console.log(elevator(0, 0, 0), 'right');
console.log(elevator(0, 2, 1), 'right');
