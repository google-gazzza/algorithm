// [JS][7kyu] The fusc function -- Part 1
// the-fusc-function--part-1
// https://www.codewars.com/kata/570409d3d80ec699af001bf9/train/javascript

const fusc = (n) => {
  if (n >= 2) {
    if (n % 2 === 0) {
      return fusc(n / 2)
    }
    const halfNum = Math.floor(n / 2)
    return fusc(halfNum) + fusc(halfNum + 1)
  }
  return n === 1 ? 1 : 0
}

fusc(3) === 2
fusc(19) === 7
fusc(42) === 8
fusc(85) === 21
