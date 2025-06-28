// [JS][7kyu] Simple Fun #38: House Of Cats
// simple-fun-38-house-of-cats
// https://www.codewars.com/kata/588810c99fb63e49e1000606/train/javascript

const houseOfCats = (legs) => {
  const maxCats = Math.floor(legs / 4)
  return Array.from({ length: maxCats + 1 }, (_, i) => (legs - i * 4) / 2).reverse()
}

houseOfCats(6)
houseOfCats(2)
houseOfCats(8)
houseOfCats(4)
houseOfCats(44)
