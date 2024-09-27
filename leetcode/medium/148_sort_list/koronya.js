// [Medium] 148. Sort List
// 148_sort_list

// https://leetcode.com/problems/sort-list
// Runtime: 108 ms, faster than 61.06% of JavaScript online submissions for Sort List.
// Memory Usage: 43.8 MB, less than 19.40% of JavaScript online submissions for Sort List.
const sortList = head => {
  if (!head) {
    return head
  }
  const sortedMap = []
  let target = head
  let count = 0
  while (target) {
    sortedMap.push(target)
    target = target.next
    count += 1
  }
  sortedMap.sort((a, b) => {
    return a.val - b.val
  })
  target = sortedMap[0]
  const newHead = target
  for (let i = 1; i < count; i = i + 1 | 0) {
    target.next = sortedMap[i]
    target = target.next
  }
  target.next = null
  
  return newHead
}
