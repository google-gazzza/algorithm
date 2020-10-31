// linked-lists-sorted-insert
// Linked Lists - Sorted Insert
// difficulty: 6kyu
// https://www.codewars.com/kata/55cc33e97259667a08000044/

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function sortedInsert(head, data) {
  let cur = head;
  
  if (!cur || cur.data > data) {
    head = new Node(data, head);
  } else {
    while (cur.next && cur.next.data < data) {
      cur = cur.next;
    }
    cur.next = new Node(data, cur.next);
  }
  
  return head;
}

console.log(sortedInsert(new Node(1, new Node(2)), 0.5));
//?
