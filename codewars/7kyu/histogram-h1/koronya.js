// [JS][7kyu] Histogram - H1
// histogram-h1
// https://www.codewars.com/kata/57d532d2164a67cded0001c7/train/javascript

const histogram = (results) => {
  return results
    .map((num, index) => {
      return num === 0 ? `${index + 1}|\n` : `${index + 1}|${'#'.repeat(num)} ${num}\n`
    })
    .reverse()
    .join('')
}

histogram([7, 3, 10, 1, 0, 5])
