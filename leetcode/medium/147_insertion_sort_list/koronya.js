// [Medium] 147. Insertion Sort List
// 147_insertion_sort_list

// https://leetcode.com/problems/insertion-sort-list
// Runtime: 152 ms, faster than 20.59% of JavaScript online submissions for Insertion Sort List.
// Memory Usage: 38.8 MB, less than 36.67% of JavaScript online submissions for Insertion Sort List.
const insertNodeToSortedNodeList = (node, nodeList = null) => {
  if (nodeList === null) {
    return node
  }
  const nodeVal = node.val
  let target
  let before = nodeList
  if (nodeVal < nodeList.val) {
    node.next = nodeList
    return node
  } else {
    target = nodeList.next
    while (target !== null) {
      if (nodeVal < target.val) {
        before.next = node
        node.next = target
        break
      } else {
        before = target
        target = target.next
      }
    }
    if (target === null) {
      before.next = node
    }
    return nodeList
  }
}

const insertionSortList = head => {
  if (head === null) {
    return head
  }
  let target = head
  let nextTarget = target.next
  let nodeList
  while (target !== null) {
    target.next = null
    nodeList = insertNodeToSortedNodeList(target, nodeList)
    target = nextTarget
    nextTarget = nextTarget && nextTarget.next
  }
  return nodeList
}
