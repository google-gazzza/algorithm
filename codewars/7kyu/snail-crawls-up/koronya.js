// [JS][7kyu] Snail crawls up
// snail-crawls-up
// https://www.codewars.com/kata/5b93fecd8463745630001d05/train/javascript

const snail = (column, day, night) => {
  const speed = day - night
  const days = Math.ceil((column - day) / speed)
  return days + 1
}

snail(3, 2, 1) === 2
snail(10, 3, 1) === 5
snail(10, 3, 2) === 8
snail(100, 20, 5) === 7
snail(5, 10, 3) === 1
