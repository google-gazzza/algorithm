/*
clock-in-mirror

# codewars/6kyu/Clock in Mirror
Difficulty: 6kyu
URL: https://www.codewars.com/kata/56548dad6dae7b8756000037
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/
const padWithZero = (n) => String(n).padStart(2, '0');

function WhatIsTheTime(timeInMirror) {
  let [hh, mm] = timeInMirror.split(':').map(Number);
  let time = 0;
  let additinalTime = 0;
  
  if (mm > 0) {
    additinalTime = -1;
  }
  
  time = (((12 - hh) || 12) + additinalTime || 12);
  
  return `${padWithZero(time)}:${padWithZero((30 + (30 - mm)) % 60)}`;
}

// test
console.log(WhatIsTheTime('06:35'), '05:25');
console.log(WhatIsTheTime('11:59'), '12:01');
console.log(WhatIsTheTime('12:02'), '11:58');
console.log(WhatIsTheTime('04:00'), '08:00');
console.log(WhatIsTheTime('06:00'), '06:00');
console.log(WhatIsTheTime('12:00'), '12:00');
console.log(WhatIsTheTime('07:31'), '04:29');
