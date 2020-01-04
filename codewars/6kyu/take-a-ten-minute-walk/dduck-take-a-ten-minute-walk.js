// https://www.codewars.com/kata/take-a-ten-minute-walk/train/javascript

const stepToCoordinate = {
  n: { key: 'x', value: +1 },
  s: { key: 'x', value: -1 },
  e: { key: 'y', value: +1 },
  w: { key: 'y', value: -1 },
};

const isValidWalk = (steps, count = 0, coordinate = { x: 0, y: 0 }) => {
  const { key, value } = stepToCoordinate[steps.shift()];
  coordinate[key] += value;
  
  if (count === 9 && steps.length === 0) {
    return coordinate.x === 0 && coordinate.y === 0;
  }
  return steps.length && count < 10 ? isValidWalk(steps, count + 1, coordinate) : false;
};


// console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true');
// console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), 'should return false');
// console.log(isValidWalk(['w']), 'should return false');
// console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return false');

console.log(isValidWalk(['n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w']), 'should return false');
