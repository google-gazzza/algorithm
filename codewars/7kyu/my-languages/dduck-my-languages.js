// my-languages
// My Languages
// difficulty: 7kyu
// https://www.codewars.com/kata/5b16490986b6d336c900007d

const myLanguages = (input) => Object.entries(input)
  .sort((a, b) => b[1] - a[1])
  .map(([key, val]) => val >= 60 ? key : null)
  .filter((e) => e);



console.log(myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }), ["Ruby", "Python"]);
console.log(myLanguages({ "Hindi": 60, "Greek": 71, "Dutch": 93 }), ["Dutch", "Greek", "Hindi"]);
console.log(myLanguages({ "C++": 50, "ASM": 10, "Haskell": 20 }), []);
