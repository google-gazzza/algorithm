// [JS][8kyu] Reversed sequence
// reversed-sequence
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

const reverseSeq = (n) => {
  return new Array(n)
    .fill(0)
    .map((_, index) => index + 1)
    .reverse()
}

reverseSeq(5)
