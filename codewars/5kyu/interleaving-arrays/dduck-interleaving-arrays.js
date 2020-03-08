// https://www.codewars.com/kata/523d2e964680d1f749000135

const interleave = (...array) => {
  let result = [];
  const maxSizeOfArray = array.reduce((acc, cur) => (acc.length > cur.length ? acc : cur), 0).length;
  
  for (let i = 0; i < maxSizeOfArray; i += 1) {
    result.push(array.map((v) => {
      const value = v.shift();
      return value !== undefined ? value : null;
    }));
  }
  
  while (Array.isArray(result[0])) {
    result = result.reduce((acc, cur) => [...acc, ...cur], []);
    // if you use Node 11 you can do this
    // result = result.flat();
  }
  
  return result;
};

console.log(interleave([1, 2, 3], ['c', 'd', 'e']), [1, 'c', 2, 'd', 3, 'e']);
// console.log(interleave([1, 2, 3], [4, 5]), [1, 4, 2, 5, 3, null]);
// console.log(interleave([1, 2, 3], [4, 5, 6], [7, 8, 9]), [1, 4, 7, 2, 5, 8, 3, 6, 9]);
// console.log(interleave([]), []);
