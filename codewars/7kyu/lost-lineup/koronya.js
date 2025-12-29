// [JS][7kyu] Lost Lineup
// lost-lineup
// https://www.codewars.com/kata/6914c975e159c8f7e120cc84/train/javascript

const findLineup = (distances) => {
  const distancesLength = distances.length
  if (distances.some((distance) => distance < 0 || distance >= distancesLength) || new Set(distances).size !== distancesLength) {
    return []
  }
  return distances
    .map((distance, index) => ({ distance, index: index + 1 }))
    .sort((a, b) => a.distance - b.distance)
    .map((item) => item.index)
}

findLineup([1, 2, 0])
findLineup([1, 4, 2, 6, 8, 0, 5, 7, 3])
findLineup([0])

findLineup([1])
findLineup([1, 0, 1])
findLineup([1, 2, 0, 4])
