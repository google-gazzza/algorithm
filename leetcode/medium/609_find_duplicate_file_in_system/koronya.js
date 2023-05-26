// [Medium] 609. Find Duplicate File in System
// 609_find_duplicate_file_in_system

// https://leetcode.com/problems/find-duplicate-file-in-system
// Runtime: 136 ms, faster than 82.81% of JavaScript online submissions for Find Duplicate File in System.
// Memory Usage: 56.6 MB, less than 45.31% of JavaScript online submissions for Find Duplicate File in System.

/**
 * @param {string[]} paths
 * @return {string[][]}
 */
const findDuplicate = function (paths) {
  const keyMap = new Map()
  paths.forEach((path) => {
    const [pathName, ...rest] = path.split(' ')
    rest.forEach((item) => {
      const [fileName, key] = item.split('(')
      const value = `${pathName}/${fileName}`
      if (keyMap.has(key) === true) {
        keyMap.get(key).push(value)
      } else {
        keyMap.set(key, [value])
      }
    })
  })

  return [...keyMap].map((item) => item[1]).filter((item) => item.length > 1)
}

findDuplicate(['root/a 1.txt(abcd) 2.txt(efgh)', 'root/c 3.txt(abcd)', 'root/c/d 4.txt(efgh)', 'root 4.txt(efgh)']) //?
findDuplicate(['root/a 1.txt(abcd) 2.txt(efsfgh)', 'root/c 3.txt(abdfcd)', 'root/c/d 4.txt(efggdfh)']) //?
