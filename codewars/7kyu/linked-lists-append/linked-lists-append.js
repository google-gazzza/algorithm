// linked-lists-append
// Linked Lists - Append
// difficulty: 7kyu
// https://www.codewars.com/kata/55d17ddd6d7868493e000074

function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  let listATail = listA;
  
  if (listATail && listB) {
    while (listATail.next) {
      listATail = listATail.next;
    }
    listATail.next = listB;
  } else if (listB) {
    return listB;
  }
  
  return listA;
}
