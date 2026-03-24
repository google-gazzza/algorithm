// [JS][7kyu] Adaptive Security System
// adaptive-security-system
// https://www.codewars.com/kata/69b58aaee8f1deef7ece7d0e/train/javascript

const breachAttempts = (hackers, securityLevel, increase) => {
  let count = 0
  hackers.forEach((hack) => {
    if (hack > securityLevel) {
      count += 1
    } else {
      securityLevel += increase
    }
  })
  return count
}

breachAttempts([7, 6, 8, 9], 6, 2) === 1
breachAttempts([10, 11, 12], 5, 3) === 3
breachAttempts([5, 5, 5], 5, 1) === 0
breachAttempts([], 4, 2) === 0
