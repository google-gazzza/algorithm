// will-there-be-enough-space
// Will there be enough space?
// difficulty: 8kyu
// https://www.codewars.com/kata/5875b200d520904a04000003
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/will-there-be-enough-space

const enough = (cap, on, wait) => (on + wait) >= cap ? (on + wait) - cap : 0;



console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);
