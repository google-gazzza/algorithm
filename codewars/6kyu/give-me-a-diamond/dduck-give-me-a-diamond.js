// give-me-a-diamond
// https://www.codewars.com/kata/5503013e34137eeeaa001648/

const diamond = (n, count = 1, result = '') => {
  if (n % 2 === 0 || n < 1) {
    return null;
  }
  if (n >= count) {
    const diamondSize = Math.abs(n - Math.abs(n - (2 * count - 1)));
    const emptySpaceSize = (n - diamondSize) / 2;
    const emptySpace = ' '.repeat(emptySpaceSize);
    result += `${emptySpace}${'*'.repeat(diamondSize)}\n`;
  }
  if (n === count) {
    return result;
  }
  return diamond(n, count + 1, result);
};

console.log(diamond(1), "*\n");
console.log(diamond(3), " *\n***\n *\n");
console.log(diamond(5), "  *\n ***\n*****\n ***\n  *\n");
console.log(diamond(2), null);
console.log(diamond(-3), null);
console.log(diamond(0), null);
