// [Medium] 725. Split Linked List in Parts
// 725_split_linked_list_in_parts

// https://leetcode.com/problems/split-linked-list-in-parts
// Runtime: 84 ms, faster than 81.82% of TypeScript online submissions for Split Linked List in Parts.
// Memory Usage: 41.3 MB, less than 76.36% of TypeScript online submissions for Split Linked List in Parts.

const getAdjustArr = (a: number, b: number): number[] => {
  const resultArr = []
  let 나머지 = a % b
  const 몫 = Math.floor(a / b)
  if (나머지 === 0) {
    for (let i = 0; i < b; i += 1 || 0) {
      resultArr.push(몫)
    }
  } else {
    for (let i = 0; i < b; i += 1 || 0) {
      const num = 나머지 > 0 ? 몫 + 1 : 몫
      resultArr.push(num)
      나머지 -= 1
    }
  }
  return resultArr
}

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
  const resultArr: Array<ListNode | null> = []
  let target: ListNode | null = head
  let listLen: number = 0
  while (target) {
    target = target.next
    listLen += 1
  }
  const repeatArr: number[] = getAdjustArr(listLen, k)
  const repeatArrLen: number = repeatArr.length
  let candidate: ListNode | null = head

  for (let i: number = 0; i < repeatArrLen; i += 1) {
    const tempHead = new ListNode(0)
    const repeat = repeatArr[i]
    if (repeat > 0) {
      tempHead.next = candidate
      target = candidate
      for (let j: number = 1; j < repeat; j += 1) {
        if (target) {
          target = target.next
        }
      }
      if (target) {
        candidate = target.next
        target.next = null
      }
    }
    resultArr.push(tempHead.next)
  }

  return resultArr
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const root = new ListNode(1)
root.next = new ListNode(2)
root.next.next = new ListNode(3)

splitListToParts(root, 5) //?

const root2 = new ListNode(1)
root2.next = new ListNode(2)
root2.next.next = new ListNode(3)
root2.next.next.next = new ListNode(4)
root2.next.next.next.next = new ListNode(5)
root2.next.next.next.next.next = new ListNode(6)
root2.next.next.next.next.next.next = new ListNode(7)
root2.next.next.next.next.next.next.next = new ListNode(8)
root2.next.next.next.next.next.next.next.next = new ListNode(9)
root2.next.next.next.next.next.next.next.next.next = new ListNode(10)

splitListToParts(root2, 3) //?
