// [JS][6kyu] Compare powers
// compare-powers
// https://www.codewars.com/kata/55b2549a781b5336c0000103/train/javascript

const comparePowers = (n1, n2) => {
  const [a1, b1] = n1
  const [a2, b2] = n2
  const p1 = b1 * Math.log(a1)
  const p2 = b2 * Math.log(a2)
  return p1 === p2 ? 0 : p1 < p2 ? 1 : -1
}

comparePowers([2, 10], [2, 15]) === 1
comparePowers([2, 10], [3, 10]) === 1
comparePowers([2, 10], [2, 10]) === 0
comparePowers([3, 9], [5, 6]) === -1
comparePowers([7, 7], [5, 8]) === -1
comparePowers([316, 577], [306, 868])
