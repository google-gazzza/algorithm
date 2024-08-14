// [JS][6kyu] Who won the election?
// who-won-the-election
// https://www.codewars.com/kata/554910d77a3582bbe300009c/train/javascript

const getWinner = (listOfBallots) => {
  const total = listOfBallots.length
  const itemMap = new Map()
  listOfBallots.forEach((item) => {
    if (itemMap.has(item)) {
      itemMap.set(item, itemMap.get(item) + 1)
    } else {
      itemMap.set(item, 1)
    }
  })
  const [candidate, count] = [...itemMap].sort((a, b) => b[1] - a[1])[0]

  return count > total / 2 ? candidate : null
}

getWinner(['A', 'A', 'A', 'B', 'B'])
getWinner(['A', 'A', 'B', 'B'])
getWinner(['A', 'B', 'C', 'D'])
getWinner(['A', 'A', 'A', 'B', 'B', 'C'])
