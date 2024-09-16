// [JS][4kyu] Strings Mix
// strings-mix
// https://www.codewars.com/kata/5629db57620258aa9d000014/train/javascript

const lowerAlphaReg = /[a-z]/

const isLowerAlphabet = (str) => {
  return lowerAlphaReg.test(str)
}

const mix = (s1, s2) => {
  const map1 = new Map()
  const map2 = new Map()
  s1.split('')
    .filter((item) => isLowerAlphabet(item) === true)
    .forEach((item) => {
      map1.set(item, (map1.get(item) || 0) + 1)
    })
  s2.split('')
    .filter((item) => isLowerAlphabet(item) === true)
    .forEach((item) => {
      map2.set(item, (map2.get(item) || 0) + 1)
    })

  const over1Arr = [...map1].filter(([_, value]) => value > 1)
  const over2Arr = [...map2].filter(([_, value]) => value > 1)
  const over2Map = new Map(over2Arr)
  const s1Arr = []
  const s2Arr = []
  const equalArr = []

  over1Arr.forEach(([key, value1]) => {
    if (over2Map.has(key) === true) {
      const value2 = over2Map.get(key)
      over2Map.delete(key)
      if (value1 > value2) {
        s1Arr.push([key, value1])
      } else if (value1 < value2) {
        s2Arr.push([key, value2])
      } else {
        equalArr.push([key, value1])
      }
    } else {
      s1Arr.push([key, value1])
    }
  })
  s2Arr.push(...over2Map)

  const totalArr = [
    ...s1Arr.map(([str, count]) => [`1:${str.repeat(count)}`, str, count, 100]),
    ...equalArr.map(([str, count]) => [`=:${str.repeat(count)}`, str, count, 90]),
    ...s2Arr.map(([str, count]) => [`2:${str.repeat(count)}`, str, count, 95]),
  ]
  totalArr.sort((a, b) => {
    if (a[2] === b[2]) {
      if (a[3] === b[3]) {
        return a[1].charCodeAt(0) - b[1].charCodeAt(0)
      }
      return b[3] - a[3]
    }
    return b[2] - a[2]
  })

  return totalArr.map((item) => item[0]).join('/')
}

mix('Are they here', 'yes, they are here')
mix('looping is fun but dangerous', 'less dangerous than coding')
mix(' In many languages', " there's a pair of functions")
mix('Lords of the Fallen', 'gamekult')
mix('codewars', 'codewars')
mix('A generation must confront the looming ', 'codewarrs')
