/*
adding-big-numbers

# codewars/4kyu/Adding Big Numbers
Difficulty:
URL: https://www.codewars.com/kata/525f4206b73515bffb000b21
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function add(a, b) {
  let n1 = ['0', ...a].reverse();
  let n2 = ['0', ...b].reverse();
  
  if (n1.length < n2.length) {
    [n1, n2] = [n2, n1];
  }
  
  return n1.map((e, i, arr) => {
    const sum = Number(e) + (Number(n2[i]) || 0);
    arr[i + 1] = (Number(arr[i + 1]) + Math.floor(sum / 10)).toString();
    
    return sum % 10;
  })
    .reverse()
    .join('')
    .replace(/^0/, '');
}

// test
console.log(add("1", "1"), "2");
console.log(add("123", "456"), "579");
console.log(add("888", "222"), "1110");
console.log(add("1372", "69"), "1441");
console.log(add("12", "456"), "468");
console.log(add("101", "100"), "201");
console.log(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963");
