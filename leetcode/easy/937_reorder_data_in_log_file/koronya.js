// [Easy] 937. Reorder Data in Log File
// 937_reorder_data_in_log_file

const CHAR_CODE_OF_0 = '0'.charCodeAt(0)
const CHAR_CODE_OF_9 = '9'.charCodeAt(0)
const isBetween = (start, end, value) => start <= value && value <= end

// https://leetcode.com/problems/reorder-data-in-log-files
// Runtime: 80 ms, faster than 94.72% of JavaScript online submissions for Reorder Data in Log Files.
// Memory Usage: 43 MB, less than 57.21% of JavaScript online submissions for Reorder Data in Log Files.
const reorderLogFiles = function (logs) {
  const digitLogs = []
  const letterLogs = []
  logs.forEach(log => {
    const firstLetter = log.split(' ')[1][0]
    if (isBetween(CHAR_CODE_OF_0, CHAR_CODE_OF_9, firstLetter.charCodeAt(0))) {
      digitLogs.push(log)
    } else {
      letterLogs.push(log)
    }
  })
  letterLogs.sort((a, b) => {
    const [firstA, ...restA] = a.split(' ')
    const [firstB, ...restB] = b.split(' ')
    const strA = [...restA].join(' ')
    const strB = [...restB].join(' ')
    if (strA < strB) {
      return -1
    } else if (strA > strB) {
      return 1
    } else {
      if (firstA < firstB) {
        return -1
      } else if (firstA > firstB) {
        return 1
      } else {
        return 0
      }
    }
  })

  return [...letterLogs, ...digitLogs]
}
