// [JS][7kyu] Fruit string calculator
// fruit-string-calculator
// https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3/train/javascript

const calculate = (string) => {
  const numArr = string.match(/(\d+)/g).map((item) => Number(item))
  return string.includes('loses') ? numArr.reduce((acc, num) => acc - num) : numArr.reduce((acc, num) => acc + num)
}

calculate('Panda has 48 apples and loses 4') === 44
calculate('Jerry has 34 apples and gains 6') === 40
