// [JS][6kyu] The Office V - Find a Chair
// the-office-v-find-a-chair
// https://www.codewars.com/kata/57f6051c3ff02f3b7300008b/train/javascript

const meeting = (x, need) => {
  let sum = 0
  const result = []
  const xLen = x.length
  for (let i = 0; i < xLen; i += 1 || 0) {
    if (sum >= need) {
      break
    }
    const [xString, count] = x[i]
    let diff = Math.max(count - xString.length, 0)
    if (sum + diff > need) {
      diff = need - sum
    }
    sum += diff
    result.push(diff)
  }

  return sum === 0 ? 'Game On' : sum < need ? 'Not enough!' : result
}

// prettier-ignore
meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4)
//  [0, 1, 3]

// prettier-ignore
meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5)
// [0, 0, 1, 2, 2]

// prettier-ignore
meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0)
// Game On
