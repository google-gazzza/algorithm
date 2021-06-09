// [Medium] 1721. Swapping Nodes in a Linked List
// 1721_swapping_nodes_in_a_linked_list

// https://leetcode.com/problems/swapping-nodes-in-a-linked-list
// Runtime: 912 ms, faster than 6.82% of TypeScript online submissions for Swapping Nodes in a Linked List.
// Memory Usage: 110 MB, less than 6.82% of TypeScript online submissions for Swapping Nodes in a Linked List.

const getKthNode = (head: ListNode, k: number): ListNode => {
  let target = head
  for (let i: number = 1; i < k; i += 1) {
    target = target.next!
  }
  return target
}

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  const arr: number[] = []
  let target = head
  while (target) {
    arr.push(target.val)
    target = target.next
  }
  const arrLen: number = arr.length
  const inverseIndex: number = arrLen - k + 1
  if (arrLen === 1 || k === inverseIndex) {
    return head
  }
  const adjustKIndex: number = k > inverseIndex ? inverseIndex : k
  const adjustInverseIndex: number = k > inverseIndex ? k : inverseIndex
  const newArr: number[] = [
    ...arr.slice(0, adjustKIndex - 1),
    arr[adjustInverseIndex - 1],
    ...arr.slice(adjustKIndex, adjustInverseIndex - 1),
    arr[adjustKIndex - 1],
    ...arr.slice(adjustInverseIndex),
  ]
  const newHead: ListNode = new ListNode(newArr[0])
  let newTarget: ListNode = newHead
  for (let i: number = 1; i < arrLen; i += 1) {
    newTarget.next = new ListNode(newArr[i])
    newTarget = newTarget.next
  }
  return newHead
}
