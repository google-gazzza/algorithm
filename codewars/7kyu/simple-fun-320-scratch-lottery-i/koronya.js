// [JS][7kyu] Simple Fun #320: Scratch lottery I
// simple-fun-320-scratch-lottery-i
// https://www.codewars.com/kata/594a1822a2db9e93bd0001d4/train/javascript

const scratch = (lottery) => {
  return lottery.reduce((acc, cur) => {
    const arr = cur.split(' ')
    const price = Number(arr[arr.length - 1])
    const animalArr = arr.slice(0, arr.length - 1)

    return animalArr.every((animal) => animal === animalArr[0]) === true ? acc + price : acc
  }, 0)
}

scratch(['tiger tiger tiger 100', 'rabbit dragon snake 100', 'rat ox pig 1000', 'dog cock sheep 10', 'horse monkey rat 5', 'dog dog dog 1000'])
