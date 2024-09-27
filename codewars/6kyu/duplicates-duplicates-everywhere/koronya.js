// [JS][6kyu] Duplicates. Duplicates Everywhere.
// duplicates-duplicates-everywhere
// https://www.codewars.com/kata/5e8dd197c122f6001a8637ca/train/javascript

const removeDuplicateIds = (obj) => {
  const resultObj = {}
  const charMap = new Map()
  const modifyUniqueArr = Object.entries(obj).map(([key, value]) => {
    const arr = value
    const uniqueArr = [...new Set(arr)]
    return [key, uniqueArr]
  })
  modifyUniqueArr.forEach(([key, value]) => {
    value.forEach((char) => {
      charMap.set(char, charMap.get(char) ? [...charMap.get(char), key] : [key])
    })
  })
  modifyUniqueArr.forEach(([key, value]) => {
    const result = []
    value.forEach((char) => {
      char
      if (charMap.get(char).length === 1) {
        result.push(char)
      } else {
        const arr = charMap.get(char).map((item) => Number(item))
        if (Math.max(...arr) === Number(key)) {
          result.push(char)
        }
      }
    })
    resultObj[key] = result
  })

  return resultObj
}

const a1 = {
  1: ['C', 'F', 'G'],
  2: ['A', 'B', 'C'],
  3: ['A', 'B', 'D'],
}

const a2 = {
  1: ['A'],
  2: ['A'],
  3: ['A'],
}

const a3 = {
  432: ['A', 'A', 'B', 'D'],
  53: ['L', 'G', 'B', 'C'],
  236: ['L', 'A', 'X', 'G', 'H', 'X'],
  11: ['P', 'R', 'S', 'D'],
}

// removeDuplicateIds(a1)
removeDuplicateIds(a3)
