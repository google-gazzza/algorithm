// [Medium] 609. Find Duplicate File in System
// 609_find_duplicate_file_in_system

// https://leetcode.com/problems/find-duplicate-file-in-system
// Runtime: 140 ms, faster than 80.00% of TypeScript online submissions for Find Duplicate File in System.
// Memory Usage: 56.9 MB, less than 20.00% of TypeScript online submissions for Find Duplicate File in System.

/**
 * @param {string[]} paths
 * @return {string[][]}
 */
function findDuplicate(paths: string[]): string[][] {
  const keyMap = new Map<string, string[]>()
  paths.forEach((path) => {
    const [pathName, ...rest] = path.split(' ')
    rest.forEach((item) => {
      const [fileName, key] = item.split('(')
      const value: string = `${pathName}/${fileName}`
      if (keyMap.has(key) === true) {
        keyMap.get(key)!.push(value)
      } else {
        keyMap.set(key, [value])
      }
    })
  })

  return [...keyMap].map((item) => item[1]).filter((item) => item.length > 1)
}

findDuplicate(['root/a 1.txt(abcd) 2.txt(efgh)', 'root/c 3.txt(abcd)', 'root/c/d 4.txt(efgh)', 'root 4.txt(efgh)']) //?
findDuplicate(['root/a 1.txt(abcd) 2.txt(efsfgh)', 'root/c 3.txt(abdfcd)', 'root/c/d 4.txt(efggdfh)']) //?
