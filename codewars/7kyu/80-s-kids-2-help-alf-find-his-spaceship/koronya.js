// [JS][7kyu] 80's Kids #2: Help ALF Find His Spaceship
// 80-s-kids-2-help-alf-find-his-spaceship
// https://www.codewars.com/kata/5660aa3d5e011dfd6e000063/train/javascript

const findSpaceship = (map) => {
  if (!map || map.length === 0) {
    return 'Spaceship lost forever.'
  }
  const splitArr = map.split('\n').reverse()
  const rowIndex = splitArr.findIndex((row) => row.includes('X'))
  if (rowIndex === -1) {
    return 'Spaceship lost forever.'
  }

  const colIndex = splitArr[rowIndex].indexOf('X')
  return [colIndex, rowIndex]
}

findSpaceship('..........\n..........\n.......X..\n..........\n..........')
findSpaceship('.......\nX.......')
findSpaceship('........................')
findSpaceship()
findSpaceship('X')
