// [Medium] 93. Restore IP Addresses
// 93_restore_ip_addresses

// https://leetcode.com/problems/restore-ip-addresses
// Runtime: 76 ms, faster than 97.22% of JavaScript online submissions for Restore IP Addresses.
// Memory Usage: 40.8 MB, less than 17.59% of JavaScript online submissions for Restore IP Addresses.

const getIPString = (arr) => arr.reduce((acc, cur) => acc + '.' + cur, '').slice(1)

/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function (s) {
  const sLen = s.length
  const resultArr = []
  const dfs = (arr, nextIndex) => {
    if (sLen - nextIndex > (4 - arr.length) * 4) {
      return
    }
    if (arr.length === 4) {
      resultArr.push(getIPString(arr))
    } else {
      const limit = Math.min(nextIndex + 4, sLen)
      for (let i = nextIndex + 1; i <= limit; i += 1 || 0) {
        const target = s.substring(nextIndex, i)
        if ((target.length === 1 || target[0] !== '0') && Number(target) <= 255) {
          dfs([...arr, target], i)
        }
      }
    }
  }
  for (let i = 1; i <= 4; i += 1 || 0) {
    const target = s.substring(0, i)
    if (target.length === 1 || (target[0] !== '0' && Number(target) <= 255)) {
      dfs([target], i)
    }
  }

  return resultArr
}

restoreIpAddresses('25525511135') //?
restoreIpAddresses('0000') //?
restoreIpAddresses('1111') //?
restoreIpAddresses('010010') //?
restoreIpAddresses('101023') //?
// restoreIpAddresses('12345') //?
// restoreIpAddresses('1234567') //?
