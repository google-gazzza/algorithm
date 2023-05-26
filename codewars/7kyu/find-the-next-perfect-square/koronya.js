// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
// [JS][7kyu] Find the next perfect square!
// find-the-next-perfect-square

const findNextSquare = (sq) => {
  const sqrt = Math.sqrt(sq);
  if (String(sqrt).includes(".") === true) {
    return -1;
  }
  return (sqrt + 1) * (sqrt + 1);
};

findNextSquare(121) === 144;
findNextSquare(625) === 676;
findNextSquare(155) === -1;
