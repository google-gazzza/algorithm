// [Medium] 1209. Remove All Adjacent Duplicates in String II
// 1209_remove_all_adjacent_duplicates_in_string_ii

// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii
// Runtime: 114 ms, faster than 59.26% of TypeScript online submissions for Remove All Adjacent Duplicates in String II.
// Memory Usage: 49 MB, less than 96.30% of TypeScript online submissions for Remove All Adjacent Duplicates in String II.

interface IItem {
  char: string
  count: number
}

function removeDuplicates(s: string, k: number): string {
  const arr: IItem[] = []
  for (let char of s) {
    if (arr.length && arr[arr.length - 1].char === char) {
      arr[arr.length - 1].count += 1
      if (arr[arr.length - 1].count === k) {
        arr.pop()
      }
    } else {
      arr.push({ char, count: 1 })
    }
  }

  return arr.reduce((acc, { char, count }) => acc + char.repeat(count), '')
}
