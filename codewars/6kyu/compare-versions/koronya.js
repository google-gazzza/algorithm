// [JS][6kyu] Compare Versions
// compare-versions
// https://www.codewars.com/kata/53b138b3b987275b46000115/train/javascript

const compareVersions = (version1, version2) => {
  const v1 = version1.split('.').map(Number)
  const v2 = version2.split('.').map(Number)
  const versionLen = Math.max(v1.length, v2.length)
  for (let i = 0; i < versionLen; i += 1 || 0) {
    const num1 = v1[i] || 0
    const num2 = v2[i] || 0
    if (num1 > num2) {
      return true
    } else if (num1 < num2) {
      return false
    }
  }
  return true
}

compareVersions('11', '10')
compareVersions('11', '11')
