// [JS][6kyu] Parse a linked list from a string
// parse-a-linked-list-from-a-string
// https://www.codewars.com/kata/582c5382f000e535100001a7/train/javascript

// class Node {
//   constructor(data, next = null) {
//     this.data = data
//     this.next = next
//   }
// }

const parse = (string) => {
  const splitArr = string.split(' -> ')
  if (splitArr.length === 1 && splitArr[0] === 'null') {
    return null
  }
  splitArr.pop()
  return splitArr.reduceRight((next, data) => new Node(Number(data), next), null)
}

// parse('1 -> 2 -> 3 -> null')
// parse('0 -> 1 -> 4 -> 9 -> 16 -> null')
// parse('null')
