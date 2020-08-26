// holiday-viii-duty-free
// Holiday VIII - Duty Free
// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/holiday-viii-duty-free

const dutyFree = (normPrice, discount, hol) => Math.floor((hol / normPrice / discount) * 100);



console.log(dutyFree(12, 50, 1000), 166);
console.log(dutyFree(17, 10, 500), 294);
console.log(dutyFree(24, 35, 3000), 357);

