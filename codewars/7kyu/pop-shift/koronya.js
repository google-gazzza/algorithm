// [JS][7kyu] PopShift
// pop-shift
// https://www.codewars.com/kata/57cec34272f983e17800001e/train/javascript

const popShift = (s) => {
  let firstStr = ''
  let secondStr = ''
  let targetStr = s
  while (targetStr.length > 1) {
    firstStr += targetStr[targetStr.length - 1]
    secondStr += targetStr[0]
    targetStr = targetStr.slice(1, targetStr.length - 1)
  }

  const thirdStr = targetStr.length === 1 ? targetStr : ''
  return [firstStr, secondStr, thirdStr]
}

popShift('reusetestcasesbitcointakeovertheworldmaybewhoknowsperhaps')
popShift('turnsoutrandomtestcasesareeasierthanwritingoutbasicones')
popShift('exampletesthere')
popShift('aa')
popShift('b')
popShift('')
