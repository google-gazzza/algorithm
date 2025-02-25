// [JS][7kyu] nth Floyd line
// nth-floyd-line
// https://www.codewars.com/kata/5b096efeaf15bef812000010/train/javascript

const nthFirst = (n) => 1 + (n * (n - 1)) / 2

const nthFloyd = (n) => {
  if (n === 1) {
    return 1
  }
  let i = 1
  while (nthFirst(i) < n) {
    i += 1
  }
  return i - 1
}

nthFloyd(1) === 1
nthFloyd(15) === 5
nthFloyd(26) === 7
nthFloyd(17) === 6
nthFloyd(24) === 7
nthFloyd(19) === 6
nthFloyd(5) === 3
nthFloyd(212) === 21
nthFloyd(499502) === 1000
