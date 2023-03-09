// [JS][7kyu] Santa's Naughty List
// santa-s-naughty-list
// https://www.codewars.com/kata/5a0b4dc2ffe75f72f70000ef/train/javascript

const findChildren = (santasList, children) => {
  const childSet = new Set()

  return santasList
    .filter((child) => {
      if (childSet.has(child)) {
        return false
      }
      childSet.add(child)
      return true
    })
    .filter((child) => children.includes(child))
    .sort()
}

// findChildren(['Jason', 'Jackson', 'Jordan', 'Johnny'], ['Jason', 'Jordan', 'Jennifer'])
// findChildren(['jASon', 'JAsoN', 'JaSON', 'jasON'], ['JasoN', 'jASOn', 'JAsoN', 'jASon', 'JASON'])
findChildren(['Jason', 'James', 'Johnson'], ['Jason', 'James', 'JJ'])
// findChildren(['Jason', 'James', 'Johnson', 'Jason'], ['Jason', 'James', 'JJ'])
