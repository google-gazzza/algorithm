// [JS][7kyu] Balanced Number (Special Numbers Series #1 )
// balanced-number-special-numbers-series-1
// https://www.codewars.com/kata/5a4e3782880385ba68000018/train/javascript

const getSum = (str) => str.split('').reduce((acc, cur) => acc + Number(cur), 0)

const balancedNum = (number) => {
  const numberStr = String(number)
  const numberStrLen = numberStr.length
  if (numberStrLen === 1) {
    return 'Balanced'
  }
  const isOddStr = numberStrLen % 2 === 1
  const halfIndex = Math.floor(numberStrLen / 2)
  const leftIndex = isOddStr ? halfIndex : halfIndex - 1
  const leftSum = getSum(numberStr.substring(0, leftIndex))
  const rightSum = getSum(numberStr.substring(halfIndex + 1))

  return leftSum === rightSum ? 'Balanced' : 'Not Balanced'
}

balancedNum(7)
balancedNum(959)
balancedNum(13)
balancedNum(432)
balancedNum(424)

balancedNum(1024)
balancedNum(66545)
balancedNum(295591)
balancedNum(1230987)
balancedNum(56239814)
