// [Medium] 165. Compare Version Numbers
// 165_compare_version_numbers

// https://leetcode.com/problems/compare-version-numbers
// Runtime: 68 ms, faster than 100.00% of TypeScript online submissions for Compare Version Numbers.
// Memory Usage: 39.1 MB, less than 51.72% of TypeScript online submissions for Compare Version Numbers.

const convertNum = (version: string | null): number => (version == null ? 0 : Number(version))

function compareVersion(version1: string, version2: string): number {
  const version1Arr: string[] = version1.split('.')
  const version2Arr: string[] = version2.split('.')
  const version1ArrLen: number = version1Arr.length
  const version2ArrLen: number = version2Arr.length
  const maxLen: number = Math.max(version1ArrLen, version2ArrLen)
  for (let i: number = 0; i < maxLen; i += 1) {
    const ver1: number = convertNum(version1Arr[i])
    const ver2: number = convertNum(version2Arr[i])
    if (ver1 > ver2) {
      return 1
    }
    if (ver1 < ver2) {
      return -1
    }
  }
  return 0
}

compareVersion('1.01', '1.001') //?
compareVersion('1.0', '1.0.0') //?
compareVersion('0.1', '1.1') //?
compareVersion('1.0.1', '1') //?
compareVersion('7.5.2.4', '7.5.3') //?
compareVersion('1.01', '1.001.02') //?

Number('01') //?
Number('001') //?
