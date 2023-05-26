// [JS][7kyu] Russian plurals
// russian-plurals
// https://www.codewars.com/kata/5b1d38f4d74b5b07350000a3/train/javascript

const makePlural = (options, number) => {
  const [singular, genitiveSingular, genitivePlural] = options
  const residue = number % 10
  switch (residue) {
    case 1:
      if (number !== 11 && number !== 111) {
        return singular
      }
      break
    case 2:
    case 3:
    case 4:
      if (number >= 20 || number <= 10) {
        return genitiveSingular
      }
      break
    default:
      return genitivePlural
  }
  return genitivePlural
}

makePlural(['день', 'дня', 'дней'], 0) === 'дней'
makePlural(['день', 'дня', 'дней'], 1) === 'день'
makePlural(['день', 'дня', 'дней'], 2) === 'дня'
makePlural(['день', 'дня', 'дней'], 3) === 'дня'
makePlural(['день', 'дня', 'дней'], 4) === 'дня'
makePlural(['день', 'дня', 'дней'], 5) === 'дней'
makePlural(['день', 'дня', 'дней'], 11) === 'дней'
makePlural(['день', 'дня', 'дней'], 20) === 'дней'
makePlural(['день', 'дня', 'дней'], 21) === 'день'
makePlural(['день', 'дня', 'дней'], 22) === 'дня'
