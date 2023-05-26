/*
simple-letter-removal

# codewars/7kyu/Simple letter removal
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5b728f801db5cec7320000c7
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function solve(s, k) {
  let charCode = 97;
  
  for (let i = 0; i < k; i += 1) {
    while (s.indexOf(String.fromCharCode(charCode)) === -1) {
      charCode += 1;
      
      if (charCode > 122) {
        break;
      }
    }
    
    s = s.replace(String.fromCharCode(charCode), '');
  }
  
  return s;
}

// test
console.log(solve('abracadabra', 1), 'bracadabra');
console.log(solve('abracadabra', 2), 'brcadabra');
console.log(solve('abracadabra', 6), 'rcdbr');
console.log(solve('abracadabra', 8), 'rdr');
console.log(solve('abracadabra', 50), '');
