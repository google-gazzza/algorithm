/*
double-cola

# codewars/5kyu/Double Cola
Difficulty: 5kyu
URL: https://www.codewars.com/kata/551dd1f424b7a4cdae0001f0/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/
const whoIsNext = (names, n) => {
  while (n > names.length) {
    n = Math.ceil((n - names.length) / 2);
  }
  
  return names[n - 1];
};

// test
let names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
console.log(whoIsNext(names, 1), "Sheldon");
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1) == "Sheldon";
//?
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52) == "Penny";
//?
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) == "Leonard";
//?
