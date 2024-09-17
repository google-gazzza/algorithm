// [JS][6kyu] Find the odd int
// find-the-odd-int
// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

const findOdd = (arr) => {
  const numSet = new Set();
  arr.forEach((num) => {
    if (numSet.has(num)) {
      numSet.delete(num);
    } else {
      numSet.add(num);
    }
  });

  return [...numSet][0];
};

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]) === 5;
