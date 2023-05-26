// sorted-yes-no-how
// Sorted? yes? no? how?
// difficulty: 7kyu
// https://www.codewars.com/kata/580a4734d6df748060000045/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/sorted-yes-no-how

const isSortedAndHow = (array) => {
  const sortedArray = array.slice().sort((a, b) => a - b);
  
  if (JSON.stringify(sortedArray) === JSON.stringify(array)) {
    return 'yes, ascending';
  }
  if (JSON.stringify(sortedArray.reverse()) === JSON.stringify(array)) {
    return 'yes, descending';
  }
  
  return 'no';
};



console.log(isSortedAndHow([1, 2]), 'yes, ascending');
console.log(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
console.log(isSortedAndHow([4, 2, 30]), 'no');
