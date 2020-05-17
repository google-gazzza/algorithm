// Runtime: 76 ms, faster than 17.64% of JavaScript online submissions for Linked List Cycle II.
// Memory Usage: 36.9 MB, less than 31.25% of JavaScript online submissions for Linked List Cycle II.
const getNextRabbit = rabbit => {
  if (rabbit.next === null) {
    return null
  }
  return rabbit.next.next
}
const detectCycle = head => {
  let turtle = head
  let rabbit = head
  do {
    if (turtle === null || rabbit === null) {
      return null
    }
    turtle = turtle.next
    // optional chaining이 leetcode에서 안됨 ㅜㅜ
    // rabbit = rabbit.next?.next
    rabbit = getNextRabbit(rabbit)
  } while (turtle !== rabbit)

  if (turtle === null) {
    return null
  }

  turtle = head

  while (turtle !== rabbit) {
    turtle = turtle.next
    rabbit = rabbit.next
  }

  return turtle
}

// Runtime: 64 ms, faster than 77.24% of JavaScript online submissions for Linked List Cycle II.
// Memory Usage: 37.6 MB, less than 31.25% of JavaScript online submissions for Linked List Cycle II.
const detectCycle2 = head => {
  const nodeSet = new Set()
  let target = head
  while (target !== null) {
    if (nodeSet.has(target)) {
      return target
    }
    nodeSet.add(target)
    target = target.next
  }
  return null
}
