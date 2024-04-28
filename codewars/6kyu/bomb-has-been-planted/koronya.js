// [JS][6kyu] Bomb has been planted!
// bomb-has-been-planted
// https://www.codewars.com/kata/6621b92d6d4e8800178449f5/train/javascript

const getDistance = (a, b) => {
  return Math.max(Math.abs(a[0] - b[0]), Math.abs(a[1] - b[1]))
}

const getIndexOf = (map, char) => {
  return map
    .map((row, i) => row.map((cell, j) => (cell === char ? [i, j] : null)))
    .flat()
    .filter((cell) => cell !== null)[0]
}

const bombHasBeenPlanted = (map, time) => {
  const bombIndex = getIndexOf(map, 'B')
  const ctIndex = getIndexOf(map, 'CT')
  const kitIndex = getIndexOf(map, 'K')
  const candidate = []
  if (kitIndex) {
    candidate.push(getDistance(ctIndex, kitIndex) + getDistance(kitIndex, bombIndex) + 5)
  }
  candidate.push(getDistance(ctIndex, bombIndex) + 10)

  return Math.min(...candidate) <= time
}

bombHasBeenPlanted(
  [
    ['0', '0', '0', '0', 'B'],
    ['0', '0', '0', '0', 'CT'],
    ['0', '0', '0', '0', '0'],
    ['0', 'K', '0', '0', '0'],
  ],
  14,
)

bombHasBeenPlanted(
  [
    ['CT', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', 'B'],
  ],
  10,
)
