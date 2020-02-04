// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/submissions/

// Runtime: 68 ms, faster than 99.17% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
// Memory Usage: 38.5 MB, less than 100.00% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
// Runtime: 80 ms, faster than 83.63% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
//   Memory Usage: 38.4 MB, less than 100.00% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.


// functional programming style
const replaceElements = (arr) => {
  arr.reduceRight((a, c, i, arr) => (arr[i] = arr[i + 1] > arr[i] ? arr[i + 1] : arr[i]));
  return [...arr.slice(1), -1];
};

const replaceElements2 = (arr) => {
  arr.reduceRight((a, c, i, arr) => (arr[i] = arr[i + 1] > c ? arr[i + 1] : c));
  return [...arr.slice(1), -1];
};

// Imperative programming style
const replaceElements3 = (arr) => {
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] < arr[i + 1]) {
      arr[i] = arr[i + 1];
    }
  }
  arr.push(-1);
  return arr.slice(1);
};

const arr = [17, 18, 5, 4, 6, 1];
console.log(replaceElements(arr));
// Output: [18,6,6,6,1,-1]


let start;
let end;

// time measure - 2
start = new Date().getTime();
for (let i = 0; i < 1000000; i += 1) {
  replaceElements2(arr);
}
end = new Date().getTime();
console.log(`Call to replaceElement2 took ${(end - start)}  milliseconds.`);

// time measure - 1
start = new Date().getTime();
for (let i = 0; i < 1000000; i += 1) {
  replaceElements(arr);
}
end = new Date().getTime();
console.log(`Call to replaceElement took ${(end - start)}  milliseconds.`);


// -------------
// call replaceElement first, and call replaceElement2
// -------------
// Call to replaceElement took 136  milliseconds.
// Call to replaceElement2 took 233  milliseconds.
// Call to replaceElement took 103  milliseconds.
// Call to replaceElement2 took 189  milliseconds.
// Call to replaceElement took 141  milliseconds.
// Call to replaceElement2 took 238  milliseconds.
// Call to replaceElement took 127  milliseconds.
// Call to replaceElement2 took 221  milliseconds.

// -------------
// call replaceElement2 first, and call replaceElement
// -------------
// Call to replaceElement2 took 185  milliseconds.
// Call to replaceElement took 110  milliseconds.
// Call to replaceElement2 took 128  milliseconds.
// Call to replaceElement took 196  milliseconds.
// Call to replaceElement2 took 122  milliseconds.
// Call to replaceElement took 161  milliseconds.
// Call to replaceElement2 took 134  milliseconds.
// Call to replaceElement took 199  milliseconds.
