// [JS][6kyu] Fun with lists: countIf
// fun-with-lists-count-if
// https://www.codewars.com/kata/5819081d056d4bdd410004f8/train/javascript

const countIf = (head, p) => {
  while (head) {
    if (p(head.data) === true) {
      return 1 + countIf(head.next, p)
    }
    head = head.next
  }

  return 0
}

countIf(null, (x) => false) === 0
countIf(listFromArray([1, 2, 3]), (x) => true) === 3
countIf(listFromArray([1, 2, 3]), (x) => x <= 2) === 2
