// [JS][7kyu] Square Pi's
// square-pi-s
// https://www.codewars.com/kata/5cd12646cf44af0020c727dd/train/javascript

const PI_STR = '31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'

const squarePi = (digits) => {
  const piDigits = PI_STR.slice(0, digits)
  return Math.ceil(Math.sqrt(piDigits.split('').reduce((acc, curr) => acc + Number(curr) ** 2, 0)))
}

squarePi(5) === 8
squarePi(10) === 15
