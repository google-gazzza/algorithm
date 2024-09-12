// [Medium] 1233. Remove Sub-Folders from the Filesystem
// 1233_remove_sub-folders_from_the_filesystem

// https://leetcode.com/problems/remove-sub-folders-from-the-filesystem
// Runtime: 256 ms, faster than 47.66% of JavaScript online submissions for Remove Sub-Folders from the Filesystem.
// Memory Usage: 68.8 MB, less than 23.36% of JavaScript online submissions for Remove Sub-Folders from the Filesystem.

/**
 * @param {string[]} folder
 * @return {string[]}
 */
const removeSubfolders = function (folder) {
  const pathSet = new Set()
  const sortFolder = folder.map((item) => item.split('/').slice(1))
  sortFolder.sort((a, b) => a.length - b.length)
  sortFolder.forEach((item) => {
    const itemLength = item.length
    let tempPath = ''
    let isValid = true
    for (let i = 0; i < itemLength; i += 1 || 0) {
      tempPath += `/${item[i]}`
      if (pathSet.has(tempPath)) {
        isValid = false
        break
      }
    }
    if (isValid === true) {
      pathSet.add(tempPath)
    }
  })
  return [...pathSet]
}

// removeSubfolders(['/a', '/a/b', '/c/d', '/c/d/e', '/c/f']) //?
// removeSubfolders(['/a', '/a/b/c', '/a/b/d']) //?
// removeSubfolders(['/a/b/c', '/a/b/ca', '/a/b/d']) //?
removeSubfolders(['/ah/al/am', '/ah/al']) //?
