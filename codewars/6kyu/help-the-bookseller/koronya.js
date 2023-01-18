// [JS][6kyu] Help the bookseller !
// help-the-bookseller
// https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript

const stockList = (listOfArt, listOfCat) => {
  if (listOfArt.length === 0) {
    return ''
  }
  const categoryMap = new Map()
  listOfCat.forEach((category) => categoryMap.set(category, 0))
  listOfArt.forEach((item) => {
    const [first, number] = item.split(' ')
    const key = first[0]
    if (categoryMap.has(key) === true) {
      categoryMap.set(key, categoryMap.get(key) + Number(number))
    }
  })

  return [...categoryMap].map((item) => `(${item[0]} : ${item[1]})`).join(' - ')
}

b = ['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600']
c = ['A', 'B', 'C', 'D']
// res = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"
stockList(b, c)

// b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
// c = ["A", "B"]
// res = "(A : 200) - (B : 1140)"
// stockList(b, c)
