// [Medium] 1850. Minimum Adjacent Swaps to Reach the Kth Smallest Number
// 1850_minimum_adjacent_swaps_to_reach_the_kth_smallest_number

// https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number
// Runtime: 920 ms, faster than 100.00% of TypeScript online submissions for Minimum Adjacent Swaps to Reach the Kth Smallest Number.
// Memory Usage: 46.9 MB, less than 100.00% of TypeScript online submissions for Minimum Adjacent Swaps to Reach the Kth Smallest Number.

const getOverNumber = (arr: string[], target: string): [string, number] => {
  const arrLen: number = arr.length
  for (let i: number = 1; i < arrLen; i += 1) {
    const now: string = arr[i]
    if (now > target) {
      return [now, i]
    }
  }
  return ['-1', -1]
}

const getNextNumber = (numStr: string): string => {
  const numArr: string[] = Array.from(numStr)
  const numArrLen: number = numArr.length
  let prev: string = numArr[numArrLen - 1]
  const candidateArr: string[] = [prev]
  let targetIndex: number = -1
  for (let i: number = numArrLen - 2; i >= 0; i -= 1) {
    const now: string = numArr[i]
    candidateArr.push(now)
    if (now < prev) {
      targetIndex = i
      break
    }
    prev = now
  }
  candidateArr.sort((a, b) => Number(a) - Number(b))
  const splittedPrevStr: string = numArr.slice(0, targetIndex).reduce((acc, cur) => acc + String(cur), '')
  const splittedNextArr: string[] = numArr.slice(targetIndex)
  const [secondSmallNumber, secondIndex] = getOverNumber(candidateArr, splittedNextArr[0])
  candidateArr.splice(secondIndex, 1)
  const nextString: string = secondSmallNumber + candidateArr.reduce((acc, cur) => acc + cur, '')

  return splittedPrevStr + nextString
}

function getMinSwaps(num: string, k: number): number {
  let changeStr: string = num
  for (let i: number = 0; i < k; i += 1) {
    changeStr = getNextNumber(changeStr)
  }
  const changeStrLen: number = changeStr.length
  let splitIndex: number = -1
  for (let i: number = 0; i < changeStrLen; i += 1) {
    if (num[i] !== changeStr[i]) {
      splitIndex = i
      break
    }
  }

  const fromStr: string = num.substring(splitIndex)
  const nextStr: string = changeStr.substring(splitIndex)
  const checkLen: number = fromStr.length
  const fromArr: string[] = Array.from(fromStr)
  const nextArr: string[] = Array.from(nextStr)
  let changeCount: number = 0
  for (let i: number = 0; i < checkLen; i += 1) {
    let count: number = 0
    for (let j: number = i; j < checkLen; j += 1) {
      if (nextArr[i] !== fromArr[j]) {
        count += 1
      } else {
        for (let k: number = 0; k < count; k += 1) {
          const targetIndex: number = i + count - k
          if (targetIndex > 0 && targetIndex < checkLen) {
            const prevIndex: number = targetIndex - 1
            ;[fromArr[targetIndex], fromArr[prevIndex]] = [fromArr[prevIndex], fromArr[targetIndex]]
            changeCount += 1
          }
        }
        break
      }
    }
  }

  return changeCount
}

getMinSwaps('5489355142', 4) //?
getMinSwaps('11112', 4) //?
getMinSwaps('00123', 1) //?
getMinSwaps('059', 5) //?

// 5489355 142
// 5489355 421

// 11112
// 21111

// 5489355142
// 5489355 142 -> 214

// 5489355214
// 54893552 14 -> 41

// 5489355241
// 5489355 241 -> 412

// 5489355412
// 54893554 12 -> 21

// 5489355421
// 5489 355421 -> 412355

// 5489412355
// 5489412 355 -> 535
