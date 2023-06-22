// [JS][6kyu] Where is my parent!?(cry)
// where-is-my-parent-cry
// https://www.codewars.com/kata/58539230879867a8cd00011c/train/javascript

const KEY_CODE_OF_LOWER_A = 'a'.charCodeAt(0)

const findChildren = (dancingBrigade) => {
  const lowerMap = new Map()
  const upperArr = []
  dancingBrigade.split('').forEach((str) => {
    if (str.charCodeAt(0) < KEY_CODE_OF_LOWER_A) {
      upperArr.push(str)
    } else {
      lowerMap.set(str, (lowerMap.get(str) || 0) + 1)
    }
  })
  upperArr.sort()
  let resultStr = ''
  upperArr.forEach((upperStr, index) => {
    const lowerStr = upperStr.toLowerCase()
    resultStr += `${upperStr}${lowerStr.repeat(lowerMap.get(lowerStr))}`
  })

  return resultStr
}

findChildren('CbcBcbaA') === 'AaBbbCcc'

findChildren('beeeEBb') === 'BbbEeee'
findChildren('uwwWUueEe') === 'EeeUuuWww'
findChildren('abBA') === 'AaBb'
findChildren('AaaaaZazzz') === 'AaaaaaZzzz'
findChildren('CbcBcbaA') === 'AaBbbCcc'
findChildren('xXfuUuuF') === 'FfUuuuXx'
