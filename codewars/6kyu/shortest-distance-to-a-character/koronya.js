// [JS][6kyu] Shortest Distance to a Character
// shortest-distance-to-a-character
// https://www.codewars.com/kata/5c8bf3ec5048ca2c8e954bf3/train/javascript

const getDistance = (arr, find) => {
  return Math.min(...arr.map((value) => Math.abs(value - find)))
}

const shortesttoChar = (s, c) => {
  if (s.length === 0 || c.length === 0) {
    return []
  }
  const cArr = []
  const sArr = s.split('')
  sArr.forEach((char, index) => {
    if (char === c) {
      cArr.push(index)
    }
  })
  if (cArr.length === 0) {
    return []
  }
  return sArr.map((_, index) => getDistance(cArr, index))
}

shortesttoChar('lovecodewars', 'e')
shortesttoChar('aaaaa', 'a')
shortesttoChar('aabbaabb', 'a')
shortesttoChar('aaaabbbb', 'b')
shortesttoChar('aaaaa', 'b')
shortesttoChar('lovecoding', '')
shortesttoChar('', '')
