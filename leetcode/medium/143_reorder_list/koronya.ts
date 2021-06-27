// [Medium] 143. Reorder List
// 143_reorder_list

// https://leetcode.com/problems/reorder-list
// Runtime: 112 ms, faster than 83.78% of TypeScript online submissions for Reorder List.
// Memory Usage: 50.2 MB, less than 8.11% of TypeScript online submissions for Reorder List.

function reorderList(head: ListNode | null): void {
  let listLen: number = 0
  let target: ListNode | null = head
  const nMap = new Map<number, ListNode>()
  while (target) {
    listLen += 1
    nMap.set(listLen, target)
    target = target.next
  }
  const limit: number = Math.floor(listLen / 2)
  const numArr: number[] = []
  for (let i: number = 0; i < limit; i += 1) {
    numArr.push(i + 1)
    numArr.push(listLen - i)
  }
  if (listLen % 2 === 1) {
    numArr.push(Math.ceil(listLen / 2))
  }
  for (let i: number = 0; i < listLen - 1; i += 1) {
    nMap.get(numArr[i]).next = nMap.get(numArr[i + 1])
  }
  nMap.get(numArr[listLen - 1]).next = null
}


// const root = new ListNode(1)
// root.next = new ListNode(2)
// root.next.next = new ListNode(3)
// root.next.next.next = new ListNode(4)

// reorderList(root) //?

const root = new ListNode(1)
root.next = new ListNode(2)
root.next.next = new ListNode(3)
root.next.next.next = new ListNode(4)
root.next.next.next.next = new ListNode(5)

reorderList(root) //?
