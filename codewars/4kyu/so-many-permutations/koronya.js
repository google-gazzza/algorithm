// [JS][4kyu] So Many Permutations!
// so-many-permutations
// https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript

const permutations = (string) => {
  const stringArr = string.split('')
  const stringArrLen = stringArr.length
  const resultSet = new Set()

  const dfs = (str, nextArr) => {
    const nextArrLen = nextArr.length
    if (nextArrLen === 0) {
      resultSet.add(str)
      return
    }
    for (let i = 0; i < nextArrLen; i += 1 || 0) {
      dfs(str + nextArr[i], nextArr.slice(0, i).concat(nextArr.slice(i + 1)))
    }
  }

  for (let i = 0; i < stringArrLen; i += 1 || 0) {
    stringArr[i]
    stringArr.slice(0, i)
    stringArr.slice(i + 1)
    dfs(stringArr[i], stringArr.slice(0, i).concat(stringArr.slice(i + 1)))
  }

  return [...resultSet]
}

// permutations('a')
// permutations('ab')
permutations('aabb')
