// [JS][6kyu] Union of Intervals
// union-of-intervals
// https://www.codewars.com/kata/5495bfa82eced2146100002f/train/javascript

const intervalInsert = (myl, interval) => {
  const [intervalStart, intervalEnd] = interval
  const startIndex = myl.findIndex(([_, end]) => intervalStart <= end)
  const endIndex = myl.findIndex(([start, _]) => intervalEnd < start)
  if (startIndex === -1) {
    return [...myl, interval]
  }
  if (endIndex === 0) {
    return [interval, ...myl]
  }

  const modifyEndIndex = endIndex === -1 ? myl.length - 1 : endIndex - 1
  const start = Math.min(myl[startIndex][0], intervalStart)
  const end = Math.max(myl[modifyEndIndex][1], intervalEnd)

  return [...myl.slice(0, startIndex), [start, end], ...myl.slice(modifyEndIndex + 1)]
}

// intervalInsert(
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [2, 3],
// )
// intervalInsert([[3, 4]], [1, 2])

// intervalInsert(
//   [
//     [1, 2],
//     [3, 4],
//     [5, 6],
//     [7, 8],
//   ],
//   [12, 14],
// )
// intervalInsert([[1, 2]], [3, 4])
// intervalInsert(
//   [
//     [0, 2],
//     [3, 6],
//     [7, 7],
//     [9, 12],
//   ],
//   [1, 8],
// )
// intervalInsert([], [3, 4])

// intervalInsert(
//   [
//     [0, 2],
//     [3, 6],
//     [7, 7],
//     [9, 12],
//   ],
//   [5, 8],
// )
