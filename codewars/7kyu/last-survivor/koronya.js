// [JS][7kyu] Last Survivor
// last-survivor
// https://www.codewars.com/kata/609eee71109f860006c377d1/train/javascript

const lastSurvivor = (letters, coords) => {
  const arr = letters.split('')
  coords.forEach((coord) => {
    arr.splice(coord, 1)
  })
  return arr.join('')
}

lastSurvivor('abc', [1, 1]) === 'a'

lastSurvivor('kbc', [0, 1]) === 'b'

lastSurvivor('zbk', [2, 1]) === 'z'

lastSurvivor('c', []) === 'c'
