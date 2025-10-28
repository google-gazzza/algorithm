// [JS][7kyu] 99 Bottles of Beer
// 99-bottles-of-beer
// https://www.codewars.com/kata/52a723508a4d96c6c90005ba/train/javascript

const sing = () => {
  const resultArr = []
  for (let i = 99; i >= 0; i -= 1) {
    if (i > 1) {
      resultArr.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`)
      resultArr.push(`Take one down and pass it around, ${i - 1} ${i - 1 === 1 ? 'bottle' : 'bottles'} of beer on the wall.`)
    } else if (i === 1) {
      resultArr.push(`1 bottle of beer on the wall, 1 bottle of beer.`)
      resultArr.push(`Take one down and pass it around, no more bottles of beer on the wall.`)
    } else {
      resultArr.push(`No more bottles of beer on the wall, no more bottles of beer.`)
      resultArr.push(`Go to the store and buy some more, 99 bottles of beer on the wall.`)
    }
  }
  return resultArr
}

sing()
