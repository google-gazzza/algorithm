// [JS][7kyu] Chinese Zodiac
// chinese-zodiac
// https://www.codewars.com/kata/57a73e697cb1f31dd70000d2/train/javascript

const ZODIAC_LIST = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']
const ELEMENT_LIST = ['Wood', 'Fire', 'Earth', 'Metal', 'Water']

const chineseZodiac = (year) => {
  const yearDiff = year - 1924
  const element = ELEMENT_LIST[Math.floor(yearDiff / 2) % 5]
  const zodiacSign = ZODIAC_LIST[yearDiff % 12]

  return `${element} ${zodiacSign}`
}

chineseZodiac(1965) === 'Wood Snake'
chineseZodiac(1938) === 'Earth Tiger'
chineseZodiac(1998) === 'Earth Tiger'
chineseZodiac(2016) === 'Fire Monkey'
chineseZodiac(1924) === 'Wood Rat'
chineseZodiac(1968) === 'Earth Monkey'
chineseZodiac(2162) === 'Water Dog'
