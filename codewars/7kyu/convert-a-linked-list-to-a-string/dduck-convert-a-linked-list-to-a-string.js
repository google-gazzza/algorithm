// convert-a-linked-list-to-a-string
// Convert a linked list to a string
// difficulty: 7kyu
// https://www.codewars.com/kata/582c297e56373f0426000098/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const stringify = (list, data = []) => {
  return list ? stringify(list.next, [...data, list.data]) : [...data, 'null'].join(' -> ');
};



console.log(stringify(new Node(1, new Node(2, new Node(3)))), "1 -> 2 -> 3 -> null");
console.log(stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))), "0 -> 1 -> 4 -> 9 -> 16 -> null");
console.log(stringify(null), "null");
