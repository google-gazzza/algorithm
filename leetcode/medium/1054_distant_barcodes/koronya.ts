// [Medium] 1054. Distant Barcodes
// 1054_distant_barcodes

// https://leetcode.com/problems/distant-barcodes
// Runtime: 5360 ms, faster than 50.00% of TypeScript online submissions for Distant Barcodes.
// Memory Usage: 56.5 MB, less than 50.00% of TypeScript online submissions for Distant Barcodes.

type BarcodeTuple = [number, number]

// const descSort = (a: BarcodeTuple, b: BarcodeTuple) => b[1] - a[1]
const descSort = (a: BarcodeTuple, b: BarcodeTuple) => b[1] - a[1]

function rearrangeBarcodes(barcodes: number[]): number[] {
  const resultArr: number[] = []
  const codeMap = new Map<number, number>()
  const barcodesLen: number = barcodes.length
  for (let i: number = 0; i < barcodesLen; i += 1 || 0) {
    const code: number = barcodes[i]
    codeMap.set(code, (codeMap.get(code) || 0) + 1)
  }

  let arr: BarcodeTuple[] = [...codeMap].sort(descSort)
  while (arr.length > 1) {
    const [first, second] = arr
    first[1] -= 1
    second[1] -= 1
    resultArr.push(first[0])
    resultArr.push(second[0])
    arr = arr.filter((item) => item[1] > 0)
    arr.sort(descSort)
  }
  if (arr.length === 1) {
    resultArr.push(arr[0][0])
  }

  return resultArr
}

rearrangeBarcodes([1, 1, 1, 2, 2, 2]) //?
rearrangeBarcodes([1, 1, 1, 1, 2, 2, 3, 3]) //?

rearrangeBarcodes([1, 1, 1, 1, 1, 2, 2, 2, 2]) //?
rearrangeBarcodes([1, 1, 1, 2, 2, 2, 3]) //?
rearrangeBarcodes([7, 7, 7, 8, 5, 7, 5, 5, 5, 8]) //?
