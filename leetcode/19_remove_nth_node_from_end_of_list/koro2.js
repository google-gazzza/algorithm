// https://leetcode.com/problems/remove-nth-node-from-end-of-list
// Runtime: 56 ms, faster than 81.76% of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 34 MB, less than 77.27% of JavaScript online submissions for Remove Nth Node From End of List.
// 

// Could you do this in one pass? 의 요구사항에 맞춰서 다시 짠 코드 -_ㅜ
var removeNthFromEnd = function(head, n) {
  let otherHead = head
  const pointerArr = []

  while (otherHead.next) {
    pointerArr.push(otherHead)
    otherHead = otherHead.next
  }
  pointerArr.push(otherHead)
  const pointerArrLen = pointerArr.length

  if (pointerArrLen === n) {
    head = head.next
  } else {
    const changePoint = pointerArr[pointerArrLen - 1 - n]
    changePoint.next = changePoint.next.next
  }

  return head
}
