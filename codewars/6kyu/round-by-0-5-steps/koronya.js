// [JS][6kyu] Round by 0.5 steps
// round-by-0-5-steps
// https://www.codewars.com/kata/51f1342c76b586046800002a/train/javascript

const solution = (n) => Math.round(n * 2) / 2

const solution2 = (n) => {
  const low = Math.floor(n)
  const high = Math.ceil(n)
  const middle = (low + high) / 2
  const diffLow = Math.abs(low - n)
  const diffHigh = Math.abs(high - n)
  const diffMiddle = Math.abs(middle - n)
  if (diffLow < diffHigh && diffLow < diffMiddle) {
    return low
  } else if (diffHigh < diffLow && diffHigh < diffMiddle) {
    return high
  } else if (diffHigh === diffMiddle) {
    return high
  } else {
    return middle
  }
}

solution(4.2) === 4
solution(4.4) === 4.5
solution(4.6) === 4.5
solution(4.8) === 5
solution(4.75) == 5
