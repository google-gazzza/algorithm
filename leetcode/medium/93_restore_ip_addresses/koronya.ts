// [Medium] 93. Restore IP Addresses
// 93_restore_ip_addresses

// https://leetcode.com/problems/restore-ip-addresses
// Runtime: 88 ms, faster than 80.95% of TypeScript online submissions for Restore IP Addresses.
// Memory Usage: 40.5 MB, less than 71.43% of TypeScript online submissions for Restore IP Addresses.

const getIPString = (arr: string[]): string => arr.reduce((acc, cur) => acc + '.' + cur, '').slice(1)

function restoreIpAddresses(s: string): string[] {
  const sLen: number = s.length
  const resultArr: string[] = []
  const dfs = (arr: string[], nextIndex: number) => {
    if (sLen - nextIndex > (4 - arr.length) * 4) {
      return
    }
    if (arr.length === 4) {
      resultArr.push(getIPString(arr))
    } else {
      const limit: number = Math.min(nextIndex + 4, sLen)
      for (let i: number = nextIndex + 1; i <= limit; i += 1) {
        const target: string = s.substring(nextIndex, i)
        if ((target.length === 1 || target[0] !== '0') && Number(target) <= 255) {
          dfs([...arr, target], i)
        }
      }
    }
  }
  for (let i: number = 1; i <= 4; i += 1) {
    const target: string = s.substring(0, i)
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
