// [Easy] 937. Reorder Data in Log File
// 937_reorder_data_in_log_file

const CHAR_CODE_OF_0: number = '0'.charCodeAt(0)
const CHAR_CODE_OF_9: number = '9'.charCodeAt(0)
const isBetween = (start: number, end: number, value: number): boolean => start <= value && value <= end

// https://leetcode.com/problems/reorder-data-in-log-files
// Runtime: 88 ms, faster than 97.87% of TypeScript online submissions for Reorder Data in Log Files.
// Memory Usage: 43 MB, less than 68.08% of TypeScript online submissions for Reorder Data in Log Files.
function reorderLogFiles (logs: string[]): string[] {
  const digitLogs: string[] = []
  const letterLogs: string[] = []
  logs.forEach((log: string) => {
    const firstLetter: string = log.split(' ')[1][0]
    if (isBetween(CHAR_CODE_OF_0, CHAR_CODE_OF_9, firstLetter.charCodeAt(0))) {
      digitLogs.push(log)
    } else {
      letterLogs.push(log)
    }
  })
  letterLogs.sort((a: string, b: string): number => {
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
