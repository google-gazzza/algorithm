// [JS][6kyu] Graphics Series #4: Fireworks
// graphics-series-4-fireworks
// https://www.codewars.com/kata/576d4721b1abc4be4300043b/train/javascript

const releaseFireworks = (map) => {
  const rows = map.split('\n')
  const rowsLen = rows.length
  const resultArr = []
  rows.forEach((item, rowIndex) => {
    rowIndex
    const speed = ((rowsLen - rowIndex) * 5) / 4
    speed
    item.split('').forEach((str, colIndex) => {
      if (str === 'o') {
        resultArr.push([colIndex, speed])
      }
    })
  })

  return resultArr.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1]
    }
    return a[0] - b[0]
  })
}

// prettier-ignore
const map=
    "       \n"+
    " o o o \n"+
    "   o   \n"+
    "       \n"+
    "       "
releaseFireworks(map)

// prettier-ignore
const map2=
    "     o  o \n"+
    " ooo o o  \n"+
    " o o oo   \n"+
    " o o o o  \n"+
    " ooo o  o \n"+
    "          "

releaseFireworks(map2)
