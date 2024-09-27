// [JS][5kyu] Directions Reduction
// directions-reduction
// https://www.codewars.com/kata/550f22f4d758534c1100025a/javascript

const oppositeInfo = {
  NORTH: 'SOUTH',
  SOUTH: 'NORTH',
  EAST: 'WEST',
  WEST: 'EAST',
}

const dirReduc = (arr) => {
  const arrLen = arr.length
  let prevArr = []
  let target = 0
  while (target < arrLen) {
    const now = arr[target]
    if (prevArr.length === 0 || prevArr[prevArr.length - 1] !== oppositeInfo[now]) {
      prevArr.push(now)
    } else {
      prevArr.pop()
    }
    target += 1
  }
  return prevArr
}

dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])
dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST'])
dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST'])
