// [JS][7kyu] Linked Lists - Get Nth Node
// linked-lists-get-nth-node
// https://www.codewars.com/kata/55befc42bfe4d13ab1000007/train/javascript

function Node(data) {
  this.data = data
  this.next = null
}

const getNth = (node, index) => {
  if (node === null || index < 0) {
    throw new Error()
  }
  let current = node
  let count = 0
  while (current !== null) {
    if (count === index) {
      return current
    }
    current = current.next
    count += 1
  }
  throw new Error('Index out of bounds')
}

const root = new Node(42)
root.next = new Node(13)
root.next.next = new Node(666)

getNth(root, 1)
getNth(root, 2)
getNth(root, 0)
