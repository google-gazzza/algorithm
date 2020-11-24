// max-diff-easy
// max diff - easy
// difficulty: 7kyu
// https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095

function maxDiff(list) {
  if (list.length < 2) {
    return 0;
  }
  
  const max = Math.max(...list);
  const min = Math.min(...list);
  
  if (Math.sign(max) === Math.sign(min)) {
    return Math.abs(Math.abs(max) - Math.abs(min));
  }
  
  return Math.abs(min - max);
};


console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]), 6);
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]), 11);
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16]), 16);
console.log(maxDiff([16]), 0);
console.log(maxDiff([]), 0);
