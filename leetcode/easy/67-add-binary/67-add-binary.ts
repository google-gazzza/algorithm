/*
# leetcode/easy/67. Add Binary
# 67-add-binary
# URL: https://leetcode.com/problems/add-binary/description/?envType=study-plan-v2&id=programming-skills

NOTE: Description
NOTE: Constraints
NOTE: Explanatin
NOTE: Reference

*/

function addBinary(a: string, b: string): string {
  if (a.length > b.length) {
    b = b.padStart(a.length, '0');
  } else {
    a = a.padStart(b.length, '0');
  }

  const aArr = a.split('').reverse();
  const bArr = b.split('').reverse();

  let carry = 0;
  for (let i = 0; i < aArr.length; i += 1) {
    const cur = parseInt(aArr[i], 10) + parseInt(bArr[i], 10) + carry;

    if (cur < 2) {
      aArr[i] = cur.toString();
      carry = 0;
    } else {
      aArr[i] = (cur % 2).toString();
      carry = 1;
    }
  }

  if (carry === 1) {
    aArr.push('1');
  }

  return aArr.reverse().join('');
}

let a = '11';
let b = '1';
console.log(addBinary(a, b));
// Output: "100"

a = '1010';
b = '1011';
console.log(addBinary(a, b));
// Output: "10101"

a = '1';
b = '111';
console.log(addBinary(a, b));
