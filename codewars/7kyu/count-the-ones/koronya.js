// [JS][7kyu] Count the Ones
// count-the-ones
// https://www.codewars.com/kata/5519e930cd82ff8a9a000216/train/javascript

const hammingWeight = (x) => {
  let count = 0
  while (x > 0) {
    x % 2 === 1 ? (count += 1) : null
    x >>= 1
  }
  return count
}

hammingWeight(10) === 2
hammingWeight(21) === 3
