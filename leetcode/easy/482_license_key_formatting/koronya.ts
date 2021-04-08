// [Easy] 482. License Key Formatting
// 482_license_key_formatting

// https://leetcode.com/problems/license-key-formatting
// Runtime: 124 ms, faster than 31.82% of TypeScript online submissions for License Key Formatting.
// Memory Usage: 48.7 MB, less than 11.36% of TypeScript online submissions for License Key Formatting.

function licenseKeyFormatting(S: string, K: number): string {
  const arr: string[] = S.split('').filter((str) => str !== '-')
  if (arr.length === 0) {
    return ''
  }
  return arr
    .map((item) => item.toUpperCase())
    .reverse()
    .reduce((acc, cur, idx) => (idx !== 0 && idx % K === 0 ? acc + '-' + cur : acc + cur))
    .split('')
    .reverse()
    .join('')
}

licenseKeyFormatting('5F3Z-2e-9-w', 4) //?
licenseKeyFormatting('2-5g-3-J', 2) //?
licenseKeyFormatting('---', 3) //?
