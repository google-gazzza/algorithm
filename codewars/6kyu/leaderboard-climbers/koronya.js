// [JS][6kyu] Leaderboard climbers
// leaderboard-climbers
// https://www.codewars.com/kata/5f6d120d40b1c900327b7e22/train/javascript

const getModifyNumber = (min, max, number) => {
  if (number < min) {
    return min
  }
  if (number > max) {
    return max
  }
  return number
}

const modifyArr = (arr, str) => {
  const [name, score] = str.split(' ')
  const idx = arr.findIndex((el) => el === name)
  const newIdx = getModifyNumber(0, arr.length - 1, idx - Number(score))
  arr.splice(idx, 1)
  arr.splice(newIdx, 0, name)
}

const leaderboardSort = (leaderboard, changes) => {
  changes.forEach((change) => {
    modifyArr(leaderboard, change)
  })
  return leaderboard
}

leaderboardSort(['John', 'Brian', 'Jim', 'Dave', 'Fred'], ['Dave +1', 'Fred +4', 'Brian -1'])
leaderboardSort(['Bob', 'Larry', 'Kevin', 'Jack', 'Max'], ['Max +3', 'Kevin -1', 'Kevin +3'])
