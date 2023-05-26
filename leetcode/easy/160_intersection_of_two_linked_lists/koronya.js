// [Easy] 160. Intersection of Two Linked Lists
// 160_intersection_of_two_linked_lists

// https://leetcode.com/problems/intersection-of-two-linked-lists
// Runtime: 96 ms, faster than 53.55% of JavaScript online submissions for Intersection of Two Linked Lists.
// Memory Usage: 44.9 MB, less than 9.39% of JavaScript online submissions for Intersection of Two Linked Lists.
const getIntersectionNode = (headA, headB) => {
  const nodeSet = new Set()
  let targetA = headA
  let targetB = headB
  while (targetA) {
    nodeSet.add(targetA)
    targetA = targetA.next
  }
  while (targetB) {
    if (!nodeSet.has(targetB)) {
      nodeSet.add(targetB)
      targetB = targetB.next
    } else {
      return targetB
    }
  }
  return null
}
