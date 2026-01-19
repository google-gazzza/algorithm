// [JS][6kyu] Brute Force Detector
// brute-force-detector
// https://www.codewars.com/kata/695688e9858d531c29a9d748/train/javascript

const detectBruteForce = (logs) => {
  const userMap = new Map()
  const resultSet = new Set()
  logs.forEach((log) => {
    const [ip, status, user] = log.split(' ')
    if (!userMap.has(ip)) {
      userMap.set(ip, 0)
    }
    if (resultSet.has(ip)) {
      return
    }

    if (status === 'LOGIN_SUCCESS') {
      userMap.set(ip, 0)
    } else {
      const failCount = userMap.get(ip)
      userMap.set(ip, failCount + 1)
      if (userMap.get(ip) === 3) {
        resultSet.add(ip)
      }
    }
  })
  return Array.from(resultSet).sort()
}

const logs = ['192.168.1.1 LOGIN_FAIL user=admin', '192.168.1.1 LOGIN_FAIL user=admin', '192.168.1.1 LOGIN_FAIL user=admin']
detectBruteForce(logs)

const logs2 = [
  '9.9.9.9 LOGIN_FAIL user=a',
  '1.1.1.1 LOGIN_FAIL user=b',
  '9.9.9.9 LOGIN_FAIL user=a',
  '1.1.1.1 LOGIN_FAIL user=b',
  '9.9.9.9 LOGIN_FAIL user=a',
  '1.1.1.1 LOGIN_FAIL user=b',
]
detectBruteForce(logs2)

const logs3 = ['10.0.0.5 LOGIN_FAIL user=x', '10.0.0.5 LOGIN_FAIL user=x', '10.0.0.5 LOGIN_SUCCESS user=x', '10.0.0.5 LOGIN_FAIL user=x']
detectBruteForce(logs3)

detectBruteForce([])
