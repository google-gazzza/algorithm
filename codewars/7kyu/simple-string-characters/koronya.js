// [JS][7kyu] Simple string characters
// simple-string-characters
// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058

const isSpecialCharacter = (str) => /^[\!\@\#\$\%\^\&\*\(\)\_\+\-\=\{\}\|\[\]\\\:\;\"\'\<\,\>\.\?\/]+$/.test(str)
const isUpperCase = (str) => /^[A-Z]+$/.test(str)
const isLowerCase = (str) => /^[a-z]+$/.test(str)
const isNumber = (str) => /^[0-9]+$/.test(str)

const solve = (s) => {
  const sLen = s.length
  let upperCount = 0
  let lowerCount = 0
  let numberCount = 0
  let characterCount = 0
  for (let i = 0; i < sLen; i += 1 || 0) {
    const c = s[i]
    if (isUpperCase(c)) {
      upperCount += 1
    } else if (isLowerCase(c)) {
      lowerCount += 1
    } else if (isNumber(c)) {
      numberCount += 1
    } else {
      characterCount += 1
    }
  }

  return [upperCount, lowerCount, numberCount, characterCount]
}

solve("*'&ABCDabcde12345")

solve('')
solve('aAbBcC')
solve('Codewars@codewars123.com')
solve('bgA5<1d-tOwUZTS8yQ')
solve('P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H')
solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD")
solve('$Cnl)Sr<7bBW-&qLHI!mY41ODe')
solve('@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft')
