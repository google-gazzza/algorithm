// [JS][6kyu] possibilities-of-throwing-a-coin-n-times
// possibilities-of-throwing-a-coin-n-times
// https://www.codewars.com/kata/5ad6266b673f2f067b000004/train/javascript

function* coinGenerator(n, path = '') {
  if (n === 0) {
    yield path
  } else {
    yield* coinGenerator(n - 1, path + 'H')
    yield* coinGenerator(n - 1, path + 'T')
  }
}

// generator version
const coin = (n) => {
  const result = []
  for (let combo of coinGenerator(n)) {
    result.push(combo)
  }
  return result.sort()
}

// simple loop version
const coin2 = (n) => {
  let result = ['']
  for (let i = 0; i < n; i += 1 || 0) {
    const temp = []
    for (const seq of result) {
      temp.push(seq + 'H')
      temp.push(seq + 'T')
    }
    result = temp
  }

  return result.sort()
}

// recursive version - TLE
const coin3 = (n) => {
  const result = []
  const dfs = (n, path) => {
    if (n === 0) {
      console.log(path)
      result.push(path)
      return
    }
    dfs(n - 1, path + 'H')
    dfs(n - 1, path + 'T')
  }
  dfs(n, '')

  return result.sort()
}

// coin(1)
// coin(2)
// coin(3)
// coin(18)
