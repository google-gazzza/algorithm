// [Easy] 1598. Crawler Log Folder
// 1598_crawler_log_folder

// https://leetcode.com/problems/crawler-log-folder
// Runtime: 68 ms, faster than 99.52% of JavaScript online submissions for Crawler Log Folder.
// Memory Usage: 38.5 MB, less than 93.33% of JavaScript online submissions for Crawler Log Folder.
const minOperations = logs => {
  const logStack = []
  logs.forEach(log => {
    switch (log) {
      case '../':
        logStack.pop()
      case './':
        break
      default:
        logStack.push(log)
        break
    }
  })

  return logStack.length
}
