/*
can-you-get-the-loop

# codewars/5kyu/Can you get the loop ?
Difficulty: 5kyu
URL: https://www.codewars.com/kata/52a89c2ea8ddc5547a000863/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/
function loop_size(node) {
  const loop = [];
  
  while (loop.indexOf(node) === -1) {
    loop.push(node);
    node = node.next;
  }
  
  return loop.length - loop.indexOf(node);
}
