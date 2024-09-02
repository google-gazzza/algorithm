// [JS][7kyu] Convert a linked list to a string
// convert-a-linked-list-to-a-string
// https://www.codewars.com/kata/582c297e56373f0426000098/train/javascript

const stringify = (list) => {
  let result = ''
  let current = list
  while (current) {
    result += `${current.data} -> `
    current = current.next
  }

  return result + 'null'
}

stringify(new Node(1, new Node(2, new Node(3)))) === '1 -> 2 -> 3 -> null'
stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))) === '0 -> 1 -> 4 -> 9 -> 16 -> null'
stringify(null) === 'null'
