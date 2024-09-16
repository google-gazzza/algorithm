// [JS][6kyu] Unique In Order
// unique-in-order
// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

const uniqueInOrder = (iterable) => {
  const iterableLen = iterable.length;
  if (iterableLen === 0) {
    return [];
  }
  let prev = iterable[0];
  const resultArr = [prev];
  for (let i = 1; i < iterableLen; i += 1) {
    const item = iterable[i];
    if (prev !== item) {
      resultArr.push(item);
      prev = item;
    }
  }
  return resultArr;
};

uniqueInOrder("AAAABBBCCDAABBB");
uniqueInOrder("ABBCcAD");
uniqueInOrder([1, 2, 2, 3, 3]);
uniqueInOrder([]);
