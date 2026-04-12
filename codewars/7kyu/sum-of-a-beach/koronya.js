// [JS][7kyu] Sum of a Beach
// sum-of-a-beach
// https://www.codewars.com/kata/5b37a50642b27ebf2e000010/train/javascript

const sumOfABeach = (beach) => {
  const lowerBeach = beach.toLowerCase()
  const pattern = /sand|water|fish|sun/g
  const result = lowerBeach.match(pattern)
  return result ? result.length : 0
}

sumOfABeach('WAtErSlIde') === 1
sumOfABeach('GolDeNSanDyWateRyBeaChSuNN') === 3
sumOfABeach('gOfIshsunesunFiSh') === 4
sumOfABeach('cItYTowNcARShoW') === 0
