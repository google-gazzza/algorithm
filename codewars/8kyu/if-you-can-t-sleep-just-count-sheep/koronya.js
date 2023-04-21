// [JS][8kyu] If you can't sleep, just count sheep!!
// if-you-can-t-sleep-just-count-sheep
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

const countSheep = (num) => {
  return Array.from({ length: num })
    .map((_, i) => `${i + 1} sheep...`)
    .join('')
}

countSheep(0)
countSheep(1)
countSheep(2)
