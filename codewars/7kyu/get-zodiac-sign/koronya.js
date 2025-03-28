// [JS][7kyu] Get Zodiac Sign
// get-zodiac-sign
// https://www.codewars.com/kata/5a376259b6cfd77ca000006b/train/javascript

const signs = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius']

const getZodiacSign = (day, month) => {
  if (month === 1) {
    return day < 20 ? signs[0] : signs[1]
  }
  if (month === 2) {
    return day < 19 ? signs[1] : signs[2]
  }
  if (month === 3) {
    return day < 21 ? signs[2] : signs[3]
  }
  if (month === 4) {
    return day < 20 ? signs[3] : signs[4]
  }
  if (month === 5) {
    return day < 21 ? signs[4] : signs[5]
  }
  if (month === 6) {
    return day < 21 ? signs[5] : signs[6]
  }
  if (month === 7) {
    return day < 23 ? signs[6] : signs[7]
  }
  if (month === 8) {
    return day < 23 ? signs[7] : signs[8]
  }
  if (month === 9) {
    return day < 23 ? signs[8] : signs[9]
  }
  if (month === 10) {
    return day < 23 ? signs[9] : signs[10]
  }
  if (month === 11) {
    return day < 22 ? signs[10] : signs[11]
  }
  if (month === 12) {
    return day < 22 ? signs[11] : signs[0]
  }
}

getZodiacSign(10, 10) === 'Libra'
getZodiacSign(1, 5) === 'Taurus'
getZodiacSign(6, 9) === 'Virgo'
getZodiacSign(25, 11) === 'Sagittarius'
