// dollars-and-cents
// Dollars and Cents
// difficulty - 8kyu
// https://www.codewars.com/kata/55902c5eaa8069a5b4000083
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/dollars-and-cents

const formatMoney = (amount) => `$${amount.toFixed(2)}`;

console.log(formatMoney(39.99), '$39.99', 'That\'s not formatted the way we expected.');
