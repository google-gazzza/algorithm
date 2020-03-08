// https://www.codewars.com/kata/58259d9062cfb45e1a00006b/
// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }

const map = (head, f) => head ? new Node(f(head.data), map(head.next, f)) : null;
// it's enhanced version of best solution
// this solution have one problem.
// it will expand space until 'n'
// in other words space-complexity is O(n)

// explanation
// if node length is 5
// new Node(f..., map(head.next, f))
// new Node(f..., new Node(f..., map(head.next, f)))
// new Node(f..., new Node(f..., map(new Node(f..., map(head.next, f))))
// ... til 5
// if n is 1000, it will expand til 1000.
// this is a linear recursive process


// space-complexity is O(n)
const map2 = (head, f, newHead, cur) => {
  if (head) {
    cur ? cur.data = f(head.data) : newHead = cur = new Node(f(head.data));
  }
  if (head && head.next) {
    cur.next = new Node();
    return map2(head.next, f, newHead, cur.next);
  }
  return newHead;
};
// explanation
// this logic is tail recursive
// before call map2 finish all logic.
// if node length is 5
// map2(head, f, newHead, cur)
// map2(head, f, newHead, cur)
// map2(head, f, newHead, cur)
// map2(head, f, newHead, cur)
// map2(head, f, newHead, cur)
// so space-complexity is O(1)
// but! Node JS is not Tail recursion optimized not yet.
// so if call over than 1000, it will raise max stack error till recursion optimized implement

