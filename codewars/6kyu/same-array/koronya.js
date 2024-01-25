// [JS][6kyu] Same Array?
// same-array
// https://www.codewars.com/kata/558c04ecda7fb8f48b000075/train/javascript

const isSameMap = (map1, map2) => {
  const map1Keys = [...map1.keys()]
  const map2Keys = [...map2.keys()]
  if (map1Keys.length !== map2Keys.length) {
    return false
  }
  return map1Keys.every((key) => map2.has(key))
}

const getMap = (arr) => {
  const map = new Map()
  arr
    .map((item) => item.sort((a, b) => a - b))
    .forEach((item) => {
      const key = `${item[0]}-${item[1]}`
      map.set(key, (map.get(key) || 0) + 1)
    })
  return map
}

const same = (aArr, bArr) => {
  const aLen = aArr.length
  const bLen = bArr.length
  if (aLen === 0 && bLen === 0) {
    return true
  }
  if (aLen !== bLen) {
    return false
  }

  return isSameMap(getMap(aArr), getMap(bArr))
}

same(
  [
    [2, 5],
    [3, 6],
  ],
  [
    [5, 2],
    [3, 6],
  ],
)
same(
  [
    [2, 5],
    [3, 6],
  ],
  [
    [6, 3],
    [5, 2],
  ],
)
same(
  [
    [2, 5],
    [3, 6],
  ],
  [
    [6, 3],
    [2, 5],
  ],
)

same(
  [
    [2, 5],
    [3, 5],
    [6, 2],
  ],
  [
    [2, 6],
    [5, 3],
    [2, 5],
  ],
)
1
