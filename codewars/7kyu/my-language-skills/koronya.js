// [JS][7kyu] My Language Skills
// my-language-skills
// https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript

const myLanguages = (results) => {
  return Object.entries(results)
    .filter((result) => result[1] >= 60)
    .sort((a, b) => b[1] - a[1])
    .map((result) => result[0])
}

myLanguages({ Java: 10, Ruby: 80, Python: 65 })
myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 })
myLanguages({ 'C++': 50, ASM: 10, Haskell: 20 })
