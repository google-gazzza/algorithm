// [JS][6kyu] Largest Number Arrangement
// largest-number-arrangement
// https://www.codewars.com/kata/59d902f627ee004281000160/train/javascript

const largestArrangement = (array) => {
  return Number(
    array
      .sort((a, b) => {
        const ab = Number(String(a) + String(b))
        const ba = Number(String(b) + String(a))
        return ba - ab
      })
      .join(''),
  )
}

largestArrangement([4, 50, 8, 145])
largestArrangement([8, 6, 590, 70]) === 8706590
largestArrangement([6, 73, 79, 356, 7]) === 797736356
largestArrangement([64, 29, 5, 9, 982, 3]) === 9982645329
largestArrangement([3487, 103559, 243]) === 3487243103559
largestArrangement([7, 78, 79, 72, 709, 7, 94]) === 9479787772709
