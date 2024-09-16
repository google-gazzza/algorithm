// leetcode/easy/2810. Faulty Keyboard
// 2810-faulty-keyboard
// URL: https://leetcode.com/problems/faulty-keyboard/description/

function finalString(s: string): string {
  let arr = s.split('');

  while (arr.find((el) => el === 'i')) {
    const idx = arr.indexOf('i');
    const reverseTarget = arr.splice(0, idx + 1);
    reverseTarget.pop();
    arr = reverseTarget.reverse().concat(arr);
  }

  return arr.join('');
}

let s = 'string';
console.log(finalString(s));
// Output: 'rtsng'

s = 'poiinter';
console.log(finalString(s));
// Output: 'ponter'
