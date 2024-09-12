// leetcode/medium/91. Decode Ways
// 91-decode-ways
// URL: https://leetcode.com/problems/decode-ways/description/

function numDecodings(s: string): number {
  let prev = 0;
  let cur = 1;

  for (let i = 0; i < s.length; i += 1) {
    const temp = cur;

    if (s[i] === '0') {
      cur = 0;
    }

    if (i > 0 && (s[i - 1] === '1' || (s[i - 1] === '2' && s[i] <= '6'))) {
      cur += prev;
    }

    prev = temp;
  }

  return cur;
}

let s = '11';
console.log(numDecodings(s));

s = '112';
console.log(numDecodings(s));

s = '1123';
console.log(numDecodings(s));
// Output: 5