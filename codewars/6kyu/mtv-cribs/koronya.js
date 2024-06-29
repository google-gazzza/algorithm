// [JS][6kyu] MTV Cribs
// mtv-cribs
// https://www.codewars.com/kata/5834a44e44ff289b5a000075/train/javascript

const getCenteredString = (str, width) => {
  const length = str.length
  const spaces = Math.floor((width - length) / 2)
  const result = `${' '.repeat(spaces)}${str}${' '.repeat(spaces)}`
  return result
}

const getNthRoof = (n, width, isLast) => {
  const repeatStr = isLast ? '_' : ' '
  const roof = `/${repeatStr.repeat(n * 2)}\\`
  const centeredRoof = getCenteredString(roof, width)
  return centeredRoof
}

const getNthFloor = (width, isLast) => {
  const repeatStr = isLast ? '_' : ' '
  const floor = `|${repeatStr.repeat(width - 2)}|`
  const centeredFloor = getCenteredString(floor, width)
  return centeredFloor
}

const myCrib = (n) => {
  const width = (n + 1) * 2
  let result = ''
  for (let i = 0; i < n; i += 1 || 0) {
    result += getNthRoof(i, width)
    result += '\n'
  }
  result += getNthRoof(n, width, true)
  result += '\n'

  for (let i = 0; i < n - 1; i += 1 || 0) {
    result += getNthFloor(width)
    result += '\n'
  }
  result += getNthFloor(width, true)

  return result
}

myCrib(1) === ' /\\ \n/__\\\n|__|'

//    /\
//   /  \
//  /    \
// /______\  number of floors 3
// |      |
// |      |
// |______|

//    /\
//   /  \
//  /____\
//  |    |   2 floors
//  |____|

//    /\
//   /__\    1 floor
//   |__|
