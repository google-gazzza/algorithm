// [JS][5kyu] Can you get the loop ?
// can-you-get-the-loop
// https://www.codewars.com/kata/52a89c2ea8ddc5547a000863/train/javascript

const loop_size = (node) => {
  const visitedSet = new Set()
  let currentNode = node
  while (!visitedSet.has(currentNode)) {
    visitedSet.add(currentNode)
    currentNode = currentNode.next
  }
  const startLoopIndex = [...visitedSet].indexOf(currentNode)

  return visitedSet.size - startLoopIndex
}
