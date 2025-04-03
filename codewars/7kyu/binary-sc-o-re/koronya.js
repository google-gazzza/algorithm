// [JS][7kyu] Binary scORe
// binary-sc-o-re
// https://www.codewars.com/kata/56cafdabc8cfcc3ad4000a2b/train/javascript

const score = (n) => {
  if (n === 0) {
    return 0
  }
  const bits = Math.floor(Math.log2(n)) + 1
  return 2 ** bits - 1
}

// score(0) === 0
// score(1) === 1
// score(49) === 63
// score(1000000) === 1048575
// score(2048) === 4095
// score(647336884)
