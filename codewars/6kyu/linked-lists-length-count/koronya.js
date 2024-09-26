// [JS][6kyu] Linked Lists - Length & Count
// linked-lists-length-count
// https://www.codewars.com/kata/55beec7dd347078289000021/train/javascript

function Node(data) {
  this.data = data
  this.next = null
}

function length(head) {
  let length = 0
  while (head) {
    length += 1
    head = head.next
  }

  return length
}

function count(head, data) {
  let length = 0
  while (head) {
    if (head.data === data) {
      length += 1
    }
    head = head.next
  }

  return length
}

const list = new Node(1)
list.next = new Node(2)
list.next.next = new Node(3)

length(list)
count(list, 1)
