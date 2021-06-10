// [Medium] 1233. Remove Sub-Folders from the Filesystem
// 1233_remove_sub-folders_from_the_filesystem

// https://leetcode.com/problems/remove-sub-folders-from-the-filesystem
// Runtime: 268 ms, faster than 16.67% of TypeScript online submissions for Remove Sub-Folders from the Filesystem.
// Memory Usage: 69 MB, less than 16.67% of TypeScript online submissions for Remove Sub-Folders from the Filesystem.

/**
 * @param {string[]} folder
 * @return {string[]}
 */
function removeSubfolders(folder: string[]): string[] {
  const pathSet = new Set<string>()
  const sortFolder: string[][] = folder.map((item) => item.split('/').slice(1))
  sortFolder.sort((a, b) => a.length - b.length)
  sortFolder.forEach((item) => {
    const itemLength: number = item.length
    let tempPath: string = ''
    let isValid: boolean = true
    for (let i: number = 0; i < itemLength; i += 1) {
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
