// [JS][6kyu] Rank Vector
// rank-vector
// https://www.codewars.com/kata/545f05676b42a0a195000d95

const ranks = (a) => {
  const sortedA = [...a].sort((a, b) => b - a)
  const rankMap = new Map()
  sortedA.forEach((num, index) => {
    if (rankMap.has(num) === false) {
      rankMap.set(num, index + 1)
    }
  })

  return a.map((item) => rankMap.get(item))
}

ranks([9, 3, 6, 10])
ranks([3, 3, 3, 3, 3, 5, 1])
