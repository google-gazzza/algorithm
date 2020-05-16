
// Runtime: 56 ms, faster than 96.46% of JavaScript online submissions for Linked List Cycle.
// Memory Usage: 36.7 MB, less than 75.00% of JavaScript online submissions for Linked List Cycle.
const getNextRabbit = rabbit => {
  if (rabbit.next === null) {
    return null
  }
  return rabbit.next.next
}
const hasCycle = head => {
  let turtle = head
  let rabbit = head
  do {
    if (turtle === null || rabbit === null) {
      return false
    }
    turtle = turtle.next
    // rabbit = rabbit.next?.next
    // optional chaining이 leetcode에서 안되서 함수 만들어서 호출 ㅜㅜ
    rabbit = getNextRabbit(rabbit)
  } while (turtle !== rabbit)
  
  return turtle !== null
}

// Runtime: 60 ms, faster than 88.85% of JavaScript online submissions for Linked List Cycle.
// Memory Usage: 37.4 MB, less than 43.75% of JavaScript online submissions for Linked List Cycle.
const hasCycle2 = head => {
  const nodeSet = new Set()
  let target = head
  while (target !== null) {
    if (nodeSet.has(target)) {
      return true
    }
    nodeSet.add(target)
    target = target.next
  }
  return false
}
