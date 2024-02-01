// https://www.codewars.com/kata/576757b1df89ecf5bd00073b
// build-tower

const towerBuilder = (nFloors, maxTowerSize = nFloors * 2 - 1, n = 1, arr = []) => {
  if (n === nFloors + 1) {
    return arr;
  }
  const towerSize = (n * 2 - 1);
  const emptySpace = (maxTowerSize - towerSize) / 2;
  const currentFloor = '*'.repeat(towerSize).padStart(emptySpace + towerSize, ' ').padEnd(maxTowerSize, ' ');
  arr.push(currentFloor);
  
  return towerBuilder(nFloors, maxTowerSize, n + 1, arr);
};

console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ", "***"]);
console.log(towerBuilder(3), ["  *  ", " *** ", "*****"]);
