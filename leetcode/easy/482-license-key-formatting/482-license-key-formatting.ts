// leetcode/easy/482. License Key Formatting
// 482-license-key-formatting
// URL: https://leetcode.com/problems/license-key-formatting/description/

function licenseKeyFormatting(s: string, k: number): string {
  s = s.replace(/-/g, '').toUpperCase();
  const result = [];

  while (s.length) {
    result.unshift(s.slice(-k));
    s = s.slice(0, -k);
  }

  return result.join('-');
}

let s = "5F3Z-2e-9-w";
let k = 4;
console.log(licenseKeyFormatting(s, k));
// Output: "5F3Z-2E9W"
s = "2-5g-3-J";
k = 2;
console.log(licenseKeyFormatting(s, k));
// Output: "2-5G-3J"
