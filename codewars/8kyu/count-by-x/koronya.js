// https://www.codewars.com/kata/5513795bd3fafb56c200049e/javascript
// [JS][8kyu] Count by X
// count-by-x

const countBy = (x, n) => {
  const resultArr = [];
  let target = x;
  for (let i = 0; i < n; i += 1 || 0) {
    resultArr.push(target);
    target += x;
  }

  return resultArr;
};

countBy(1, 10) === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
countBy(2, 5) === [2, 4, 6, 8, 10];
