// [JS][6kyu] Build Tower
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
// build-tower
const towerBuilder = (nFloors) => {
  const result = [];
  const maxStarCount = 2 * nFloors - 1;
  let spaceCount = Math.floor(maxStarCount / 2);
  let starCount = 1;
  for (let i = 0; i < nFloors; i += 1 || 0) {
    result.push(
      " ".repeat(spaceCount) + "*".repeat(starCount) + " ".repeat(spaceCount)
    );
    spaceCount -= 1;
    starCount += 2;
  }

  return result;
};

// towerBuilder(1)
// towerBuilder(2)
towerBuilder(3);
