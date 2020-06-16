// linked-lists-length&count
// https://www.codewars.com/kata/55beec7dd347078289000021

function Node(data, next) {
  this.data = data;
  this.next = next ?? null;
}

const length = (head, n = 0) => head ? length(head.next, n + 1) : n;

const count = (head, data, n = 0) => head ? count(head.next, data, n + ((head.data === data) ? 1 : 0)) : n;

const node = new Node(2, new Node(2, new Node(3)));
count(node, 2);
//?
