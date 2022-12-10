// [JS][7kyu] Form The Minimum
// form-the-minimum
// https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript

const minValue = (values) => {
  const numSet = new Set(values);
  const numArr = [...numSet].sort((a, b) => a - b);
  return Number(numArr.reduce((acc, cur) => acc + cur, ""));
};

minValue([1, 3, 1]);
minValue([5, 7, 5, 9, 7]);
minValue([9, 5, 7]);
