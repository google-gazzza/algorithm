// [JS][5kyu] Sort - one, three, two
// sort-one-three-two
// https://www.codewars.com/kata/56f4ff45af5b1f8cd100067d/train/javascript

const numMap = new Map([
  [0, 'zero'],
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  [4, 'four'],
  [5, 'five'],
  [6, 'six'],
  [7, 'seven'],
  [8, 'eight'],
  [9, 'nine'],
  [10, 'ten'],
  [11, 'eleven'],
  [12, 'twelve'],
  [13, 'thirteen'],
  [14, 'fourteen'],
  [15, 'fifteen'],
  [16, 'sixteen'],
  [17, 'seventeen'],
  [18, 'eighteen'],
  [19, 'nineteen'],
  [20, 'twenty'],
  [30, 'thirty'],
  [40, 'forty'],
  [50, 'fifty'],
  [60, 'sixty'],
  [70, 'seventy'],
  [80, 'eighty'],
  [90, 'ninety'],
])

const getName = (num) => {
  if (numMap.has(num)) {
    return numMap.get(num)
  }
  const hundredUnits = Math.floor(num / 100)
  const hundredString = hundredUnits > 0 ? `${numMap.get(hundredUnits)} hundred${hundredUnits > 1 ? 's' : ''}` : ''

  const hundredsRemainder = num % 100
  const tenUnits = Math.floor(hundredsRemainder / 10)
  const oneUnits = hundredsRemainder % 10
  const underHundredString =
    hundredsRemainder > 20 ? `${numMap.get(tenUnits * 10)} ${oneUnits !== 0 ? numMap.get(oneUnits) : ''}` : numMap.get(hundredsRemainder)
  const adjustUnderHundredString = underHundredString === 'zero' && hundredString !== '' ? '' : underHundredString

  return `${hundredString} ${adjustUnderHundredString}`.trim()
}

const sortByName = (ary) => {
  const newArr = ary.map((num) => [num, getName(num)])
  newArr.sort((a, b) => a[1].localeCompare(b[1]))
  return newArr.map((item) => item[0])
}

sortByName([8, 8, 9, 9, 10, 10])
sortByName([1, 2, 3, 4])
sortByName([9, 99, 999])
sortByName([0, 1, 3, 2])
sortByName([590, 417, 475, 47, 967, 748, 647, 673, 292, 272])
