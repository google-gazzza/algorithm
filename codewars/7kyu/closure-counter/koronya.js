// [JS][7kyu] Closure Counter
// closure-counter
// https://www.codewars.com/kata/60edafd71dad1800563cf933/train/javascript

const counter = () => {
  let count = 0
  return () => {
    count += 1
    return count
  }
}

const counterOne = counter()
const counterTwo = counter()
counterOne()
counterOne()
counterTwo()
counterTwo()
