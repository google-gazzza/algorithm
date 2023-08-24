// [JS][7kyu] Simple consecutive pairs
// simple-consecutive-pairs
// https://www.codewars.com/kata/5a3e1319b6486ac96f000049/train/javascript

const pairs = (ar) => {
  let count = 0
  const arLen = ar.length
  for (let i = 0; i < arLen - 1; i += 2 || 0) {
    if (i === arLen - 1 && (arLen - 1) % 2 === 0) {
      break
    }
    const prev = ar[i]
    const next = ar[i + 1]
    if (Math.abs(next - prev) === 1) {
      count += 1
    }
  }

  return count
}

pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]) === 3
pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]) === 2
pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]) === 0
pairs([-55, -56, -7, -6, 56, 55, 63, 62]) === 4
pairs([73, 72, 8, 9, 73, 72]) === 3
