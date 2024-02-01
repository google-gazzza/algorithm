// https://www.codewars.com/kata/55466989aeecab5aac00003e
// rectangle-into-squares

const sqInRect = (a, b, result = []) => {
  if (a < b) {
    return sqInRect(b, a, result);
  }
  if (!a || !b) {
    return result.length === 1 ? null : result;
  }
  
  return sqInRect(b, a - b, [...result, b]);
};

console.log(sqInRect(5, 5), null);
console.log(sqInRect(5, 3), [3, 2, 1, 1]);
console.log(sqInRect(3, 5), [3, 2, 1, 1]);
console.log(sqInRect(20, 14), [14, 6, 6, 2, 2, 2]);
