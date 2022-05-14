/*
71-simplify-path
leetcode/medium/71. Simplify Path
URL: https://leetcode.com/problems/simplify-path/

NOTE: Description
NOTE: Constraints
  - 1 <= path.length <= 3000
  - path consists of English letters, digits, period '.', slash '/' or '_'.
  - path is a valid absolute Unix path.

NOTE: Explanation
NOTE: Reference
*/

function simplifyPath(path: string): string {
  const paths = path.split('/').filter((p) => !['', '.'].includes(p));
  const stack: string[] = [];

  for (let i = 0; i < paths.length; i += 1) {
    if (paths[i] === '..') {
      stack.pop();
    } else {
      stack.push(paths[i]);
    }
  }

  return `/${stack.join('/')}`;
}

let path = '/home/';
console.log(simplifyPath(path));
// Output: "/home"
// Explanation: Note that there is no trailing slash after the last directory name.

path = '/../test';
console.log(simplifyPath(path));
// Output: "/test"

path = '/../';
console.log(simplifyPath(path));
// Output: "/"

path = '/home//foo/';
console.log(simplifyPath(path));
// Output: "/home/foo"
// Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.

path = '/a/./b/../../c/';
console.log(simplifyPath(path));
// "/c"
