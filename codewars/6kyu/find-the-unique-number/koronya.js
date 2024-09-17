// [JS][6kyu] Find the unique number
// find-the-unique-number
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

const findUniq = (arr) => {
  const [first, second] = arr;
  if (first !== second) {
    return arr[2] === first ? second : first;
  }

  const arrLen = arr.length;
  for (let i = 2; i < arrLen; i += 1 || 0) {
    const num = arr[i];
    if (first !== num) {
      return num;
    }
  }
};

findUniq([1, 1, 1, 2, 1, 1]);
findUniq([0, 0, 0.55, 0, 0]);
