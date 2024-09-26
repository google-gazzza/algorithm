// lost-number-in-number-sequence
// Lost number in number sequence
// difficulty: 7kyu
// https://www.codewars.com/kata/595aa94353e43a8746000120/

function findDeletedNumber(arr, mixArr) {
  if (arr.length === 0) {
    return 0;
  }
  const n = arr.slice(-1)[0];
  const startNum = arr[0];
  const distance = n - startNum;
  const sum = ((2 * n - (distance)) * (distance + 1)) / 2;
  
  return sum - mixArr.reduce((acc, cur) => acc + cur);
}

console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]), 2, 'Deletion');
console.log(findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8]), 5, 'Deletion');
console.log(findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3]), 0, 'No deletion');
