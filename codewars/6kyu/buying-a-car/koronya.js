// [JS][6kyu] Buying a car
// buying-a-car
// https://www.codewars.com/kata/554a44516729e4d80b000012/train/javascript

const nbMonths = (startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) => {
  let newCar = startPriceNew
  let oldCar = startPriceOld
  let percent = percentLossByMonth
  let until = oldCar - newCar
  let money = 0

  let index = 1
  while (until < 0) {
    if (index % 2 === 0) {
      percent += 0.5
    }
    oldCar *= 1 - percent / 100
    newCar *= 1 - percent / 100
    oldCar - newCar + savingperMonth
    money += savingperMonth
    until = oldCar - newCar + money
    index += 1
  }

  return [index - 1, Math.round(until)]
}

nbMonths(2000, 8000, 1000, 1.5)
nbMonths(12000, 8000, 1000, 1.5)
