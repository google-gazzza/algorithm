// [JS][6kyu] Harshad or Niven numbers
// harshad-or-niven-numbers
// https://www.codewars.com/kata/54a0689443ab7271a90000c6/train/javascript

const isHarshad = (num) => {
  const numArr = String(num).split('')
  const sum = numArr.reduce((acc, cur) => acc + Number(cur), 0)
  return num % sum === 0
}

const Harshad = (function () {
  'use strict'

  const harshadMap = new Map()

  return {
    isValid: function (number) {
      if (harshadMap.has(number)) {
        return harshadMap.get(number)
      }
      const result = isHarshad(number)
      harshadMap.set(number, result)
      return result
    },

    getNext: function (number) {
      let target = number + 1
      let isHarshadNumber = isHarshad(target)
      while (!isHarshadNumber) {
        target += 1
        isHarshadNumber = isHarshad(target)
      }
      return target
    },

    getSerie: function (count, start) {
      const result = []
      let accCount = 0
      let accNumber = start || 0
      while (accCount < count) {
        const nextNumber = this.getNext(accNumber)
        result.push(nextNumber)
        accCount += 1
        accNumber = nextNumber
      }

      return result
    },
  }
})()

// Harshad.isValid(1)
// Harshad.isValid(18)
// Harshad.isValid(19)
// Harshad.getNext(1)
// Harshad.getNext(18)
// Harshad.getNext(1000)
Harshad.getSerie(10)
Harshad.getSerie(20)
Harshad.getSerie(10, 1000)
