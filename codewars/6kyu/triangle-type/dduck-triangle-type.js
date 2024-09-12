// triangle-type
// https://www.codewars.com/kata/53907ac3cd51b69f790006c5

/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
const triangleType = (a, b, c) => {
  const max = Math.max(a, b, c);
  const min = Math.min(a, b, c);
  const middle = (a + b + c) - max - min;
  
  if (min + middle <= max) {
    return 0;
  }
  
  const sumOfBCSquare = min ** 2 + middle ** 2;
  const maxSquare = max ** 2;
  
  if (sumOfBCSquare === maxSquare) {
    return 2;
  }
  if (sumOfBCSquare > maxSquare) {
    return 1;
  }
  if (sumOfBCSquare < maxSquare) {
    return 3;
  }
};
