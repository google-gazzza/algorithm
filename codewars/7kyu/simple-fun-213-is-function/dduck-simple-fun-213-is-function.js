// simple-fun-213-is-function
// Simple Fun #213: Is Function?
// difficulty: 7kyu
// https://www.codewars.com/kata/590001c24c5d02625b00005e
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/simple-fun-213-is-function

const isFunction = (pairs) => {
  const map = new Map();
  
  return pairs.map((v) => {
    if (map.has(v[0]) && map.get(v[0]) !== v[1]) {
      return false;
    }
    map.set(v[0], v[1]);
    return true;
  }).filter((v) => !v).length === 0;
};

console.log(isFunction([[0.5, 1.5], [2.5, 3.5]]), true);
console.log(isFunction([[5, 1], [2.5, 3.4], [5, 6], [7, 2]]), false);
console.log(isFunction([[4, 5], [5, 5], [4, 5]]), true);
console.log(isFunction([[-86, -4], [72, 10], [-8, 7], [-75, 1], [-47, -7], [9, -10], [-69, 4], [10, -10], [90, -3], [12, -3]]), true);
