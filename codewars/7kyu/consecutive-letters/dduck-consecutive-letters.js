// consecutive-letters
// Consecutive letters
// difficulty - 7kyu
// https://www.codewars.com/kata/5ce6728c939bf80029988b57
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/consecutive-letters

const solve = (s) => !![...s].sort()
  .reduce((acc, cur, i, arr) => {
    if (acc.charCodeAt(0) + 1 !== cur.charCodeAt(0)) {
      arr.splice(0);
      return false;
    }
    return cur;
  });

console.log(solve("abc"), true);
console.log(solve("abd"), false);
console.log(solve("dabc"), true);
console.log(solve("abbc"), false);
