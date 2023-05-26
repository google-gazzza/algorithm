// data-reverse
// https://www.codewars.com/kata/569d488d61b812a0f7000015

const dataReverse = (data, result = []) => {
  if (data.length) {
    result.push(data.slice(data.length - 8));
    return dataReverse(data.slice(0, data.length - 8), result);
  }
  return [].concat(...result);
};

const data1 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0];
const data2 = [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1];
console.log(data2.toString() === dataReverse(data1).toString());
const data3 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1];
const data4 = [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0];
console.log(data4.toString() === dataReverse(data3).toString());
