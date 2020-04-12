// https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript

const tidyNumber = (n) => String(n).split('')
  .every((e, i, arr) => {
    return arr[i + 1] ? e <= arr[i + 1] : true;
  });

console.log(tidyNumber(12), true);
console.log(tidyNumber(102), false);
console.log(tidyNumber(9672), false);
console.log(tidyNumber(2789), true);
console.log(tidyNumber(2335), true);
