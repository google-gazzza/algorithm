// [JS][7kyu] "Very Even" Numbers.
// very-even-numbers
// https://www.codewars.com/kata/58c9322bedb4235468000019/train/javascript

const isVeryEvenNumber = (n) => {
  let target = n
  while (target > 9) {
    target
    target = String(target)
      .split('')
      .reduce((acc, cur) => acc + Number(cur), 0)
  }
  return target % 2 === 0
}

isVeryEvenNumber(88)
isVeryEvenNumber(222)
isVeryEvenNumber(1234)
