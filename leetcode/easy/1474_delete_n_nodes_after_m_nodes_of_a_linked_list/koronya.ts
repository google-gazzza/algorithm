// [Easy] 1474. Delete N Nodes After M Nodes of a Linked List
// 1474_delete_n_nodes_after_m_nodes_of_a_linked_list

// https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list
// Runtime: 116 ms, faster than 100.00% of TypeScript online submissions for Delete N Nodes After M Nodes of a Linked List.
// Memory Usage: 44.4 MB, less than 100.00% of TypeScript online submissions for Delete N Nodes After M Nodes of a Linked List.

function deleteNodes(head: ListNode | null, m: number, n: number): ListNode | null {
  const initM = m
  const initN = n
  let prev = head
  let target = head?.next
  m -= 1

  while (target) {
    if (m === 0 && n === 0) {
      m = initM
      n = initN
    } else {
      if (m > 0) {
        m -= 1
        prev = target
        target = target.next
      } else {
        n -= 1
        target = target.next
        prev.next = target
      }
    }
  }

  return head
}
