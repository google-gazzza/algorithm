// [JS][6kyu] Multiplication table
// multiplication-table
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

const multiplicationTable = (size) => {
  const resultArr = [];
  for (let i = 1; i <= size; i++) {
    const innerArr = [];
    for (let j = 1; j <= size; j++) {
      innerArr.push(i * j);
    }
    resultArr.push(innerArr);
  }
  return resultArr;
};

multiplicationTable(3);
multiplicationTable(4);
