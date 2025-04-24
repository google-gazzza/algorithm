// [JS][6kyu] AD2070: Help Lorimar troubleshoot his robots-Search and Disable
// ad2070-help-lorimar-troubleshoot-his-robots-search-and-disable
// https://www.codewars.com/kata/57dc0ffed8f92982af0000f6/train/javascript

const primeMap = new Map()
primeMap.set(2, true)

const isPrimeNumber = (num) => {
  if (primeMap.has(num)) {
    return primeMap.get(num)
  }

  const rangeNum = Math.floor(Math.sqrt(num))
  if (num % 2 === 0 || num === 1) {
    primeMap.set(num, false)
    return false
  }
  for (let i = 3; i <= rangeNum; i += 2) {
    if (num % i === 0) {
      primeMap.set(num, false)
      return false
    }
  }

  primeMap.set(num, true)
  return true
}

const searchDisable = (log) => {
  const logArr = log.split(' ')
  const logMap = new Map()
  logArr.forEach((str) => {
    const num = Number(str)
    if (isPrimeNumber(num) && str.length === 4 && (str[2] === '2' || str[2] === '3')) {
      logMap.set(num, (logMap.get(num) || 0) + 1)
    }
  })
  const count = [...logMap]
    .map(([key, value]) => value)
    .filter((value) => value > 3)
    .reduce((acc, cur) => acc + cur, 0)

  return count > 50 ? 'match disable bot' : 'no match continue'
}

// searchDisable(
//   '1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031',
// ) === 'match disable bot'
// searchDisable(
//   '2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031',
// ) === 'no match continue'
// searchDisable(
//   '7693 3051 1999 7307 4323 4968 2666 4267 9264 2399 66 5739 300 9119 2399 5177 4649 2492 2471 7301 6192 9981 1828 2698 9386 8967 1502 9014 8799 5098 7155 5090 3909 2096 6296 2835 5746 9291 2312 6419 1740 1998 6281 3328 7590 3903 4197 1804 2223 7495 4483 234 9294 9882 2793 6959 320 3495 3540 5308 6453 8666 921 4174 7987 6834 6755 4487 8396 2577 9191 6323 2684 2914 7651 2941 2897 3401 409 4381 9679 6791 927 6590 1683 2118 423 8844 7565 7052 9809 6121 6263 1614 9606 4078 7386 5360 8982',
// ) === 'no match continue'

// searchDisable(
//   '8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923',
// ) === 'match disable bot'

// searchDisable(
//   '5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 2423 2423 2423 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929',
// ) === 'no match continue'
