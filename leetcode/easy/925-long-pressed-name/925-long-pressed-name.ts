// leetcode/easy/925. Long Pressed Name
// 925-long-pressed-name
// URL: https://leetcode.com/problems/long-pressed-name/

function isLongPressedName(name: string, typed: string): boolean {
  const left = name.split('');
  const right = typed.split('');

  if (new Set(left).size !== new Set(right).size) {
    return false;
  }

  for (let i = 0; i < right.length; i += 1) {
    if (left[0] === right[i]) {
      if (left[0] === left[1]) {
        left.shift();
        right.shift();
        i -= 1;
      } else {
        while (left[0] === right[0]) {
          right.shift();
        }
        left.shift();
        i -= 1;
      }
    }
  }

  if (left.length === 0 && right.length > 0 && (right[0] !== name[name.length - 1] || new Set(right).size !== 1)) {
    return false;
  }

  return left.length === 0;
}

let name = 'alex';
let typed = 'aaleex';
console.log(isLongPressedName(name, typed));
// Output: true

name = 'saeed';
typed = 'ssaaedd';
console.log(isLongPressedName(name, typed));
// Output: false

name = "alex";
typed = "aaleexa";
console.log(isLongPressedName(name, typed));
// false
name = "alex";
typed = "aaleexeex";
console.log(isLongPressedName(name, typed));
// false
