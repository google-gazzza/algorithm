/*
455-assign-cookies
leetcode/easy/455. Assign Cookies
URL: https://leetcode.com/problems/assign-cookies/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function findContentChildren(children: number[], cookies: number[]): number {
  children.sort((a, b) => a - b);
  cookies.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < cookies.length; i += 1) {
    if (children.length === 0) {
      break;
    }

    if (cookies[i] >= children[0]) {
      children.shift();
      count += 1;
    }
  }

  return count;
}

let g = [1, 2, 3];
let s = [1, 1];
console.log(findContentChildren(g, s));
// Output: 1
// Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3.
// And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
//   You need to output 1.
// Example 2:

g = [1, 2];
s = [1, 2, 3];
console.log(findContentChildren(g, s));
// Output: 2
// Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2.
// You have 3 cookies and their sizes are big enough to gratify all of the children,
//   You need to output 2.
