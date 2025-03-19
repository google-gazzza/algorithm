// [JS][7kyu] Simple Fun #137: S2N
// simple-fun-137-s2-n
// https://www.codewars.com/kata/58a6742c14b042a042000038/train/javascript

const S2N = (m, n) => {
  let result = 0
  for (let i = 0; i <= n; i += 1 || 0) {
    for (let j = 0; j <= m; j += 1 || 0) {
      console.log(`i: ${i}, j: ${j}`)
      result += j ** i
    }
  }
  return result
}

S2N(2, 3) === 20
