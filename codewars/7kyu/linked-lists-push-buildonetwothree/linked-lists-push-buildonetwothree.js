/*
linked-lists-push-buildonetwothree

# codewars/7kyu/Linked Lists - Push & BuildOneTwoThree
difficulty: 7kyu
URL: https://www.codewars.com/kata/55be95786abade3c71000079/

## Approach

### en
its basic data structure.
Key point is when putting new value, new value.next must be pointing old value.
so `push` function must return newNode -> oldNode

### kr
이것은 기본 자료구조입니다.
키포인트는 새로운 값이 들어 올때 new value.next는 기존 값(노드)가 되어야 합니다.
따라서 `push` 함수는 newNode -> oldNode를 리턴해야 합니다.

## solution
### JavaScript

*/

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

function push(head, data) {
  return new Node(data, head);
}

function buildOneTwoThree() {
  return push(push(push(null, 3), 2), 1);
}

// test
console.log(push(null, 1).data, 1, 'Should be able to create a new linked list with push().');
console.log(push(null, 1).next, null, 'Should be able to create a new linked list with push().');
console.log(push(new Node(1), 2).data, 2, 'Should be able to prepend a node to an existing node.');
console.log(push(new Node(1), 2).next.data, 1, 'Should be able to prepend a node to an existing node.');

console.log(buildOneTwoThree().data, 1, 'First node should should have 1 as data.');
console.log(buildOneTwoThree().next.data, 2, 'First node should should have 1 as data.');
console.log(buildOneTwoThree().next.next.data, 3, 'Second node should should have 2 as data.');
console.log(buildOneTwoThree().next.next.next, null, 'Third node should should have 3 as data.');
