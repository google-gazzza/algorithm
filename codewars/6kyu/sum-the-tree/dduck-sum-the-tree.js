// sum-the-tree
// Sum The Tree
// https://www.codewars.com/kata/5800580f8f7ddaea13000025/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/6kyu/sum-the-tree

const sumTheTreeValues = (root) => {
  if (root) {
    return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
  }
  
  return 0;
};



var simpleNode = {
  value: 10,
  left: { value: 1, left: null, right: null },
  right: { value: 2, left: null, right: null }
};
console.log(sumTheTreeValues(simpleNode), 13);
//?

var unbalancedNode = {
  value: 11,
  left: { value: 0, left: null, right: null },
  right: { value: 0, left: null, right: { value: 1, left: null, right: null } }
};
console.log(sumTheTreeValues(unbalancedNode), 12);
//?
