// [JS][6kyu] Simple Fun #141: Hamming Distance
// simple-fun-141-hamming-distance
// https://www.codewars.com/kata/58a6af7e8c08b1e9c40001c1/train/javascript

const convertBinary = (num) => num.toString(2)

const hammingDistance = (a, b) => {
  const binaryA = convertBinary(a)
  const binaryB = convertBinary(b)
  const length = Math.max(binaryA.length, binaryB.length)
  const arrA = binaryA.padStart(length, '0').split('')
  const arrB = binaryB.padStart(length, '0').split('')

  return arrA.reduce((acc, cur, index) => (cur === arrB[index] ? acc : acc + 1), 0)
}

hammingDistance(25, 87) === 4
hammingDistance(256, 302) === 4
hammingDistance(543, 634) === 4
hammingDistance(34013, 702) === 7
hammingDistance(2 ** 31 - 1, 0) === 31
hammingDistance(12345, 12345) === 0
