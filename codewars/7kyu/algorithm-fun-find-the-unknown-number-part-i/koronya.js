// [JS][7kyu] Algorithm Fun: Find The Unknown Number - Part I
// algorithm-fun-find-the-unknown-number-part-i
// https://www.codewars.com/kata/59cdb2b3a25c8c6d56000005/train/javascript

const findUnknowNumber = (x, y, z) => {
  let target = z || 7
  while (true) {
    if (target % 3 === x && target % 5 === y) {
      return target
    }
    target += 7
  }
}

findUnknowNumber(2, 3, 2) === 23

findUnknowNumber(1, 2, 3) === 52

findUnknowNumber(1, 3, 5) === 103

findUnknowNumber(0, 0, 0) === 105

findUnknowNumber(1, 1, 1) === 1
